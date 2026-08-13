import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { parse } from '@babel/parser';
import traverseModule from '@babel/traverse';
import generateModule from '@babel/generator';
import * as t from '@babel/types';

const traverse = traverseModule.default || traverseModule;
const generate = generateModule.default || generateModule;
const ROOT = process.cwd();
const ARGOS_PYTHON = process.env.PMD_ARGOS_PYTHON || path.join(process.env.HOME || '', '.cache', 'paymydine-native-i18n', 'venv', 'bin', 'python');
const ARGOS_HELPER = path.join(ROOT, 'scripts', 'pmd-argos-translate.py');

const LOCALES = {
  tr: { target: 'tr', label: 'Turkish' },
  ar: { target: 'ar', label: 'Arabic (Oman / MSA)' }
};

const EXCLUDED_COMPONENTS = new Set([
  'GlobalTranslation.js',
  'LanguageSwitcher.js'
]);

const TECH_KEYS = new Set([
  'href', 'src', 'image', 'compactImage', 'heroImage', 'articleImage',
  'icon', 'accent', 'slug', 'key', 'className', 'id', 'name', 'type',
  'target', 'rel', 'role', 'method', 'action', 'path', 'route', 'number',
  'size', 'width', 'height', 'viewBox', 'd', 'fill', 'stroke',
  'strokeWidth', 'strokeLinecap', 'strokeLinejoin', 'loading', 'decoding',
  'crossOrigin', 'inputMode', 'autoComplete', 'defaultValue', 'value',
  'rows', 'cols', 'min', 'max', 'step'
]);

const TECH_JS_STRINGS = new Set([
  'Escape', 'Enter', 'Tab', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight',
  'click', 'change', 'submit', 'pointerdown', 'keydown', 'resize', 'scroll',
  'en', 'tr', 'ar', 'ar-OM', 'ltr', 'rtl', 'GET', 'POST', 'PUT', 'DELETE',
  'true', 'false', 'undefined', 'null', 'anonymous', 'smooth', 'auto',
  'button', 'dialog', 'polite', 'email', 'text', 'main', 'navigation'
]);

const TECH_ATTRS = new Set([
  'className', 'href', 'src', 'id', 'name', 'type', 'target', 'rel', 'role',
  'method', 'action', 'loading', 'decoding', 'width', 'height', 'size',
  'icon', 'accent', 'viewBox', 'd', 'fill', 'stroke', 'strokeWidth',
  'strokeLinecap', 'strokeLinejoin', 'crossOrigin', 'rows', 'cols',
  'defaultValue', 'value', 'required', 'disabled', 'tabIndex', 'translate'
]);

const PROTECTED_TERMS = [
  'PayMyDine', 'KDS', 'CRM', 'QR', 'POS', 'AI', 'API', 'KPI', 'SSO',
  'PCI', 'GDPR', 'VAT', 'CSV', 'JSON', 'SaaS'
];

function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  const result = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) result.push(...walk(full));
    else result.push(full);
  }
  return result;
}

function posix(value) {
  return value.split(path.sep).join('/');
}

function ensureDir(file) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
}

function humanCore(value) {
  return String(value).trim();
}

function hasLetters(value) {
  return /\p{L}/u.test(value);
}

function looksLikeRouteOrAsset(value) {
  const s = value.trim();
  if (!s) return true;
  if (/^(https?:|mailto:|tel:|data:|#)/i.test(s)) return true;
  if (s.startsWith('/')) return true;
  if (/\.(webp|png|jpe?g|gif|svg|ico|avif|pdf|zip|js|css|json|mjs)$/i.test(s)) return true;
  return false;
}

function isLowerTechnicalToken(value) {
  return /^[a-z0-9][a-z0-9_-]*$/.test(value) && !value.includes(' ');
}

function jsxAttributeName(attributePath) {
  const node = attributePath?.node;
  if (!node || !t.isJSXAttribute(node) || !t.isJSXIdentifier(node.name)) return null;
  return node.name.name;
}

function objectKeyName(propertyPath) {
  const node = propertyPath?.node;
  if (!node || !t.isObjectProperty(node)) return null;
  if (t.isIdentifier(node.key) && !node.computed) return node.key.name;
  if (t.isStringLiteral(node.key)) return node.key.value;
  return null;
}

function variableName(pathRef) {
  let current = pathRef;
  while (current) {
    if (current.isVariableDeclarator?.()) {
      const id = current.node.id;
      return t.isIdentifier(id) ? id.name : '';
    }
    current = current.parentPath;
  }
  return '';
}

function shouldTranslateString(pathRef, rawValue) {
  const value = humanCore(rawValue);
  if (!value || !hasLetters(value)) return false;
  if (looksLikeRouteOrAsset(value)) return false;
  if (TECH_JS_STRINGS.has(value)) return false;
  if (PROTECTED_TERMS.includes(value)) return false;

  const parent = pathRef.parentPath;
  if (!parent) return false;

  if (
    parent.isImportDeclaration?.() ||
    parent.isExportNamedDeclaration?.() ||
    parent.isExportAllDeclaration?.() ||
    parent.isDirective?.()
  ) return false;

  if (pathRef.isJSXText?.()) return true;

  if (parent.isJSXAttribute?.()) {
    const attr = jsxAttributeName(parent);
    return attr ? !TECH_ATTRS.has(attr) : false;
  }

  if (parent.isJSXExpressionContainer?.() && parent.parentPath?.isJSXAttribute?.()) {
    const attr = jsxAttributeName(parent.parentPath);
    return attr ? !TECH_ATTRS.has(attr) : false;
  }

  if (parent.isJSXExpressionContainer?.()) return true;

  if (parent.isObjectProperty?.() && parent.node.value === pathRef.node) {
    const key = objectKeyName(parent);
    return key ? !TECH_KEYS.has(key) : true;
  }

  if (parent.isArrayExpression?.()) {
    if (isLowerTechnicalToken(value)) return false;
    if (/^[A-Z0-9]{2,8}$/.test(value)) return false;
    return true;
  }

  if (parent.isVariableDeclarator?.()) {
    const name = variableName(pathRef);
    return /(title|body|intro|text|copy|label|description|eyebrow|message|heading|subtitle|caption|note|proof|question|answer)/i.test(name);
  }

  if (parent.isReturnStatement?.()) return value.includes(' ');

  if (parent.isBinaryExpression?.() || parent.isLogicalExpression?.()) {
    return false;
  }

  if (parent.isCallExpression?.() || parent.isNewExpression?.()) {
    return false;
  }

  return value.includes(' ') && value.length >= 4;
}

function shouldTranslateTemplate(pathRef) {
  const node = pathRef.node;
  if (node.expressions.length !== 0) return false;
  const value = node.quasis.map((q) => q.value.cooked || '').join('');
  return shouldTranslateString(pathRef, value);
}

function parseFile(file) {
  return parse(fs.readFileSync(file, 'utf8'), {
    sourceType: 'module',
    plugins: [
      'jsx',
      'classProperties',
      'objectRestSpread',
      'dynamicImport',
      'topLevelAwait',
      'optionalChaining',
      'nullishCoalescingOperator'
    ]
  });
}

function collectFromFile(file, bucket) {
  const ast = parseFile(file);

  traverse(ast, {
    JSXText(p) {
      const core = humanCore(p.node.value);
      if (core && shouldTranslateString(p, core)) bucket.add(core);
    },
    StringLiteral(p) {
      const core = humanCore(p.node.value);
      if (core && shouldTranslateString(p, core)) bucket.add(core);
    },
    TemplateLiteral(p) {
      if (!shouldTranslateTemplate(p)) return;
      const core = humanCore(p.node.quasis.map((q) => q.value.cooked || '').join(''));
      if (core) bucket.add(core);
    }
  });
}

function protectTerms(text) {
  let masked = text;
  const replacements = [];

  const terms = [
    ...PROTECTED_TERMS,
    ...Array.from(new Set(text.match(/\b[A-Z][A-Z0-9&+.-]{1,10}\b/g) || []))
  ].sort((a, b) => b.length - a.length);

  terms.forEach((term, index) => {
    if (!masked.includes(term)) return;
    const token = `ZXQ${index}QXZ`;
    masked = masked.split(term).join(token);
    replacements.push([token, term]);
  });

  return { masked, replacements };
}

function restoreTerms(text, replacements) {
  let output = text;

  for (const [token, term] of replacements) {
    const pattern = token
      .split('')
      .map((char) => char.replace(/[.*+?^${}()|[\\]\\]/g, '\\$&'))
      .join('\\s*');

    output = output.replace(new RegExp(pattern, 'gi'), term);
  }

  return output;
}

function readCache(locale) {
  const file = path.join(ROOT, 'i18n', 'cache', `${locale}.json`);
  if (!fs.existsSync(file)) return {};
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}

function writeCache(locale, cache) {
  const file = path.join(ROOT, 'i18n', 'cache', `${locale}.json`);
  ensureDir(file);
  fs.writeFileSync(file, `${JSON.stringify(cache, null, 2)}\n`);
}

function translateBatchLocally(strings, target) {
  if (strings.length === 0) return [];

  const protectedBatch = strings.map((source) => protectTerms(source));

  const input = JSON.stringify({
    strings: protectedBatch.map((item) => item.masked)
  });

  console.log(`[${target}] translating ${strings.length} strings locally with Argos...`);

  const result = spawnSync(
    ARGOS_PYTHON,
    [ARGOS_HELPER, '--target', target],
    {
      cwd: ROOT,
      input,
      encoding: 'utf8',
      stdio: ['pipe', 'pipe', 'inherit'],
      maxBuffer: 64 * 1024 * 1024,
      env: {
        ...process.env,
        ARGOS_DEVICE_TYPE: 'cpu',
        ARGOS_CHUNK_TYPE: 'MINISBD',
        ARGOS_PACKAGE_INDEX: 'https://raw.githubusercontent.com/argosopentech/argospm-index/main/'
      }
    }
  );

  if (result.status !== 0) {
    throw new Error(
      `Offline Argos translation failed for ${target} (exit ${result.status}). ${result.error || ''}`
    );
  }

  let parsed;
  try {
    parsed = JSON.parse(result.stdout);
  } catch (error) {
    throw new Error(`Invalid JSON from offline translator for ${target}: ${error.message}`);
  }

  if (!Array.isArray(parsed.translations) || parsed.translations.length !== strings.length) {
    throw new Error(`Offline translator returned the wrong number of strings for ${target}`);
  }

  return parsed.translations.map((translated, index) =>
    restoreTerms(translated, protectedBatch[index].replacements)
  );
}

async function translateAll(strings, locale) {
  const target = LOCALES[locale].target;
  const cache = readCache(locale);
  const pending = strings.filter((value) => !cache[value]);

  console.log(`[${locale}] ${strings.length} source strings, ${pending.length} new translations`);

  if (pending.length > 0) {
    const translated = translateBatchLocally(pending, target);

    pending.forEach((source, index) => {
      cache[source] = translated[index];
    });

    writeCache(locale, cache);
  }

  return cache;
}

function translateCore(raw, cache) {
  const leading = raw.match(/^\s*/)?.[0] || '';
  const trailing = raw.match(/\s*$/)?.[0] || '';
  const core = raw.trim();
  if (!core) return raw;
  const translated = cache[core] || core;
  return `${leading}${translated}${trailing}`;
}

function isInternalRoute(value) {
  if (!value.startsWith('/')) return false;
  if (value === '/') return true;
  if (/^\/(site-assets|assets|Images|_next|api)(\/|$)/.test(value)) return false;
  if (/\.[a-z0-9]{2,5}(?:[?#].*)?$/i.test(value)) return false;
  return true;
}

function localiseRoute(value, locale) {
  if (!isInternalRoute(value)) return value;
  if (value === '/') return `/${locale}`;
  if (value.startsWith(`/${locale}/`) || value === `/${locale}`) return value;
  return `/${locale}${value}`;
}

function rewriteImportSource(value, locale) {
  if (value.startsWith('@/components/')) {
    const rest = value.slice('@/components/'.length);
    if (rest === 'LanguageSwitcher' || rest === 'GlobalTranslation') return value;
    return `@/locales/${locale}/components/${rest}`;
  }
  if (value.startsWith('@/data/')) {
    return `@/locales/${locale}/data/${value.slice('@/data/'.length)}`;
  }
  return value;
}

function transformFile(sourceFile, targetFile, locale, cache) {
  const ast = parseFile(sourceFile);

  traverse(ast, {
    ImportDeclaration(p) {
      p.node.source.value = rewriteImportSource(p.node.source.value, locale);
    },
    ExportNamedDeclaration(p) {
      if (p.node.source) p.node.source.value = rewriteImportSource(p.node.source.value, locale);
    },
    ExportAllDeclaration(p) {
      if (p.node.source) p.node.source.value = rewriteImportSource(p.node.source.value, locale);
    },
    JSXText(p) {
      if (shouldTranslateString(p, p.node.value)) {
        p.node.value = translateCore(p.node.value, cache);
      }
    },
    StringLiteral(p) {
      const original = p.node.value;

      /*
        A human-facing string may be nested inside a JSX attribute
        expression, for example:

          className={open ? 'navTrigger active' : 'navTrigger'}

        The old generator only protected DIRECT JSXAttribute children,
        so it translated class tokens such as "navTrigger active".
        Walk upward to the enclosing JSXAttribute and protect every
        technical attribute regardless of expression nesting.
      */
      const technicalJsxAttribute = (() => {
        let current = p.parentPath;

        while (current) {
          if (current.isJSXAttribute?.()) {
            const attr = jsxAttributeName(current);
            return Boolean(attr && TECH_ATTRS.has(attr));
          }

          if (
            current.isJSXElement?.() ||
            current.isJSXFragment?.() ||
            current.isStatement?.()
          ) {
            break;
          }

          current = current.parentPath;
        }

        return false;
      })();

      if (!technicalJsxAttribute && shouldTranslateString(p, original)) {
        const translated = translateCore(original, cache);

        /*
          JSX quoted attributes cannot safely contain translated quote
          characters as backslash-escaped text. Render translated
          attributes as JavaScript string expressions instead:

            alt={"...quoted text..."}

          This fixes every translated JSX attribute globally rather
          than patching one generated Arabic file.
        */
        if (
          p.parentPath?.isJSXAttribute?.() &&
          p.parentPath.node.value === p.node
        ) {
          p.parentPath.node.value = t.jsxExpressionContainer(
            t.stringLiteral(translated)
          );
          return;
        }

        p.node.value = translated;
      }

      if (isInternalRoute(p.node.value)) {
        p.node.value = localiseRoute(p.node.value, locale);
      }
    },
    TemplateLiteral(p) {
      const node = p.node;

      if (node.expressions.length === 0 && shouldTranslateTemplate(p)) {
        const raw = node.quasis.map((q) => q.value.cooked || '').join('');
        p.replaceWith(t.stringLiteral(translateCore(raw, cache)));
        return;
      }

      const first = node.quasis[0];
      const cooked = first?.value?.cooked || '';
      if (cooked.startsWith('/') && isInternalRoute(cooked)) {
        const updated = localiseRoute(cooked, locale);
        first.value.raw = updated;
        first.value.cooked = updated;
      }
    }
  });

  const output = generate(ast, {
    comments: true,
    compact: false,
    retainLines: false,
    jsescOption: { minimal: true }
  }, fs.readFileSync(sourceFile, 'utf8')).code;

  ensureDir(targetFile);
  fs.writeFileSync(targetFile, `${output}\n`);
}

function sourceFiles() {
  const components = walk(path.join(ROOT, 'components'))
    .filter((file) => file.endsWith('.js'))
    .filter((file) => !EXCLUDED_COMPONENTS.has(path.basename(file)));

  const data = walk(path.join(ROOT, 'data'))
    .filter((file) => file.endsWith('.js'));

  const pages = walk(path.join(ROOT, 'app', '(en)'))
    .filter((file) => path.basename(file) === 'page.js');

  return { components, data, pages, all: [...components, ...data, ...pages] };
}

function destinationFor(file, locale) {
  const componentRoot = path.join(ROOT, 'components');
  const dataRoot = path.join(ROOT, 'data');
  const pageRoot = path.join(ROOT, 'app', '(en)');

  if (file.startsWith(componentRoot + path.sep)) {
    return path.join(ROOT, 'locales', locale, 'components', path.relative(componentRoot, file));
  }

  if (file.startsWith(dataRoot + path.sep)) {
    return path.join(ROOT, 'locales', locale, 'data', path.relative(dataRoot, file));
  }

  if (file.startsWith(pageRoot + path.sep) || file === path.join(pageRoot, 'page.js')) {
    return path.join(ROOT, 'locales', locale, 'pages', path.relative(pageRoot, file));
  }

  throw new Error(`Unknown source file: ${file}`);
}

function importName(locale, index) {
  return `${locale.toUpperCase()}_PAGE_${index}`;
}

function routeInfo(pageFile) {
  const base = path.join(ROOT, 'app', '(en)');
  const rel = posix(path.relative(base, pageFile));
  const noPage = rel === 'page.js' ? '' : rel.replace(/\/page\.js$/, '');
  return { rel, route: noPage };
}

function writeCatchAll(pageFiles) {
  const routes = pageFiles.map(routeInfo);
  const staticRoutes = routes.filter(({ route }) => !route.includes('['));
  const dynamicRoutes = routes.filter(({ route }) => route.includes('['));

  const supportedDynamic = new Set([
    'solutions/[slug]',
    'teams/[slug]',
    'resources/[slug]'
  ]);

  for (const item of dynamicRoutes) {
    if (!supportedDynamic.has(item.route)) {
      throw new Error(`Unsupported dynamic route in generator: ${item.route}`);
    }
  }

  let code = `import { notFound } from 'next/navigation';\n`;
  code += `import { solutionPages, resources } from '@/data/site';\n`;
  code += `import { teamPages } from '@/data/teams';\n\n`;

  for (const locale of Object.keys(LOCALES)) {
    routes.forEach((item, index) => {
      const alias = importName(locale, index);
      const importPath = `@/locales/${locale}/pages/${item.rel.replace(/\.js$/, '')}`;
      code += `import * as ${alias} from '${importPath}';\n`;
    });
  }

  code += `\nconst LOCALES = ['tr', 'ar'];\n\n`;
  code += `const STATIC = {\n`;
  for (const locale of Object.keys(LOCALES)) {
    code += `  ${locale}: {\n`;
    staticRoutes.forEach((item) => {
      const index = routes.findIndex((r) => r.rel === item.rel);
      code += `    ${JSON.stringify(item.route)}: ${importName(locale, index)},\n`;
    });
    code += `  },\n`;
  }
  code += `};\n\n`;

  code += `const DYNAMIC = {\n`;
  for (const locale of Object.keys(LOCALES)) {
    code += `  ${locale}: {\n`;
    dynamicRoutes.forEach((item) => {
      const index = routes.findIndex((r) => r.rel === item.rel);
      const prefix = item.route.split('/')[0];
      code += `    ${JSON.stringify(prefix)}: ${importName(locale, index)},\n`;
    });
    code += `  },\n`;
  }
  code += `};\n\n`;

  code += String.raw`
function normaliseSegments(slug) {
  return Array.isArray(slug) ? slug : [];
}

function validDynamic(prefix, slug) {
  if (prefix === 'solutions') return Object.prototype.hasOwnProperty.call(solutionPages, slug);
  if (prefix === 'teams') return Object.prototype.hasOwnProperty.call(teamPages, slug) || slug === 'front-of-house';
  if (prefix === 'resources') return resources.some((item) => item.slug === slug);
  return false;
}

function findModule(locale, segments) {
  if (!LOCALES.includes(locale)) return null;

  const key = segments.join('/');
  if (Object.prototype.hasOwnProperty.call(STATIC[locale], key)) {
    return { module: STATIC[locale][key], params: null };
  }

  if (segments.length === 2) {
    const [prefix, dynamicSlug] = segments;
    const module = DYNAMIC[locale][prefix];
    if (module && validDynamic(prefix, dynamicSlug)) {
      return { module, params: { slug: dynamicSlug } };
    }
  }

  return null;
}

export const dynamicParams = false;

export function generateStaticParams() {
  const result = [];

  for (const locale of LOCALES) {
    for (const key of Object.keys(STATIC[locale])) {
      result.push({ locale, slug: key ? key.split('/') : [] });
    }

    for (const slug of Object.keys(solutionPages)) {
      result.push({ locale, slug: ['solutions', slug] });
    }

    for (const slug of Object.keys(teamPages)) {
      result.push({ locale, slug: ['teams', slug] });
    }

    result.push({ locale, slug: ['teams', 'front-of-house'] });

    for (const item of resources) {
      result.push({ locale, slug: ['resources', item.slug] });
    }
  }

  return result;
}

export async function generateMetadata({ params }) {
  const { locale, slug } = await params;
  const found = findModule(locale, normaliseSegments(slug));
  if (!found) return {};

  if (typeof found.module.generateMetadata === 'function') {
    return found.module.generateMetadata({ params: Promise.resolve(found.params || {}) });
  }

  return found.module.metadata || {};
}

export default async function LocalizedRoute({ params }) {
  const { locale, slug } = await params;
  const found = findModule(locale, normaliseSegments(slug));
  if (!found) notFound();

  const Page = found.module.default;
  return <Page params={Promise.resolve(found.params || {})} />;
}
`;

  const output = path.join(ROOT, 'app', '[locale]', '[[...slug]]', 'page.js');
  ensureDir(output);
  fs.writeFileSync(output, code);
}

async function main() {
  const files = sourceFiles();

  console.log(`Scanning ${files.all.length} source files for visible English copy...`);

  const strings = new Set();
  for (const file of files.all) collectFromFile(file, strings);

  const orderedStrings = [...strings].sort((a, b) => a.localeCompare(b));
  console.log(`Found ${orderedStrings.length} unique translatable strings.`);

  const caches = {};
  for (const locale of Object.keys(LOCALES)) {
    caches[locale] = await translateAll(orderedStrings, locale);
  }

  for (const locale of Object.keys(LOCALES)) {
    const localeRoot = path.join(ROOT, 'locales', locale);
    fs.rmSync(localeRoot, { recursive: true, force: true });

    for (const file of files.all) {
      transformFile(file, destinationFor(file, locale), locale, caches[locale]);
    }
  }

  writeCatchAll(files.pages);

  const report = {
    generatedAt: new Date().toISOString(),
    sourceFiles: files.all.length,
    sourcePages: files.pages.length,
    strings: orderedStrings.length,
    locales: Object.fromEntries(Object.keys(LOCALES).map((locale) => [
      locale,
      {
        cachedTranslations: Object.keys(caches[locale]).length,
        generatedFiles: files.all.length
      }
    ]))
  };

  fs.mkdirSync(path.join(ROOT, 'i18n'), { recursive: true });
  fs.writeFileSync(
    path.join(ROOT, 'i18n', 'native-report.json'),
    `${JSON.stringify(report, null, 2)}\n`
  );

  console.log('Native locale source generation complete.');
  console.log(JSON.stringify(report, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
