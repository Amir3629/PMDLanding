#!/usr/bin/env bash
set -euo pipefail
ROOT="${1:-$HOME/Desktop/Projects/paymydine-landing-nextjs}"
cd "$ROOT"

echo "=== Main local folders ==="
for p in public/Images public/site-assets public/assets .next node_modules .vercel; do
  [ -e "$p" ] && du -sh "$p"
done

echo
echo "=== Backup folders ==="
find . -maxdepth 1 -type d -name '_backup*' -print0 | xargs -0 -I{} du -sh "{}" 2>/dev/null || true

echo
echo "=== Largest files outside node_modules/.next ==="
find . -type f \
  -not -path './node_modules/*' \
  -not -path './.next/*' \
  -not -path './.vercel/*' \
  -print0 | xargs -0 du -h | sort -hr | head -n 25
