# frontend-monorepo-ready

This is a minimal monorepo setup with:
- Nuxt app (apps/nuxt-app)
- Vue + Vite app (apps/vue-app)
- Shared UI library (libs/ui)

How to use:

1. Unzip and open terminal in repo root.
2. Run: `pnpm install`
3. Start Nuxt: `pnpm dev:nuxt`
   or start Vue app: `pnpm dev:vue`
   or start both (parallel): `pnpm dev:all`

Notes:
- Uses Tailwind v4 PostCSS plugin `@tailwindcss/postcss`.
- Vite configs use dynamic import to avoid ESM/require issues with Nx or Node.
- If you prefer Nx, integrate later; this repository does not include Nx to keep it simple and reliable.
