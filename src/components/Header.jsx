import { Icon, LogoMark } from "./Icons.jsx";
import { Btn } from "./UI.jsx";
import { BUSINESS, PHONES, HERO_IMAGE, DEFAULT_WA_MESSAGE, waLink, telLink } from "../config.js";
import EnquiryForm from "./EnquiryForm.jsx";

export function TopBar() {
  return (
    <div className="topbar">
      <div className="wrap">
        <a href={telLink(PHONES[0].raw)}><Icon name="phone" size={15} />{PHONES[0].display}</a>
        <a className="hide-m" href={telLink(PHONES[1].raw)}><Icon name="phone" size={15} />{PHONES[1].display}</a>
        <a className="hide-m" href={`mailto:${BUSINESS.email}`}><Icon name="mail" size={15} />{BUSINESS.email}</a>
        <span className="sep" />
        <span className="topbar-promise"><Icon name="shield" size={15} />{BUSINESS.promise}</span>
      </div>
    </div>
  );
}

const NAV_LINKS = [
  ["#home", "Home"],
  ["#services", "Services"],
  ["#fleet", "Fleet"],
  ["#destinations", "Destinations"],
  ["#enquiry", "Enquiry"],
  ["#contact", "Contact"],
];

export function Navbar() {
  return (
    <nav className="nav">
      <div className="wrap">
        <a className="logo" href="#home" aria-label={`${BUSINESS.name} — home`}>
          <span className="logo-mark"><LogoMark size={28} /></span>
          <span>
            <b>{BUSINESS.name}</b>
            <span>Chandigarh · North India</span>
          </span>
        </a>
        <ul className="nav-links" id="navLinks">
          {NAV_LINKS.map(([href, label]) => (
            <li key={href}><a href={href}>{label}</a></li>
          ))}
        </ul>
        <Btn
          variant="orange"
          size="sm"
          className="nav-wa"
          href={waLink(DEFAULT_WA_MESSAGE)}
          target="_blank"
          rel="noopener"
        >
          <WhatsAppIcon size={15} />WhatsApp Us
        </Btn>
        <button
          className="nav-toggle"
          aria-label="Open menu"
          aria-expanded="false"
          onClick={() => {
            const el = document.getElementById("navLinks");
            const open = el.classList.toggle("open");
            document.querySelector(".nav-toggle").setAttribute("aria-expanded", open);
          }}
        >
          <Icon name="menu" size={26} />
        </button>
      </div>
    </nav>
  );
}

export function Hero() {
  return (
    <header className="hero" id="home">
      <img className="hero-img" src={HERO_IMAGE} alt="Mountain road winding through the Himalayas at sunrise" loading="eager" />
      <div className="hero-bg" />
      <div className="wrap">
        <div>
          <span className="hero-pill"><i className="dot" />Transportation across North India · from Chandigarh</span>
          <h1>Your Journey,<br />Our <em>Commitment.</em></h1>
          <p className="lead">
            Outstation trips, tour packages and group travel with safe &amp; professional
            drivers — sedan to Tempo Traveller and Urbania, one team for the whole road.
          </p>
          <div className="hero-ctas">
            <Btn variant="orange" icon="phone" href={telLink(PHONES[0].raw)}>Call Now</Btn>
            <Btn variant="outline" icon="quote" href="#enquiry">Get a Quote</Btn>
          </div>
          <div className="hero-points">
            <span><Icon name="check-c" size={17} />Safe &amp; professional drivers</span>
            <span><Icon name="check-c" size={17} />Group-ready fleet</span>
            <span><Icon name="check-c" size={17} />Clear, upfront quotes</span>
          </div>
        </div>
        <EnquiryForm variant="quote" idPrefix="q" />
      </div>
    </header>
  );
}
