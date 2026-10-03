#!/usr/bin/env python3
"""Dependency-free HTML contract test for the English homepage visual preview.
Usage: python3 scripts/check-homepage2.py ORIGINAL.html PREVIEW.html
The preview toolbar is deliberately outside data-hp2-content.
"""
from html.parser import HTMLParser
from pathlib import Path
import hashlib
import re
import sys

VOID = {'area','base','br','col','embed','hr','img','input','link','meta','param','source','track','wbr'}
SKIP = {'script','style','svg','template','noscript'}

class Page(HTMLParser):
    def __init__(self, preview=False):
        super().__init__(convert_charrefs=True)
        self.preview = preview
        self.stack = []
        self.active = None
        self.text = []
        self.links = []
        self.images = []
        self.hardware = []
        self.robots = ''
        self.canonical = ''
        self.found = False

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag == 'meta' and a.get('name') == 'robots': self.robots = a.get('content','')
        if tag == 'link' and a.get('rel') == 'canonical': self.canonical = a.get('href','')
        if self.active is None and not self.found and ((self.preview and 'data-hp2-content' in a) or (not self.preview and tag == 'main')):
            self.active = len(self.stack)
            self.found = True
        if self.active is not None and not any(t in SKIP for t in self.stack[self.active:]):
            if tag == 'a': self.links.append(a.get('href',''))
            if tag == 'img': self.images.append((a.get('src',''), a.get('alt','')))
            if 'data-card' in a: self.hardware.append(a['data-card'])
            if tag == 'br': self.text.append(' ')
        if tag not in VOID:
            self.stack.append(tag)

    def handle_startendtag(self, tag, attrs):
        self.handle_starttag(tag, attrs)
        if tag not in VOID: self.handle_endtag(tag)

    def handle_endtag(self, tag):
        if tag not in self.stack: return
        index = len(self.stack) - 1 - self.stack[::-1].index(tag)
        if self.active is not None and index <= self.active: self.active = None
        self.stack = self.stack[:index]

    def handle_data(self, data):
        if self.active is not None and not any(t in SKIP for t in self.stack[self.active:]): self.text.append(data)

    @property
    def normalized(self):
        return re.sub(r'\s+', ' ', ' '.join(self.text)).strip()

def load(path, preview):
    p = Page(preview)
    p.feed(Path(path).read_text(encoding='utf-8'))
    p.close()
    if not p.found or len(p.normalized) < 1500:
        raise SystemExit(f'FAIL: missing homepage content in {path}')
    return p

if __name__ == '__main__':
    if len(sys.argv) != 3: raise SystemExit(__doc__)
    original, preview = load(sys.argv[1], False), load(sys.argv[2], True)
    if original.normalized != preview.normalized:
        import difflib
        for line in list(difflib.unified_diff(original.normalized.split('. '), preview.normalized.split('. '), fromfile='original', tofile='preview'))[:80]: print(line)
        raise SystemExit('FAIL: visible source copy differs')
    if original.links != preview.links: raise SystemExit('FAIL: source links differ')
    if original.images != preview.images: raise SystemExit('FAIL: source images or alt text differ')
    if preview.hardware != [str(i) for i in range(1,9)]: raise SystemExit('FAIL: expected all eight hardware cards')
    if 'noindex' not in preview.robots.lower(): raise SystemExit('FAIL: preview must have noindex metadata')
    if preview.canonical.rstrip('/') != 'https://www.paymydine.com/homepage2': raise SystemExit('FAIL: wrong preview canonical')
    print('HOMEPAGE2_EXACT_COPY_QA=PASS')
    print('HOMEPAGE2_LINK_PARITY=PASS')
    print('HOMEPAGE2_IMAGE_PARITY=PASS')
    print('HOMEPAGE2_HARDWARE_COUNT=8')
    print('HOMEPAGE2_NOINDEX=PASS')
    print('COPY_SHA256=' + hashlib.sha256(preview.normalized.encode()).hexdigest())
