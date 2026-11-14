# Karnail Tour and Travels — Website

One-page React + Vite website for Karnail Tour and Travels (Chandigarh, India) —
outstation travel, tour packages and group transportation across North India.

## Run locally

```bash
npm install
npm run dev      # dev server
npm run build    # production build -> dist/
npm run preview  # preview the production build
```

## Deploy

1. `npm run build`
2. Upload the contents of `dist/` to your hosting root.
   - `dist/google93949a3e64defe5f.html` is the Google Search Console
     verification file (copied from `public/`) — verify it loads at
     `https://yourdomain.com/google93949a3e64defe5f.html` before verifying.

## Where to edit things

| What | File |
|---|---|
| Phone numbers, email, WhatsApp number, taglines, hero image | `src/config.js` |
| Services list | `src/data/services.js` |
| Fleet cards | `src/data/fleet.js` |
| Destinations | `src/data/destinations.js` |
| FAQs / promises / steps / why-us | `src/data/content.js` |
| Colors, fonts, spacing | `src/styles/index.css` |

## TODO before launch (from the developer handoff)

- [ ] Replace placeholder logo mark with the client's bus-and-mountain logo (`src/components/Icons.jsx` → `LogoMark`, plus `public/favicon.svg`)
- [ ] Replace hero placeholder photo with the client's own photography (`src/config.js` → `HERO_IMAGE`)
- [ ] Confirm which number receives WhatsApp enquiries (`src/config.js` → `WHATSAPP_NUMBER`)
- [ ] Confirm final active services list (hotel assistance included?)
- [ ] Confirm vehicle models / seating / AC details for fleet cards
- [ ] Add office address, Google Maps pin and business hours when supplied
- [ ] Package itineraries & prices — publish only after client confirms (Phase 2 / packages page)
