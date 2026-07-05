# VevadeCo

Marketing website and RFP lead management system for **VevadeCo** — a custom development and marketing agency.

## Features

- High-converting landing page with product showcase
- RFP proposal request form
- Admin dashboard at `/admin` for lead management
- Persistent lead storage (local filesystem or Vercel Blob)

## Quick start (local)

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Admin panel: [http://localhost:3000/admin](http://localhost:3000/admin) (default dev password: `vevadeco2026`).

## Deploy to production

See **[DEPLOY.md](./DEPLOY.md)** for the full Vercel deployment guide.

## Project structure

```
src/
├── app/              # Next.js App Router pages & API routes
│   ├── admin/        # Lead management dashboard
│   └── api/          # RFP submission & admin APIs
├── components/       # UI components
└── lib/              # Auth, leads, content
public/images/        # Product screenshots
```

## Environment variables

| Variable | Required | Description |
|----------|----------|-------------|
| `ADMIN_PASSWORD` | Production | Password for `/admin` login |
| `NEXT_PUBLIC_SITE_URL` | Production | Your domain (sitemap, OG tags) |
| `BLOB_READ_WRITE_TOKEN` | Vercel | Persists leads across deployments |

See `.env.example` for details.
