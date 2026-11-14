import { Icon, LogoMark, WhatsAppIcon } from "./Icons.jsx";
import { BUSINESS, PHONES, DEFAULT_WA_MESSAGE, waLink, telLink } from "../config.js";

const QUICK = [
  ["#home", "Home"], ["#services", "Services"], ["#fleet", "Fleet"],
  ["#destinations", "Destinations"], ["#enquiry", "Enquiry"],
];

const SERVICE_LINKS = [
  ["#services", "Outstation & Intercity"],
  ["#services", "Tour Packages"],
  ["#services", "Group Transportation"],
  ["#services", "Hotel Assistance"],
  ["#services", "Local Transfers"],
];

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="f-grid">
          <div>
            <a className="logo" href="#home">
              <span className="logo-mark"><LogoMark size={28} /></span>
              <span><b>{BUSINESS.name}</b><span>{BUSINESS.promise}</span></span>
            </a>
            <p className="about">
              Transportation across North India with safe and professional drivers —
              sedans, SUVs, Tempo Travellers and Urbania, from Chandigarh.
            </p>
            <div className="socials">
              <a href={waLink()} target="_blank" rel="noopener" aria-label="WhatsApp"><WhatsAppIcon size={17} /></a>
              <a href={`mailto:${BUSINESS.email}`} aria-label="Email"><Icon name="mail" size={17} /></a>
              <a href={telLink(PHONES[0].raw)} aria-label="Call"><Icon name="phone" size={17} /></a>
            </div>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              {QUICK.map(([href, label]) => (
                <li key={href + label}><a href={href}><Icon name="chev" size={13} />{label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Services</h4>
            <ul>
              {SERVICE_LINKS.map(([href, label]) => (
                <li key={label}><a href={href}><Icon name="chev" size={13} />{label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <div className="f-fb">
              <span className="c-ic"><Icon name="phone" /></span>
              <div>
                {PHONES.map((p) => (
                  <a key={p.raw} href={telLink(p.raw)}>{p.display}</a>
                ))}
              </div>
            </div>
            <div className="f-fb">
              <span className="c-ic"><Icon name="mail" /></span>
              <div>
                <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>
                <span>{BUSINESS.location}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="copy">
          <span>© 2026 <b>{BUSINESS.name}</b>. All rights reserved.</span>
          <span>{BUSINESS.tagline} 🚖</span>
        </div>
      </div>
    </footer>
  );
}

/** Floating WhatsApp bubble + mobile sticky action bar. */
export function FloatingActions() {
  return (
    <>
      <a
        className="wa-float"
        href={waLink(DEFAULT_WA_MESSAGE)}
        target="_blank"
        rel="noopener"
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon size={26} /><span>WhatsApp Us</span>
      </a>
      <div className="sticky-bar">
        <a className="call" href={telLink(PHONES[0].raw)} aria-label="Call now"><Icon name="phone" /></a>
        <a className="wap" href={waLink()} target="_blank" rel="noopener" aria-label="WhatsApp"><WhatsAppIcon size={20} /></a>
        <a className="book" href="#enquiry">Book Now</a>
      </div>
    </>
  );
}
