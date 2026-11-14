/** Reusable enquiry form. variant: "quote" (hero) | "full" (contact section). */
import { useState } from "react";
import { WHATSAPP_NUMBER, BUSINESS } from "../config.js";
import { WhatsAppIcon, Icon } from "./Icons.jsx";

const SERVICES = [
  "Tour Package",
  "Outstation / Intercity Trip",
  "Group Transportation",
  "Local / Airport / Railway Transfer",
  "Hotel Assistance",
];

const VEHICLES = ["Not sure — please suggest", "Sedan", "SUV", "Tempo Traveller", "Urbania"];

export default function EnquiryForm({ variant = "full", idPrefix = "f" }) {
  const [sent, setSent] = useState(false);
  const quick = variant === "quote";

  const onSubmit = (e) => {
    e.preventDefault();
    const v = (name) => (e.target.elements[name]?.value || "").trim();
    const lines = [
      "Hi Karnail Tour and Travels, I'd like to enquire about a trip.",
      "",
      `• Name: ${v("name") || "—"}`,
      `• Phone: ${v("phone") || "—"}`,
    ];
    if (!quick) {
      lines.push(
        `• Service: ${v("service") || "—"}`,
        `• Pickup city: ${v("pickup") || "—"}`,
        `• Destination: ${v("destination") || "—"}`,
        `• Travel date: ${v("date") || "—"}`,
        `• Passengers: ${v("passengers") || "—"}`,
        `• Vehicle preference: ${v("vehicle") || "—"}`
      );
    } else {
      lines.push(
        `• Service: ${v("service") || "—"}`,
        `• Pickup city: ${v("pickup") || "—"}`,
        `• Destination: ${v("destination") || "—"}`,
        `• Travel date: ${v("date") || "—"}`,
        `• Passengers: ${v("passengers") || "—"}`
      );
    }
    if (v("message")) lines.push(`• Notes: ${v("message")}`);
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`,
      "_blank",
      "noopener"
    );
    setSent(true);
    setTimeout(() => setSent(false), 8000);
  };

  return (
    <form className={quick ? "quote" : "form"} onSubmit={onSubmit}>
      {quick ? (
        <>
          <h3><Icon name="quote" size={22} />Get a Quick Quote</h3>
          <p>Share your trip — we reply with a clear quote on call or WhatsApp.</p>
        </>
      ) : (
        <>
          <h3>Enquiry Form</h3>
          <p>Fill this in — it opens WhatsApp with your details ready to send.</p>
        </>
      )}

      <div className="q-grid">
        {quick && (
          <div className="field full">
            <label htmlFor={`${idPrefix}-service`}>Service</label>
            <select id={`${idPrefix}-service`} name="service" defaultValue={SERVICES[0]}>
              {SERVICES.map((s) => <option key={s}>{s}</option>)}
            </select>
          </div>
        )}
        <div className="field">
          <label htmlFor={`${idPrefix}-city`}>Pickup City</label>
          <input name="pickup" id={`${idPrefix}-city`} type="text" placeholder="Chandigarh" autoComplete="address-level2" />
        </div>
        <div className="field">
          <label htmlFor={`${idPrefix}-dest`}>Destination</label>
          <input name="destination" id={`${idPrefix}-dest`} type="text" placeholder="e.g. Manali" />
        </div>
        <div className="field">
          <label htmlFor={`${idPrefix}-date`}>Travel Date</label>
          <input name="date" id={`${idPrefix}-date`} type="date" />
        </div>
        <div className="field">
          <label htmlFor={`${idPrefix}-pax`}>Passengers</label>
          <input name="passengers" id={`${idPrefix}-pax`} type="number" min="1" placeholder="e.g. 4" />
        </div>
        {!quick && (
          <>
            <div className="field">
              <label htmlFor={`${idPrefix}-name`}>Name *</label>
              <input name="name" id={`${idPrefix}-name`} type="text" placeholder="Your full name" required />
            </div>
            <div className="field">
              <label htmlFor={`${idPrefix}-phone`}>Phone / WhatsApp *</label>
              <input name="phone" id={`${idPrefix}-phone`} type="tel" placeholder="+91 ·····" required />
            </div>
            <div className="field full">
              <label htmlFor={`${idPrefix}-vehicle`}>Vehicle Preference</label>
              <select id={`${idPrefix}-vehicle`} name="vehicle" defaultValue={VEHICLES[0]}>
                {VEHICLES.map((v) => <option key={v}>{v}</option>)}
              </select>
            </div>
            <div className="field full">
              <label htmlFor={`${idPrefix}-msg`}>Message</label>
              <textarea name="message" id={`${idPrefix}-msg`} placeholder="Anything else — sightseeing plans, hotel help, pickup time…" />
            </div>
          </>
        )}
      </div>

      <button className="btn btn-green" type="submit">
        <WhatsAppIcon />Send Enquiry on WhatsApp
      </button>
      <p className={`form-ok${sent ? " show" : ""}`}>
        Thank you! WhatsApp is opening with your {quick ? "trip details" : "enquiry"} — press send and our team will reply shortly.
      </p>
      {!quick && (
        <div className="form-foot">
          <span>Prefer email?</span>
          <a href={`mailto:${BUSINESS.email}?subject=Travel%20Enquiry%20-%20Karnail%20Tour%20and%20Travels`}>Email us instead</a>
        </div>
      )}
      {quick && (
        <p className="quote-note">Prefer to talk? Call <a href="tel:+919815666135">+91 98156 66135</a></p>
      )}
    </form>
  );
}
