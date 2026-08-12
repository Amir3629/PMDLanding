# PayMyDine Vercel deployment assets

Before deploying from the Mac:

```bash
cd /Users/amir/Desktop/Projects/paymydine-landing-nextjs
npm run prepare:vercel
vercel --prod
```

The preparation command keeps the original images untouched, makes smaller deployment JPEGs from active PNG assets, copies `p4.svg` into the deploy-safe site-assets folder, and updates active source references.

The `.vercelignore` file excludes the original `public/Images`, generated PNG copies, backups, `.next`, `node_modules`, `Archive`, and local project files from the Vercel CLI upload.

When original images change later, run `npm run dev` once to refresh the local site-assets PNG copies, then run `npm run prepare:vercel` again before deployment.
