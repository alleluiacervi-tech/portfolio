## Space Portfolio

Professional portfolio built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Requirements

- Node.js `>= 20.9.0`
- npm `>= 9`

## Local Development

Install dependencies:

```bash
npm ci
```

Run the development server:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Scripts

- `npm run dev` - start local development server
- `npm run lint` - run ESLint
- `npm run typecheck` - run TypeScript type checking
- `npm run build` - build production bundle
- `npm run check` - lint + typecheck + build (full quality gate)

## CI/CD Workflows

Two workflows are configured in `.github/workflows`:

1. `ci.yml` (`CI`)
   - Triggers on `pull_request` to `main` and `push` to `main`/`develop`
   - Runs: install, lint, typecheck, build
   - Uses dependency caching and concurrency cancellation

2. `cd-vercel.yml` (`CD - Vercel Production`)
   - Triggers after successful `CI` run on `main`
   - Also supports manual run with `workflow_dispatch`
   - Builds and deploys to Vercel production

## Required GitHub Secrets (for CD)

Add these repository secrets:

- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

## Recommended Repository Settings

- Protect `main` branch
- Require the `CI / Validate (lint, typecheck, build)` status check before merge
