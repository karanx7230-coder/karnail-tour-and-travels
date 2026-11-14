import { Icon } from "./Icons.jsx";
import { SectionHead } from "./UI.jsx";
import { destinations } from "../data/destinations.js";
import { waLink } from "../config.js";

/* Flat destination scenes — placeholders until the client supplies
   real destination photography. */
const SCENES = {
  himachal: (
    <svg className="scene" viewBox="0 0 360 190" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Himachal mountain landscape">
      <rect width="360" height="190" fill="#477D7B" />
      <path d="M0 150 L70 70 L120 130 L170 55 L235 150 Z" fill="#315D5C" />
      <path d="M140 150 L220 60 L280 120 L330 70 L360 150 Z" fill="#26383B" />
      <path d="M70 70 L90 93 L80 93 L100 118 L58 118 L70 70Z M170 55 L188 78 L178 78 L196 104 L146 104 L170 55Z" fill="#F8F6F0" opacity=".92" />
      <circle cx="300" cy="46" r="22" fill="#E9874D" />
      <rect y="150" width="360" height="40" fill="#1E2F32" />
    </svg>
  ),
  spiti: (
    <svg className="scene" viewBox="0 0 360 190" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Spiti cold desert landscape">
      <rect width="360" height="190" fill="#6E8B90" />
      <path d="M0 130 L90 55 L150 120 L210 40 L290 130 L360 80 L360 190 L0 190Z" fill="#B99B77" />
      <path d="M0 150 L120 100 L240 150 L360 110 L360 190 L0 190Z" fill="#8A6F52" />
      <path d="M40 60 L200 40" stroke="#F8F6F0" strokeWidth="5" strokeDasharray="2 14" strokeLinecap="round" opacity=".8" />
      <circle cx="80" cy="40" r="18" fill="#F8F6F0" opacity=".85" />
    </svg>
  ),
  ladakh: (
    <svg className="scene" viewBox="0 0 360 190" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Ladakh high pass landscape">
      <rect width="360" height="190" fill="#176C9B" />
      <path d="M0 140 L60 75 L110 140 L165 70 L230 140 L300 85 L360 140 Z" fill="#7E959A" />
      <path d="M60 75 L78 96 L68 96 L86 122 L40 122 L60 75Z M165 70 L182 92 L172 92 L190 118 L142 118 L165 70Z" fill="#F8F6F0" opacity=".9" />
      <path d="M0 160 C100 145 220 165 360 150" stroke="#E9874D" strokeWidth="7" fill="none" />
      <rect y="160" width="360" height="30" fill="#123F5B" />
    </svg>
  ),
  uttarakhand: (
    <svg className="scene" viewBox="0 0 360 190" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Uttarakhand river valley landscape">
      <rect width="360" height="190" fill="#477D7B" />
      <path d="M0 130 L80 60 L140 130 Z" fill="#315D5C" />
      <path d="M120 140 L200 55 L270 140 L340 75 L360 140Z" fill="#26383B" />
      <path d="M0 150 C90 138 180 160 260 146 S340 140 360 148 L360 190 L0 190Z" fill="#2E7A86" />
      <path d="M0 156 C90 146 180 166 260 152 S340 146 360 154" stroke="#7FB9C4" strokeWidth="4" fill="none" opacity=".8" />
      <circle cx="310" cy="42" r="20" fill="#E9874D" />
    </svg>
  ),
  rajasthan: (
    <svg className="scene" viewBox="0 0 360 190" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Rajasthan fort landscape">
      <rect width="360" height="190" fill="#C97F45" />
      <circle cx="290" cy="52" r="34" fill="#F1B24A" opacity=".9" />
      <path d="M0 150 L360 130 L360 190 L0 190Z" fill="#A05E2C" />
      <rect x="60" y="88" width="30" height="52" fill="#7E4318" /><path d="M60 88 L75 72 L90 88Z" fill="#7E4318" />
      <rect x="120" y="76" width="26" height="64" fill="#8A4E20" /><path d="M120 76 L133 62 L146 76Z" fill="#8A4E20" />
      <rect x="180" y="92" width="30" height="48" fill="#7E4318" /><path d="M180 92 L195 78 L210 92Z" fill="#7E4318" />
      <rect x="250" y="82" width="24" height="58" fill="#8A4E20" /><path d="M250 82 L262 70 L274 82Z" fill="#8A4E20" />
    </svg>
  ),
  kashmir: (
    <svg className="scene" viewBox="0 0 360 190" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Kashmir valley landscape">
      <rect width="360" height="190" fill="#315D5C" />
      <path d="M0 120 L70 50 L130 120 L200 40 L280 120 L360 60 L360 120 Z" fill="#7E959A" />
      <path d="M70 50 L86 70 L76 70 L94 96 L48 96 L70 50Z M200 40 L216 62 L206 62 L224 88 L178 88 L200 40Z" fill="#F8F6F0" opacity=".92" />
      <path d="M0 130 C120 118 240 136 360 126 L360 190 L0 190Z" fill="#2E7A86" />
      <path d="M40 160 C90 150 130 168 180 158" stroke="#7FB9C4" strokeWidth="4" fill="none" opacity=".8" />
      <path d="M250 150 l6 12 h-12z" fill="#F8F6F0" /><path d="M270 144 l6 12 h-12z" fill="#F8F6F0" />
    </svg>
  ),
};

export default function Destinations() {
  return (
    <section id="destinations">
      <div className="wrap">
        <SectionHead
          eyebrow="Destinations"
          title="Where would you like to go?"
          text="Popular regions we serve from Chandigarh. Every tile opens a WhatsApp chat to plan that trip."
        />
        <div className="dest-grid">
          {destinations.map((d) => (
            <a
              className="dest"
              key={d.id}
              href={waLink(d.wa)}
              target="_blank"
              rel="noopener"
              aria-label={`Plan a trip to ${d.name}`}
            >
              {SCENES[d.scene]}
              <span className="dest-label"><b>{d.name}</b><Icon name="arrow" size={20} /></span>
            </a>
          ))}
        </div>
        <p className="dest-note">
          Each trip is planned around your dates, group size and pace —{" "}
          <a href="#enquiry">share your plan</a> and we'll suggest the right route and vehicle.
        </p>
      </div>
    </section>
  );
}
