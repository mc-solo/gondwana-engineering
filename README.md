# Gondwana Engineering — Professional Company Website (Demo)

A polished, mostly static company website demo for **Gondwana Engineering
Private Limited Company (PLC)**, a multi-disciplinary civil engineering firm
in Addis Ababa, covering geotechnical investigation, highway and bridge
design, land survey, GIS, water well drilling and materials testing.

Company facts on this site come from the supplied company profile
(`Brief_Company_Profile__Geotechnical.docx`, November 2026), not from the
earlier laboratory-equipment demo copy. The official logo files are in
`frontend/src/assets/` (`logo-mark.jpg` and `logo-full.jpg`). Testimonials
remain clearly marked demonstration placeholders, because the profile refers
to testimonial letters without including their text.

## Stack

- Frontend: React with Vite, React Router, Lucide React, plain CSS with CSS variables
- Backend: Node.js with Express (JavaScript ES modules)
- Package manager: npm
- No Next.js, TypeScript, Tailwind CSS or database

## Project structure

```text
frontend/
  src/
    data/siteContent.js   # single file for replaceable copy, services, workshop products
    data/projects.js      # central projects data, taken from the company profile
    assets/profileImages.js  # official logos and profile photographs, as data URLs so the site is self-contained on GitHub Pages
    pages/                # Home, About, Services, Projects, Products, Contact
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

## Still needed before a public launch

1. Company slogan: the profile gives no slogan, so none is shown. Supply one
   if the company has an official slogan.
2. Company email address and social media links: neither is given in the
   profile, so the site marks email as to be confirmed and lists no social
   links.
3. Higher-resolution logo files: the supplied logos are 270 x 270 px (mark)
   and 323 x 324 px (full lockup). They are displayed below native size to
   stay crisp, but a vector or larger original would be better for large use.
   The supplied photographs are likewise embedded as data URLs in
   `profileImages.js`, which makes the JavaScript bundle about 783 KB
   (488 KB gzipped); replacing them with hosted originals later would
   reduce that size.
4. Project photographs: project cards use representative photographs, except
   where an image is captioned as from the company profile. Supply
   project-specific photographs if they are to be shown as actual projects.
5. Testimonials: replace the clearly marked demonstration placeholders with
   verified client feedback, with permission.
6. Configure email on the backend (see above).
7. Remove or replace demo notices on the Home and Contact pages.

## What is intentionally not claimed

This site does not invent company history, clients, certifications,
partnerships, addresses, awards or product specifications. The laboratory's
ISO/IEC 17025 accreditation is a goal stated in the profile, not a
certification, and is never presented as certified. Anything not yet
confirmed is labelled as a placeholder or to be confirmed.
