# Contributing

## Prerequisites

- Node.js 20+
- npm 9+

## Setup

```bash
npm ci
```

## Development

Run locally:

```bash
npm run dev
```

## Quality Gates

Before opening a PR, run:

```bash
npm run check
```

This runs linting, type checks, and a production build.

## Branching

- Use short-lived feature branches from `main`.
- Keep commits focused and atomic.

## Pull Requests

- Use clear titles and descriptions.
- Link related issues.
- Include screenshots only when UI changes are made.

## Commit Message Style

Prefer Conventional Commits:

- `feat:` for new features
- `fix:` for bug fixes
- `docs:` for documentation
- `chore:` for maintenance changes
