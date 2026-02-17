# Troubleshooting Guide

## Install Fails

- Ensure Node.js version matches project requirements.
- Clear lock artifacts only if install state is corrupt:

```bash
rm -rf node_modules
npm ci
```

## Lint or Type Errors in CI but Not Local

- Run checks from a clean install:

```bash
npm ci
npm run check
```

- Verify local Node and npm versions match CI runtime.

## Build Fails on Vercel

- Confirm required secrets are configured in GitHub and Vercel.
- Verify `next build` passes locally.
- Check workflow logs in `.github/workflows/cd-vercel.yml`.

## Deployment Succeeds but Site Is Broken

- Inspect browser console for runtime errors.
- Validate environment variables used by client-side code.
- Roll back to last known-good deployment if impact is high.

## Useful Commands

```bash
npm run lint
npm run typecheck
npm run build
npm run check
```
