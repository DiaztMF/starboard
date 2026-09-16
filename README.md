# Starboard — Project Management Software

A modern project management landing page built with Next.js 15 (App Router), TypeScript, Tailwind CSS, motion/react, Drizzle ORM, and Supabase Postgres.

## Pages / Routes

| Route | Page | Description |
|---|---|---|
| `/` | Landing Page | Hero, Features, Pricing, Testimonials, CTA, and interactive Contact Form |
| `/api/seed` | Seed API | Idempotent endpoint to seed demo contact data (POST) |

## Project Structure

```
starboard/
├── app/
│   ├── layout.tsx         # Root layout with Inter font and global styles
│   ├── page.tsx           # Home landing page with all visual sections
│   └── api/
│       └── seed/
│           └── route.ts   # Database seed endpoint (POST only)
├── components/
│   ├── ui/                # UI components (Hero, Features, Pricing, ContactForm, etc.)
│   ├── GradientWrapper.jsx # Visual background wrapper
│   ├── LayoutEffect.jsx   # Scroll reveal animation wrapper using motion/react
│   └── SectionWrapper.jsx # Section layout spacing wrapper
├── src/
│   ├── actions/
│   │   └── contact.ts     # Server Action with Zod validation
│   └── lib/
│       ├── db.ts          # Drizzle ORM client configured with search_path='starboard'
│       ├── schema.ts      # PostgreSQL schema for starboard.contacts
│       ├── queries.ts     # Database query helper functions with graceful fallbacks
│       └── seed.ts        # CLI database seeding script
├── drizzle/               # Drizzle migration files
├── public/                # Static assets, logos, screenshots
└── .github/workflows/
    └── ci.yml             # GitHub Actions CI workflow (tsc + build)
```

## Tech Stack

- **Next.js 15 (App Router)** — Modern React framework with React 19 and Server Actions
- **TypeScript** — Strict type safety across components, schemas, and Server Actions
- **Tailwind CSS** — Responsive utility-first styling
- **Drizzle ORM & postgres-js** — Type-safe PostgreSQL client connected to Supabase pooler
- **motion/react** — Smooth micro-interactions and scroll-in-view animations
- **Zod** — Schema validation for contact form submissions

## Scripts

| Script | Command | Description |
|---|---|---|
| Dev | `pnpm dev` | Start local development server at http://localhost:3000 |
| Build | `pnpm build` | Create production build |
| Start | `pnpm start` | Run production server |
| Lint | `pnpm lint` | Run ESLint |
| DB Generate | `pnpm db:generate` | Generate SQL migrations from Drizzle schema |
| DB Migrate | `pnpm db:migrate` | Apply Drizzle migrations |
| DB Seed | `pnpm db:seed` | Seed demo data via CLI |

## Quick Start

```bash
pnpm install
pnpm build
pnpm dev
```
