# Fixit 24/7

Production-focused Next.js + Prisma marketplace for homeowner/tradie matching.

## Stack
- Next.js App Router + TypeScript
- Tailwind CSS
- Prisma + PostgreSQL
- NextAuth (credentials)

## Local setup
1. `npm install`
2. Copy env: `cp .env.example .env`
3. Configure PostgreSQL `DATABASE_URL`
4. Generate/apply schema:
   - `npx prisma generate`
   - `npx prisma db push` (dev)
5. Seed sample data (optional): `npm run db:seed`
6. Run dev server: `npm run dev`

## Validation
- `npm run lint`
- `npx tsc --noEmit`
- `npm run build`

## Required environment variables
See `.env.example`.
Key vars:
- `DATABASE_URL`
- `SESSION_SECRET`
- `APP_URL`
- `ADMIN_EMAILS`
- `FROM_EMAIL`
- `SENDGRID_API_KEY`
- OTP/welcome template IDs

## Render deployment
This repo includes `render.yaml`.

### Render steps
1. Push repository to GitHub.
2. In Render: **New > Blueprint** and select repo.
3. Render provisions:
   - Web service `fixit247`
   - PostgreSQL `fixit247-db`
4. Confirm env vars in Render dashboard (especially SendGrid keys and `APP_URL`).
5. Deploy. Build command runs install + Prisma generate + Next build.
6. Start command: `npm start -- -p $PORT`.

## Database migrations in production
- For managed deploys, run `npm run db:migrate` during release if you adopt Prisma migrations.
- Current project supports `db push` in dev and `migrate deploy` in prod workflows.

## Feature test guide
1. Signup as homeowner and/or tradie.
2. Homeowner dashboard: post a job with suburb+trade.
3. Tradie dashboard: verify matching jobs list and claim a lead.
4. Verify claim caps:
   - per job up to 5 claims
   - per tradie up to 11 active jobs
5. Admin dashboard: check totals and recent jobs.


## Production env alignment
Use these exact variable names in Render or `.env`:
`ADMIN_EMAILS`, `APP_URL`, `DATABASE_URL`, `FROM_EMAIL`, `NEW_SECRET`, `NODE_ENV`, `PORT`, `SENDGRID_API_KEY`, `SENDGRID_CUSTOMER_WELCOME_TEMPLATE_ID`, `SENDGRID_OTP_TEMPLATE_ID`, `SENDGRID_TRADIE_WELCOME_TEMPLATE_ID`, `SESSION_SECRET`.

Security note: never commit live database passwords, API keys, or session secrets to git. Keep them only in Render environment settings or local untracked `.env` files.
