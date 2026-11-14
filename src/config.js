/* ============================================================
   KARNAIL TOUR AND TRAVELS — CENTRAL CONFIG
   ------------------------------------------------------------
   Edit this file to change contact details everywhere on the
   site. No need to touch any component.

   TODO (confirm with client):
   - Which number should receive WhatsApp enquiries? -> whatsapp
   - Social media links (none published yet)
   ============================================================ */

export const BUSINESS = {
  name: "Karnail Tour and Travels",
  shortName: "Karnail Tours",
  tagline: "Your Journey, Our Commitment",
  promise: "Safe. Smart. Secure.",
  location: "Chandigarh, India",
  email: "karnailtours55@gmail.com",
};

/** Phone numbers as printed on the business cards. */
export const PHONES = [
  { display: "+91 98156 66135", raw: "+919815666135" },
  { display: "+91 99148 63778", raw: "+919914863778" },
  { display: "+91 98973 20111", raw: "+919897320111" },
];

/** Number that receives WhatsApp enquiries (TODO: confirm with client). */
export const WHATSAPP_NUMBER = "919815666135"; // no "+" sign

/** Build a wa.me link with an optional pre-filled message. */
export const waLink = (message) =>
  `https://wa.me/${WHATSAPP_NUMBER}${
    message ? `?text=${encodeURIComponent(message)}` : ""
  }`;

export const DEFAULT_WA_MESSAGE =
  "Hi Karnail Tour and Travels, I have a travel enquiry.";

export const telLink = (raw) => `tel:${raw}`;

/** Hero background — placeholder until the client supplies own photography. */
export const HERO_IMAGE =
  "https://images.unsplash.com/photo-1458668383970-8ddd3927a209?q=80&w=1800&auto=format&fit=crop";
