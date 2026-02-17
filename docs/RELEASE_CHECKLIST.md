# Release Checklist

## Pre-release

- [ ] `npm ci`
- [ ] `npm run check`
- [ ] Verify required env vars and secrets are set
- [ ] Confirm CI workflow passes on the target commit

## Deployment

- [ ] Trigger deployment from `main`
- [ ] Confirm Vercel build succeeded
- [ ] Verify deployment URL is reachable

## Post-release

- [ ] Smoke test key pages and navigation
- [ ] Verify contact links and external socials
- [ ] Check console for runtime errors in production
- [ ] Document release notes / notable changes
