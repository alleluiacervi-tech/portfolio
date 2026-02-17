# Architecture Overview

## Stack

- Next.js App Router
- React + TypeScript
- Tailwind CSS + Framer Motion

## Project Layout

- `app/`: routing, root layout, and global styles
- `components/main/`: top-level page sections
- `components/sub/`: reusable section-level building blocks
- `constants/`: structured static content data
- `public/`: static media assets
- `.github/workflows/`: CI/CD automation

## Runtime Flow

1. `app/layout.tsx` sets global fonts, shell, and shared chrome.
2. `app/page.tsx` composes major sections in order.
3. Section components consume static data from `constants/*`.

## Build and Quality

- Linting and type checks run via npm scripts.
- CI validates lint, typecheck, and production build.
- CD deploys to Vercel after CI success on `main`.

## Design Constraint

UI styling should remain centralized in section components and `app/globals.css`, while non-UI process/config changes should live in docs and automation configs.
