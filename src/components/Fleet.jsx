import { Icon } from "./Icons.jsx";
import { Btn, SectionHead } from "./UI.jsx";
import { fleet } from "../data/fleet.js";
import { waLink } from "../config.js";

/* Flat vehicle illustrations — placeholder art until the client
   supplies real fleet photos. Colors use the brand palette. */
const ART = {
  sedan: (
    <svg viewBox="0 0 220 92" role="img" aria-label="Sedan illustration">
      <path d="M26 64c-2-10 5-14 17-17l20-16c4-3 9-5 14-5h42c6 0 11 2 15 6l16 15c14 3 27 5 32 12 4 6 2 11-5 11H36c-6 0-9-3-10-6z" fill="#F8F6F0" stroke="#D8D2C2" strokeWidth="2" />
      <path d="M72 46l15-12c2-2 5-3 8-3h9v15z" fill="#AFCFCC" /><path d="M112 31h13c4 0 7 1 10 4l9 11h-32z" fill="#AFCFCC" />
      <rect x="34" y="57" width="158" height="4" rx="2" fill="#E9874D" />
      <circle cx="64" cy="68" r="11" fill="#26383B" /><circle cx="64" cy="68" r="4.5" fill="#7E959A" />
      <circle cx="164" cy="68" r="11" fill="#26383B" /><circle cx="164" cy="68" r="4.5" fill="#7E959A" />
    </svg>
  ),
  suv: (
    <svg viewBox="0 0 220 92" role="img" aria-label="SUV illustration">
      <path d="M24 66c-2-12 5-16 18-19l16-20c4-5 10-8 16-8h40c7 0 13 3 17 8l14 19c15 3 29 6 34 13 4 6 2 12-5 12H36c-6 0-11-2-12-5z" fill="#315D5C" stroke="#26383B" strokeWidth="2" />
      <path d="M66 44l14-16c2-2 5-4 8-4h11v20z" fill="#F3EFE4" /><path d="M108 24h14c5 0 9 2 12 6l10 14h-36z" fill="#F3EFE4" />
      <rect x="32" y="58" width="162" height="4" rx="2" fill="#E9874D" />
      <circle cx="62" cy="70" r="12" fill="#1E2F32" /><circle cx="62" cy="70" r="5" fill="#7E959A" />
      <circle cx="166" cy="70" r="12" fill="#1E2F32" /><circle cx="166" cy="70" r="5" fill="#7E959A" />
    </svg>
  ),
  tempo: (
    <svg viewBox="0 0 220 92" role="img" aria-label="Tempo Traveller illustration">
      <path d="M22 68V34c0-6 4-10 10-10h96c8 0 12 3 16 9l14 22c14 2 26 5 30 10 3 5 2 9-4 9H30c-5 0-8-2-8-6z" fill="#F8F6F0" stroke="#D8D2C2" strokeWidth="2" />
      <path d="M60 30h26v20H48z" fill="#AFCFCC" /><path d="M94 30h28v20H94z" fill="#AFCFCC" /><path d="M132 30c6 0 9 2 12 7l10 13h-22z" fill="#AFCFCC" />
      <rect x="30" y="58" width="160" height="4" rx="2" fill="#E9874D" />
      <circle cx="56" cy="70" r="11" fill="#26383B" /><circle cx="56" cy="70" r="4.5" fill="#7E959A" />
      <circle cx="120" cy="70" r="11" fill="#26383B" /><circle cx="120" cy="70" r="4.5" fill="#7E959A" />
      <circle cx="172" cy="70" r="11" fill="#26383B" /><circle cx="172" cy="70" r="4.5" fill="#7E959A" />
    </svg>
  ),
  urbania: (
    <svg viewBox="0 0 220 92" role="img" aria-label="Urbania luxury van illustration">
      <path d="M16 70V36c0-8 5-12 13-12h118c10 0 15 4 19 11l12 22c16 2 30 5 34 11 3 5 1 10-5 10H26c-6 0-10-3-10-8z" fill="#26383B" stroke="#1C2A2D" strokeWidth="2" />
      <path d="M56 30h30v22H46z" fill="#9FC3C9" /><path d="M94 30h34v22H94z" fill="#9FC3C9" /><path d="M136 30h12c8 0 12 3 15 9l8 13h-35z" fill="#9FC3C9" />
      <rect x="24" y="58" width="178" height="5" rx="2.5" fill="#E9874D" />
      <circle cx="52" cy="72" r="12" fill="#141F22" /><circle cx="52" cy="72" r="5" fill="#7E959A" />
      <circle cx="124" cy="72" r="12" fill="#141F22" /><circle cx="124" cy="72" r="5" fill="#7E959A" />
      <circle cx="184" cy="72" r="12" fill="#141F22" /><circle cx="184" cy="72" r="5" fill="#7E959A" />
    </svg>
  ),
};

export default function Fleet() {
  return (
    <section className="fleet" id="fleet">
      <div className="wrap">
        <SectionHead
          eyebrow="Our Fleet"
          title="The right vehicle for every trip"
          text="Well-maintained vehicles with professional drivers. Exact models, seating and rates are confirmed with your quote."
        />
        <div className="car-grid">
          {fleet.map((car) => (
            <article className="car" key={car.id}>
              <div className="car-art">{ART[car.art]}</div>
              <div className="car-body">
                <h3>{car.name}</h3>
                <p>{car.text}</p>
                <div className="car-tags">
                  {car.tags.map((t) => (
                    <span className="tag" key={t.label}>
                      <Icon name={t.icon} size={13} />{t.label}
                    </span>
                  ))}
                </div>
                <Btn variant="teal" size="sm" href={waLink(car.wa)} target="_blank" rel="noopener">
                  Enquire About {car.name}
                </Btn>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
