# Starboard — Minimal Contact Landing

Single page landing dengan animated UI (framer-motion) + contact form. Project paling ringan.

## Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: motion/react (micro-interactions)
- **Database**: Drizzle ORM + Supabase Postgres (`starboard` schema)
- **Validation**: zod
- **Auth**: None
- **Deployment**: Standalone

## Architecture
- 1 Supabase project, multi-schema. Starboard pake schema `starboard`
- Drizzle client: `search_path = starboard`
- DATABASE_URL dari Supabase yang sama dengan 4 project lainnya
- Single page — semua konten di `/`
- Contact form submit via Server Actions
- Project paling sederhana, cuma 1 tabel

## Database Schema (`starboard`)
- `contacts` — id, nama, email, pesan, submitted_at

## Routes
| Route | Page | Description |
|---|---|---|
| `/` | `app/page.js` | Single page: Hero, Features, Testimonials, Contact form |

## Constraints
- TypeScript
- App Router
- Cuma 1 halaman (single page)
- motion/react untuk mikro-interaksi (menggantikan framer-motion)
- shadcn/ui untuk komponen UI
- Tidak ada auth
- Paling cocok buat starter test migration pertama

## Migration Notes
- Template asli: Next.js 13 Pages Router → Next.js 16 App Router
- `pages/` → `app/`
- Paling simple — cocok jadi project pertama yang di-migrate
- LayoutEffect.jsx → motion/react equivalent

## Non-Goals
- Tidak ada multi-page
- Tidak ada auth
- Tidak ada database complex (cuma 1 tabel)
- Tidak ada third-party integration

## Deployment
- Ikuti playbook wajib: docs/superpowers/DEPLOYMENT.md (shared Supabase spam-projects, pooler 6543, branch master, CI tsc+build) sebelum coding maupun deploy.
