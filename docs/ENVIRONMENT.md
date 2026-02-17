# Environment Variables

## Public Variables

These can be exposed to the browser and should use the `NEXT_PUBLIC_` prefix.

- `NEXT_PUBLIC_CONTACT_EMAIL`
  - Fallback: `alleluiacervi@gmail.com`
- `NEXT_PUBLIC_CONTACT_PHONE`
  - Fallback: `+250788505946`
- `NEXT_PUBLIC_CONTACT_LOCATION`
  - Fallback: `Kigali, Rwanda`
- `NEXT_PUBLIC_CONTACT_X_URL`
  - Fallback: `https://x.com/@AIandgrowth`
- `NEXT_PUBLIC_CONTACT_INSTAGRAM_URL`
  - Fallback: `https://www.instagram.com/___alleluia___/`

## Deployment Secrets

Used in GitHub Actions CD workflow:

- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

## Notes

- Never commit secret values to the repository.
- Use `.env.local` for local development and repository secrets for CI/CD.
- Public variables should contain only non-sensitive values.
