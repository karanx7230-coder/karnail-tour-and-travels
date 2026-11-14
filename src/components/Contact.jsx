import { Icon, WhatsAppIcon } from "./Icons.jsx";
import { SectionHead } from "./UI.jsx";
import EnquiryForm from "./EnquiryForm.jsx";
import { BUSINESS, PHONES, DEFAULT_WA_MESSAGE, waLink, telLink } from "../config.js";
import { faqs } from "../data/faqs.js";

export function Enquiry() {
  return (
    <section className="enquiry" id="enquiry">
      <div className="wrap">
        <div id="contact">
          <span className="eyebrow">Contact &amp; Enquiry</span>
          <h2 className="enq-title">Tell us about your trip</h2>
          <p className="enq-sub">
            Share a few details and our team will get back with a clear, no-pressure quote.
          </p>

          <div className="c-item">
            <span className="c-ic"><Icon name="phone" /></span>
            <div>
              <b>Call us</b>
              <div className="c-nums">
                {PHONES.map((p) => (
                  <a className="num" key={p.raw} href={telLink(p.raw)}>{p.display}</a>
                ))}
              </div>
            </div>
          </div>
          <div className="c-item">
            <span className="c-ic wa"><WhatsAppIcon size={20} /></span>
            <div>
              <b>WhatsApp</b>
              <a className="num" href={waLink(DEFAULT_WA_MESSAGE)} target="_blank" rel="noopener">
                {PHONES[0].display} — start a chat
              </a>
            </div>
          </div>
          <div className="c-item">
            <span className="c-ic"><Icon name="mail" /></span>
            <div><b>Email</b><a className="num" href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a></div>
          </div>
          <div className="c-item">
            <span className="c-ic"><Icon name="pin" /></span>
            <div><b>Based in</b><span className="num">{BUSINESS.location} — serving all of North India</span></div>
          </div>
        </div>

        <EnquiryForm variant="full" idPrefix="f" />
      </div>
    </section>
  );
}

export function FAQ() {
  return (
    <section id="faq">
      <div className="wrap">
        <SectionHead eyebrow="FAQ" title="Before you call" />
        <div className="faq-list">
          {faqs.map((f, i) => (
            <details key={f.q} open={i === 0}>
              <summary>
                {f.q}
                <Icon name="chev" className="chev" />
              </summary>
              <p className="ans">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
