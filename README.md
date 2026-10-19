# Reyansh Prime Multispecialty Hospital, Ahmedabad: Website

A multi-page React + Node website for Reyansh Prime Multispecialty Hospital. It includes a dedicated HIV Care Centre section.

## Stack
- **client/**: Vite + React 18, React Router, Tailwind CSS, Framer Motion, lucide-react
- **server/**: Node + Express API (`/api/appointments`, `/api/contact`, `/api/health`) with zod validation. Submissions are saved to `server/data/*.json`.

## Run
```bash
npm install
npm run dev        # client on http://localhost:5173 (proxies /api to :5000)
npm run build      # build the client
npm start          # Express serves API + built site on http://localhost:5000
```

## Pages
Home · About Us · Specialities (+ 14 department pages) · HIV Care Centre (+ 10 service pages, PrEP & PEP, HIV Testing, Patient Resources) · Doctors · Contact

## Before going live, replace the placeholders
All content lives in **`client/src/data/site.js`**:
- `site`: phone, emergency, ambulance, WhatsApp and email are **dummy values**. The address is real.
- `doctors`: fictional profiles using stock photos
- `stats`, `healthPackages` prices, `testimonials` and the rating: illustrative only
- Swap the JSON-file store in `server/store.js` for a real database, and add email/SMS notifications for new bookings

## Brand assets
`client/public/images/brand/` holds `logo.png` (trimmed from the supplied logo), `mark.png` and `hero-facade.jpg` (the supplied slider image).
Other photos are free Pexels images of Indian people and Ahmedabad landmarks; see `client/public/images/CREDITS.md`.

## Email (SMTP)
New appointment requests and contact messages are emailed through Hostinger SMTP. Patients who enter an email address also get an automatic confirmation.
- Settings live in **`server/.env`**, which is git-ignored. `server/.env.example` is the template.
- `NOTIFY_TO` is the inbox that receives bookings (currently `hr@reyanshmultispeciality.com`).
- The server checks the SMTP login at startup and logs `[mail] SMTP ready`.
- If email fails, the booking is still saved and the error is logged.
