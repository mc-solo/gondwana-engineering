# Gondwana Engineering — Professional Company Website (Demo)

A polished, mostly static company website demo for **Gondwana Engineering**, an
engineering company specialising in laboratory equipment, engineering solutions
and related technical services.

The purpose of this demo is client approval. Real images, company information,
product details and contact details have **not** been supplied yet, so the site
uses clearly marked placeholders.

## Stack

- Frontend: React with Vite, React Router, Lucide React, plain CSS with CSS variables
- Backend: Node.js with Express (JavaScript ES modules)
- Package manager: npm
- No Next.js, TypeScript, Tailwind CSS or database

## Project structure

```text
frontend/
  src/
    data/siteContent.js   # single file for replaceable copy, images, services, products
    pages/                # Home, About, Services, Products, Contact
    components/           # Header, Footer, shared UI
    styles.css            # plain CSS, CSS variables, responsive design
backend/
  src/
    index.js              # Express app, /api/health
    routes/contact.js     # POST /api/contact, GET /api/contact/status
    lib/validateContact.js
    lib/email.js          # clean placeholder for future email integration
```

## Run locally

Open two terminals.

Backend:

```bash
cd backend
npm install
npm run dev
# http://localhost:5000/api/health
```

Frontend:

```bash
cd frontend
npm install
npm run dev
# http://localhost:5173
```

In development, Vite proxies `/api` to `http://localhost:5000`, so the contact
form works without extra configuration.

Production build:

```bash
cd frontend
npm run build
npm run preview
```

## Contact form and email (important)

The contact form has client-side and server-side validation.

**Email delivery is not configured in this demo, and no paid service is used.**

- `POST /api/contact` validates name, email, subject and message.
- In demo mode it returns `emailSent: false` with `status: "received_demo"` and
  an honest message explaining that nothing was emailed.
- `GET /api/contact/status` reports whether email is configured.
- To add email later, choose a provider, set `EMAIL_PROVIDER` in the backend
  environment, and implement `sendContactEmail()` in `backend/src/lib/email.js`.

## Replacing placeholders for launch

1. Edit `frontend/src/data/siteContent.js`:
   - company description, mission, vision and values
   - email, phone, address, working hours and social links
   - service descriptions and product names/specifications
   - every image URL (replace Unsplash placeholders with client images)
2. Replace the logo placeholder in the header (`Hexagon` icon + text in
   `frontend/src/components/Header.jsx`) with the real logo.
3. Configure email on the backend (see above).
4. Remove or replace demo notices on the Home and Contact pages.

## What is intentionally not claimed

This demo does not invent company history, clients, certifications,
partnerships, addresses, awards or product specifications. Anything not yet
confirmed by the client is labelled as a placeholder or sample.
