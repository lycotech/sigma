# Sigma Securities, website redesign (front-end demo)

Next.js (App Router) + TypeScript + Tailwind v4 + Framer Motion. Static export, no backend.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static export to ./out
npm run lint
```

- Copy lives in `content/*.ts`; design tokens in `app/globals.css` (`@theme`).
- All forms submit through `lib/submitForm.ts` (demo only; replace with an API call there).
- See `CONTENT_TODO.md` for placeholders awaiting client input.
