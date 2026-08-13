#!/usr/bin/env python3
import argparse
import json
import os
import sys

os.environ.setdefault('ARGOS_DEVICE_TYPE', 'cpu')
os.environ.setdefault('ARGOS_CHUNK_TYPE', 'MINISBD')
os.environ.setdefault(
    'ARGOS_PACKAGE_INDEX',
    'https://raw.githubusercontent.com/argosopentech/argospm-index/main/'
)

import argostranslate.package
import argostranslate.translate

TARGETS = ('tr', 'ar')


def installed_pair(target):
    languages = argostranslate.translate.get_installed_languages()
    source = next((item for item in languages if item.code == 'en'), None)
    dest = next((item for item in languages if item.code == target), None)
    if not source or not dest:
        return None
    return source.get_translation(dest)


def ensure_models():
    missing = [target for target in TARGETS if installed_pair(target) is None]
    if not missing:
        return

    print(
        'Updating official Argos package index for: ' + ', '.join(missing),
        file=sys.stderr,
        flush=True,
    )
    argostranslate.package.update_package_index()
    available = argostranslate.package.get_available_packages()

    for target in missing:
        package = next(
            (
                item for item in available
                if item.from_code == 'en' and item.to_code == target
            ),
            None,
        )
        if package is None:
            raise RuntimeError(f'No direct Argos model found for en -> {target}')

        print(
            f'Downloading offline model en -> {target} ({package.package_version})...',
            file=sys.stderr,
            flush=True,
        )
        model_path = package.download()
        argostranslate.package.install_from_path(model_path)

        if installed_pair(target) is None:
            raise RuntimeError(f'Argos model en -> {target} installed but is unavailable')

        print(
            f'Installed offline model en -> {target}.',
            file=sys.stderr,
            flush=True,
        )


def translate_many(target, strings):
    pair = installed_pair(target)
    if pair is None:
        raise RuntimeError(f'Missing installed translation model en -> {target}')

    result = []
    total = len(strings)

    for index, text in enumerate(strings, 1):
        translated = pair.translate(text)
        if not isinstance(translated, str) or not translated.strip():
            raise RuntimeError(
                f'Offline translation returned empty output for {target}: {text[:100]}'
            )
        result.append(translated)

        if index % 25 == 0 or index == total:
            print(
                f'[{target}] offline translated {index}/{total}',
                file=sys.stderr,
                flush=True,
            )

    return result


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--install-only', action='store_true')
    parser.add_argument('--target', choices=TARGETS)
    args = parser.parse_args()

    ensure_models()

    if args.install_only:
        for target in TARGETS:
            sample = installed_pair(target).translate('Restaurant operations')
            if not sample or sample.strip() == 'Restaurant operations':
                raise RuntimeError(f'Offline translation smoke test failed for en -> {target}')
            print(
                f'OK en -> {target}: {sample}',
                file=sys.stderr,
                flush=True,
            )
        return

    if not args.target:
        parser.error('--target is required unless --install-only is used')

    payload = json.load(sys.stdin)
    strings = payload.get('strings')
    if not isinstance(strings, list) or not all(isinstance(x, str) for x in strings):
        raise RuntimeError('Expected JSON object containing a string array named strings')

    translated = translate_many(args.target, strings)
    json.dump({'translations': translated}, sys.stdout, ensure_ascii=False)
    sys.stdout.write('\n')


if __name__ == '__main__':
    main()
