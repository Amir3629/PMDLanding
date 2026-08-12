import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const publicDir = path.join(root, 'public');
const sourceRoot = path.join(publicDir, 'Images');
const outRoot = path.join(publicDir, 'site-assets');

const groups = {
  comments: 'Comment Box',
  kitchen: 'Kitchen',
  owner: 'Owner',
  payment: 'Paymet',
  pos: 'POS',
  social: 'Social',
  staff: 'Staff',
  table: 'Table'
};

fs.mkdirSync(outRoot, { recursive: true });

function copyGroup(outName, sourceName) {
  const srcDir = path.join(sourceRoot, sourceName);
  const destDir = path.join(outRoot, outName);
  fs.mkdirSync(destDir, { recursive: true });

  if (!fs.existsSync(srcDir)) {
    console.warn(`[assets] missing source folder: ${srcDir}`);
    return [];
  }

  const files = fs.readdirSync(srcDir)
    .filter((name) => /\.(png|jpe?g|webp)$/i.test(name))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

  const copied = [];
  files.forEach((name, index) => {
    const src = path.join(srcDir, name);
    const dest = path.join(destDir, `${index + 1}.png`);
    fs.copyFileSync(src, dest);
    copied.push(dest);
  });
  console.log(`[assets] ${outName}: ${copied.length} image(s)`);
  return copied;
}

const copied = {};
for (const [outName, sourceName] of Object.entries(groups)) {
  copied[outName] = copyGroup(outName, sourceName);
}

// Logo
const logoSource = path.join(sourceRoot, 'LOGO', 'p2.svg');
if (fs.existsSync(logoSource)) {
  fs.copyFileSync(logoSource, path.join(outRoot, 'logo.svg'));
  console.log('[assets] logo copied');
}

// Hero platform image: preserve the current custom hero if present; otherwise use a POS image.
const heroCandidates = [
  path.join(publicDir, 'assets', 'hero-run-your-way.png'),
  path.join(root, 'Run your Restaurant your Way.png'),
  path.join(outRoot, 'pos', '1.png')
];
const heroSource = heroCandidates.find((candidate) => fs.existsSync(candidate));
if (heroSource) {
  fs.copyFileSync(heroSource, path.join(outRoot, 'hero-platform.png'));
  console.log(`[assets] hero: ${heroSource}`);
}

const manifest = Object.fromEntries(
  Object.entries(copied).map(([key, files]) => [key, files.map((file) => path.relative(publicDir, file).replaceAll(path.sep, '/'))])
);
fs.writeFileSync(path.join(outRoot, 'manifest.json'), JSON.stringify(manifest, null, 2));
