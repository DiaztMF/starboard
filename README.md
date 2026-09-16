# starboard

A modern project management desktop application landing page built with Next.js App Router, TypeScript, Drizzle ORM, and Supabase Postgres.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org/)
[![Drizzle ORM](https://img.shields.io/badge/Drizzle-ORM-orange)](https://orm.drizzle.team/)

## Installation

```bash
git clone https://github.com/DiaztMF/starboard.git
cd starboard
pnpm install
```

TypeScript types are included out of the box.

## Quick Start

1. Configure `.env.local`:

```bash
DATABASE_URL="postgresql://postgres.[REF]:[PASSWORD]@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres"
```

2. Run development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## What is starboard?

`starboard` is a single-page marketing landing application for project management software. It combines scroll-in-view transitions, pricing overviews, interactive trial forms, and direct lead capture pipelines into a dedicated PostgreSQL schema.

## Why starboard?

Traditional product landing pages often omit backend integration or fail to handle lead capturing cleanly. `starboard` solves this with:

- **Isolated Schema Storage**: Stores visitor messages in the `starboard.contacts` schema with strict database separation.
- **Server Actions & Zod**: Replaces legacy client-only forms with resilient Next.js Server Actions and schema-enforced validation.
- **Performant Micro-Interactions**: Features fluid scroll animations built with `motion/react`.

## Routes & API

### Pages

| Route | Type | Description |
|---|---|---|
| `/` | Static | Single-page landing: Hero, Stats, Features, Testimonials, and Contact Form |

### Endpoints & Server Actions

#### `POST /api/seed`
Idempotent route handler that seeds test contact messages into the `starboard.contacts` table.

- **Response:** `{ ok: boolean, message: string }`

#### `submitContact(prevState, formData)`
Server Action located in `src/actions/contact.ts` handling visitor contact forms.

| Field | Type | Validation |
|---|---|---|
| `name` | `string` | Minimum 2 characters |
| `email` | `string` | Valid email address |
| `message` | `string` | Minimum 5 characters |

## Examples

### Contact Insertion Helper

```typescript
import { createContact } from "@/src/lib/queries";

// Persist validated contact message with fallback safety
const contact = await createContact({
  name: "Jane Doe",
  email: "jane@company.com",
  message: "Looking for enterprise trial onboarding.",
});
```

## Architecture & Development Guides

For deeper technical context and conventions:

- **[AGENTS.md](./AGENTS.md)** — Architectural conventions, multi-schema requirements, and verification guidelines.

## License

MIT - see [LICENSE](./LICENSE) for details.
