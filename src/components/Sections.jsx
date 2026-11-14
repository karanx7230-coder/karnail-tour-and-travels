import { Icon } from "./Icons.jsx";
import { SectionHead } from "./UI.jsx";
import { promises, processSteps, whyUs } from "../data/content.js";
import { services } from "../data/services.js";
import { waLink } from "../config.js";

export function PromiseStrip() {
  return (
    <div className="promise">
      <div className="wrap">
        {promises.map((p) => (
          <div className="promise-item" key={p.title}>
            <Icon name={p.icon} size={24} />
            <div><b>{p.title}</b><span>{p.text}</span></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Services() {
  return (
    <section id="services">
      <div className="wrap">
        <SectionHead
          eyebrow="Our Services"
          title="One team for the whole journey"
          text="Individual, family and group journeys — planned, driven and supported by people who know these roads."
        />
        <div className="svc-grid">
          {services.map((s) => (
            <div className="svc" key={s.id}>
              <span className="svc-ic"><Icon name={s.icon} size={24} /></span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              {s.link ? (
                <a href={s.link}>{s.cta} <Icon name="arrow" size={15} /></a>
              ) : (
                <a href={waLink(s.wa)} target="_blank" rel="noopener">{s.cta} <Icon name="arrow" size={15} /></a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section className="process" id="process">
      <div className="wrap">
        <SectionHead
          eyebrow="How It Works"
          title="Booking is simple"
          text="No app, no forms to figure out — just tell us your plan."
        />
        <div className="steps">
          {processSteps.map((st) => (
            <div className="step" key={st.n}>
              <span className="step-num">{st.n}</span>
              <h4>{st.title}</h4>
              <p>{st.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyUs() {
  return (
    <section id="why">
      <div className="wrap">
        <SectionHead
          eyebrow="Why Karnail Tour and Travels"
          title="Dependable, trip after trip"
        />
        <div className="why-grid">
          {whyUs.map((w) => (
            <div className="why-item" key={w.title}>
              <span className="why-ic"><Icon name={w.icon} size={22} /></span>
              <div><h4>{w.title}</h4><p>{w.text}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
