import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const activeRoots = ['app', 'components'];
const sourceFiles = [];

function walk(dir) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('.') || entry.name.startsWith('_backup') || entry.name === 'Archive') continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (/\.(js|jsx|mjs)$/.test(entry.name)) sourceFiles.push(full);
  }
}
activeRoots.forEach((dir) => walk(path.join(root, dir)));

function stripMediaBlocks(css) {
  let out = '';
  let i = 0;
  while (i < css.length) {
    const at = css.indexOf('@media', i);
    if (at === -1) {
      out += css.slice(i);
      break;
    }
    out += css.slice(i, at);
    const open = css.indexOf('{', at);
    if (open === -1) break;
    let depth = 1;
    let j = open + 1;
    while (j < css.length && depth > 0) {
      if (css[j] === '{') depth++;
      else if (css[j] === '}') depth--;
      j++;
    }
    i = j;
  }
  return out;
}

const cssPath = path.join(root, 'app', 'globals.css');
const css = fs.readFileSync(cssPath, 'utf8');
const baseCss = stripMediaBlocks(css);
const baseSelectors = new Set([...baseCss.matchAll(/\.([A-Za-z_][A-Za-z0-9_-]*)/g)].map((m) => m[1]));
const allSelectors = new Set([...css.matchAll(/\.([A-Za-z_][A-Za-z0-9_-]*)/g)].map((m) => m[1]));
const used = new Set();

for (const file of sourceFiles) {
  const text = fs.readFileSync(file, 'utf8');
  for (const match of text.matchAll(/className\s*=\s*["']([^"']+)["']/g)) {
    for (const name of match[1].split(/\s+/)) if (name) used.add(name);
  }
}

const noBase = [...used].filter((name) => !baseSelectors.has(name) && allSelectors.has(name)).sort();
const missing = [...used].filter((name) => !allSelectors.has(name)).sort();

console.log(`Checked ${sourceFiles.length} active source files.`);
console.log(`Literal CSS classes used: ${used.size}`);
console.log(`Classes with no CSS selector: ${missing.length}`);
if (missing.length) missing.forEach((x) => console.log(`  - ${x}`));
console.log(`Classes without a desktop/base rule: ${noBase.length}`);
if (noBase.length) noBase.forEach((x) => console.log(`  - ${x}`));

if (missing.length || noBase.length) process.exitCode = 1;
else console.log('\n✓ Active literal class names have desktop/base CSS coverage.');
