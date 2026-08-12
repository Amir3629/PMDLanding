import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const ignored = new Set(['Archive', '__MACOSX', 'node_modules', '.next', '.git', '.vercel']);
const sourceFiles = [];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (ignored.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (/\.(js|mjs)$/.test(entry.name)) sourceFiles.push(full);
  }
}

for (const folder of ['app', 'components', 'data']) {
  const full = path.join(root, folder);
  if (fs.existsSync(full)) walk(full);
}

const refs = [];
for (const file of sourceFiles) {
  const text = fs.readFileSync(file, 'utf8');
  const rel = path.relative(root, file);

  const direct = /["'](\/site-assets\/(?!logo\.svg)[^"']+)["']/g;
  for (const match of text.matchAll(direct)) refs.push({ asset: match[1], file: rel });

  const dynamic = /imageGroups\.(comments|kitchen|owner|payment|pos|social|staff|table)\[(\d+)\]/g;
  for (const match of text.matchAll(dynamic)) {
    refs.push({ asset: `/site-assets/${match[1]}/${Number(match[2]) + 1}.png`, file: rel });
  }
}

const byAsset = new Map();
for (const ref of refs) {
  if (!byAsset.has(ref.asset)) byAsset.set(ref.asset, []);
  byAsset.get(ref.asset).push(ref.file);
}

const duplicates = [...byAsset.entries()].filter(([, files]) => files.length > 1);
console.log(`Checked ${sourceFiles.length} active source files.`);
console.log(`Image references: ${refs.length}`);
console.log(`Unique image paths: ${byAsset.size}`);
console.log(`Duplicate image paths: ${duplicates.length}`);

if (duplicates.length) {
  console.log('\nRepeated asset paths:');
  for (const [asset, files] of duplicates) {
    console.log(`- ${asset}`);
    for (const file of files) console.log(`    ${file}`);
  }
  process.exitCode = 1;
} else {
  console.log('\n✓ No repeated image asset paths found in the active source.');
  console.log('Note: the homepage marquee duplicates its full sequence in the DOM only to create a seamless infinite loop.');
}
