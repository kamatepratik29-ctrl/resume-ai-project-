# Resume AI — Vercel deployment

This project uses Lovable's TanStack Start Vite configuration plus Nitro's Vercel preset.

## Deploy

1. Upload the contents of this folder to the root of a GitHub repository.
2. Import the repository into Vercel.
3. Let Vercel detect **TanStack Start**. Do not set a custom output directory.
4. Add the environment variables from `.env.example` in Vercel Project Settings → Environment Variables.
5. Deploy with Production selected.

## Important

- Never commit `.env`.
- `VITE_*` variables are public and must contain only publishable values.
- Keep `SUPABASE_SERVICE_ROLE_KEY` and `LOVABLE_API_KEY` server-side without the `VITE_` prefix.
- If the project was previously deployed in Vercel, redeploy without using the old build cache after pushing this version.
