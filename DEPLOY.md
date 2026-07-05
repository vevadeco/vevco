# Deploying VevadeCo to Vercel

This guide walks you through deploying the VevadeCo website to production on [Vercel](https://vercel.com).

---

## Prerequisites

- A [Vercel account](https://vercel.com/signup) (free tier works)
- A [GitHub](https://github.com) account
- [Node.js 20+](https://nodejs.org) installed locally (for CLI deploys)
- The project pushed to a GitHub repository

---

## Option A: Deploy via Vercel Dashboard (recommended)

This is the easiest path — Vercel auto-deploys on every push to `main`.

### 1. Push your code to GitHub

```bash
cd vevadeco
git init   # if not already a repo
git add .
git commit -m "Initial VevadeCo production release"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/vevadeco.git
git push -u origin main
```

### 2. Import the project in Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. Click **Import Git Repository** and select your `vevadeco` repo
3. Vercel auto-detects **Next.js** — leave framework settings as default
4. **Do not deploy yet** — configure environment variables first (step 3)

### 3. Set environment variables

In the Vercel import screen (or later under **Project → Settings → Environment Variables**), add:

| Variable | Value | Environments |
|----------|-------|--------------|
| `ADMIN_PASSWORD` | A strong password (e.g. generate with `openssl rand -base64 24`) | Production, Preview |
| `NEXT_PUBLIC_SITE_URL` | `https://your-domain.com` (or your `.vercel.app` URL initially) | Production |
| `BLOB_READ_WRITE_TOKEN` | Auto-generated in step 4 | Production, Preview |

> **Important:** `ADMIN_PASSWORD` is required in production. Without it, the admin login will fail.

### 4. Create a Vercel Blob store (required for lead persistence)

Vercel serverless functions have **no persistent filesystem**. RFP leads must be stored in Vercel Blob.

1. In your Vercel project dashboard, go to **Storage**
2. Click **Create Database** → select **Blob**
3. Name it (e.g. `vevadeco-leads`) and click **Create**
4. Click **Connect to Project** and select your `vevadeco` project
5. Vercel automatically adds `BLOB_READ_WRITE_TOKEN` to your environment variables

### 5. Deploy

Click **Deploy**. Vercel will:

1. Install dependencies (`npm install`)
2. Run `next build`
3. Deploy to a `*.vercel.app` preview URL

First deploy takes ~1–2 minutes.

### 6. Verify the deployment

| Check | URL |
|-------|-----|
| Homepage | `https://your-project.vercel.app` |
| Admin login | `https://your-project.vercel.app/admin` |
| Sitemap | `https://your-project.vercel.app/sitemap.xml` |
| Robots | `https://your-project.vercel.app/robots.txt` |

**Test the full flow:**

1. Submit an RFP on the homepage
2. Log in at `/admin` with your `ADMIN_PASSWORD`
3. Confirm the lead appears in the dashboard
4. Update status and add notes

---

## Option B: Deploy via Vercel CLI

Use this if you prefer deploying from your terminal.

### 1. Install and log in

```bash
npm i -g vercel
vercel login
```

### 2. Link the project

```bash
cd vevadeco
vercel link
```

Follow the prompts to create or link a Vercel project.

### 3. Create Blob storage

```bash
# Or create via dashboard: Storage → Blob → Create
vercel integration add blob
```

### 4. Set environment variables

```bash
vercel env add ADMIN_PASSWORD production
vercel env add NEXT_PUBLIC_SITE_URL production
```

`BLOB_READ_WRITE_TOKEN` is set automatically when you connect Blob storage.

Pull env vars locally for development against Blob:

```bash
vercel env pull .env.local
```

### 5. Deploy

```bash
# Preview deployment
vercel

# Production deployment
vercel --prod
```

---

## Custom domain

1. Go to **Project → Settings → Domains**
2. Add your domain (e.g. `vevadeco.com`)
3. Update DNS records as instructed by Vercel
4. Update `NEXT_PUBLIC_SITE_URL` to your custom domain:

```bash
vercel env add NEXT_PUBLIC_SITE_URL production
# Enter: https://vevadeco.com
```

5. Redeploy for the sitemap and OG tags to pick up the new URL:

```bash
vercel --prod
```

---

## Environment variables reference

| Variable | Required | Description |
|----------|----------|-------------|
| `ADMIN_PASSWORD` | **Yes** (production) | Secures `/admin` dashboard |
| `NEXT_PUBLIC_SITE_URL` | Recommended | Canonical URL for SEO/sitemap |
| `BLOB_READ_WRITE_TOKEN` | **Yes** (Vercel) | Persists RFP leads via Vercel Blob |

### Local development

Without `BLOB_READ_WRITE_TOKEN`, leads save to `data/leads.json` on your machine.

Without `ADMIN_PASSWORD`, the dev fallback password is `vevadeco2026`.

Copy the example env file to get started:

```bash
cp .env.example .env.local
```

---

## Managing leads in production

### Admin dashboard

- **URL:** `https://your-domain.com/admin`
- **Login:** Your `ADMIN_PASSWORD`
- **Features:** View, search, filter, update status, add notes, delete leads

### Lead statuses

`New` → `Contacted` → `Qualified` → `Proposal Sent` → `Won` / `Lost`

### Data storage

| Environment | Storage |
|-------------|---------|
| Local dev | `data/leads.json` (gitignored) |
| Vercel | Private Vercel Blob at `vevadeco/leads.json` |

---

## Continuous deployment

Once connected to GitHub, Vercel automatically:

- **Production:** Deploys when you push to `main`
- **Preview:** Deploys a unique URL for every pull request

No CI config needed — Vercel handles build and deploy.

---

## Troubleshooting

### Leads disappear after deploy

**Cause:** `BLOB_READ_WRITE_TOKEN` is not set.

**Fix:** Create a Blob store and connect it to your project (see step 4 above).

### Admin login returns 500

**Cause:** `ADMIN_PASSWORD` is not set in production.

**Fix:**
```bash
vercel env add ADMIN_PASSWORD production
vercel --prod
```

### Build fails with lockfile warning

The `turbopack.root` setting in `next.config.ts` resolves monorepo lockfile conflicts. If issues persist, ensure you're deploying from the `vevadeco` directory root.

### RFP form submits but lead doesn't appear

1. Check Vercel **Functions** logs: Project → Logs
2. Confirm Blob storage is connected
3. Verify `BLOB_READ_WRITE_TOKEN` exists in environment variables

### Images not loading

Product screenshots live in `public/images/`. Ensure these files are committed:

```
public/images/floorhub-screenshot.png
public/images/profit-hunter-screenshot.png
```

---

## Security checklist before going live

- [ ] Set a strong `ADMIN_PASSWORD` (20+ characters)
- [ ] Connect Vercel Blob for lead persistence
- [ ] Set `NEXT_PUBLIC_SITE_URL` to your real domain
- [ ] Add custom domain with HTTPS (automatic on Vercel)
- [ ] Test RFP submission end-to-end
- [ ] Confirm `/admin` is not indexed (`robots.txt` blocks it)
- [ ] Do not commit `.env.local` or `data/` to git

---

## Useful commands

```bash
# Local development
npm run dev

# Production build test (run before deploying)
npm run build
npm start

# View deployment logs
vercel logs

# List recent deployments
vercel ls

# Rollback to previous production deploy
vercel rollback

# Promote a preview deploy to production
vercel promote <deployment-url>
```

---

## Support

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/app/getting-started/deploying)
- [Vercel Blob Docs](https://vercel.com/docs/storage/vercel-blob)
