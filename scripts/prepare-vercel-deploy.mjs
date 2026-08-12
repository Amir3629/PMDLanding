import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const root = process.cwd();
const sourceRoots = ['app', 'components', 'data'];
const mapFile = path.join(root, 'scripts', 'vercel-assets-map.json');
const publicDir = path.join(root, 'public');

if (process.platform !== 'darwin') {
  console.error('This preparation script uses macOS sips. Run it on your Mac before `vercel --prod`.');
  process.exit(1);
}

function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return walk(full);
    return /\.(js|jsx|mjs|ts|tsx)$/.test(entry.name) ? [full] : [];
  });
}

const sourceFiles = sourceRoots.flatMap((dir) => walk(path.join(root, dir)));
const discovered = new Set();
const pngRegex = /\/site-assets\/[^'"`\s)]+\.png/g;

for (const file of sourceFiles) {
  const text = fs.readFileSync(file, 'utf8');
  for (const match of text.matchAll(pngRegex)) discovered.add(match[0]);
}

let assetMap = {};
if (fs.existsSync(mapFile)) {
  try { assetMap = JSON.parse(fs.readFileSync(mapFile, 'utf8')); } catch { assetMap = {}; }
}
for (const url of discovered) assetMap[url.replace(/\.png$/i, '.jpg')] = url;


let converted = 0;
let missing = 0;
for (const [jpgUrl, pngUrl] of Object.entries(assetMap)) {
  const src = path.join(publicDir, pngUrl.replace(/^\//, ''));
  const dest = path.join(publicDir, jpgUrl.replace(/^\//, ''));
  if (!fs.existsSync(src)) {
    if (!fs.existsSync(dest)) {
      console.warn(`[deploy] missing source: ${pngUrl}`);
      missing++;
    }
    continue;
  }
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  execFileSync('sips', ['-Z', '2200', '-s', 'format', 'jpeg', '-s', 'formatOptions', '86', src, '--out', dest], { stdio: 'ignore' });
  converted++;
}

for (const file of sourceFiles) {
  const text = fs.readFileSync(file, 'utf8');
  let updated = text;
  for (const [jpgUrl, pngUrl] of Object.entries(assetMap)) updated = updated.split(pngUrl).join(jpgUrl);
  if (updated !== text) fs.writeFileSync(file, updated);
}

fs.writeFileSync(mapFile, JSON.stringify(assetMap, null, 2) + '\n');

const stillPng = [];
for (const file of sourceFiles) {
  const text = fs.readFileSync(file, 'utf8');
  for (const match of text.matchAll(pngRegex)) stillPng.push(`${path.relative(root, file)}: ${match[0]}`);
}
if (stillPng.length) {
  console.error('\nActive source still references deploy PNG files:');
  console.error(stillPng.join('\n'));
  process.exit(1);
}

console.log(`[deploy] optimized/updated ${converted} image(s)`);
if (missing) console.log(`[deploy] ${missing} mapped source image(s) were already optimized or unavailable`);
console.log('[deploy] ready for Vercel: optimized JPG/WebP/SVG assets are referenced');
