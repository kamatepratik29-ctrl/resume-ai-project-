# ResumeIQ — Vercel deployment

This copy is prepared for Vercel deployment.

## Why the original deployment returned Vercel 404

The project is a Lovable TanStack Start app. Its Vite wrapper is Cloudflare-oriented by default. Vercel can finish the build but has no Vercel server output to invoke, so the live URL can return Vercel's platform `404: NOT_FOUND`.

This version explicitly adds the Nitro Vite plugin with the `vercel` preset while preserving the Lovable TanStack Start wrapper.

## Deploy

1. Extract this ZIP.
2. Create a new GitHub repository and upload the project files (the contents of this folder, not the ZIP itself).
3. Import that GitHub repository into Vercel.
4. Keep the detected framework/build settings unless Vercel asks for them.
5. Use Node.js 22.12+.
6. Add the environment variables listed below.
7. Deploy.

Do not set an Output Directory such as `dist` or `dist/client` for this server-rendered Nitro deployment.

## Required environment variables

Public Supabase:
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_PROJECT_ID`
- `VITE_SUPABASE_PUBLISHABLE_KEY`

Server:
- `SUPABASE_URL`
- `SUPABASE_PUBLISHABLE_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `LOVABLE_API_KEY`

Never expose `SUPABASE_SERVICE_ROLE_KEY` or `LOVABLE_API_KEY` through a `VITE_*` variable.

## Build

Vercel should run:

    npm install
    npm run build

The Nitro Vercel preset generates the server output Vercel needs.

## Important

The ZIP intentionally does not contain `.env` or any secret values. Put the real environment variables in Vercel.

If Vercel shows a build error after this change, use the complete Build Logs to identify the next issue. A successful build followed by Vercel's own `404: NOT_FOUND` is specifically the runtime/output problem this configuration addresses.
