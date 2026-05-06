import { useState } from 'react'
import { Package, Tag, BarChart2, Globe, ArrowRight, Check } from 'lucide-react'

const WHITELABEL_FEATURES = [
  'Custom laser engraving on plates (logo, serial, text)',
  'Custom anodized housing color (black, silver, or RAL spec)',
  'Co-branded packaging and documentation',
  'Private-label SKUs — your brand, our steel',
  'MOQ from 50 units',
  'EU-manufactured, CE-ready',
]

const WHOLESALE_TIERS = [
  { qty: '10–49 units',  disc: '10% off', note: 'Flat discount, standard shipping' },
  { qty: '50–199 units', disc: '18% off', note: 'Priority production slot, tracked freight' },
  { qty: '200+ units',   disc: 'Custom',  note: 'Dedicated account, custom lead times, NET-30' },
]

const USE_CASES = [
  { Icon: Package, title: 'Custody providers',   body: 'Bundle Yokis with your custody onboarding. Give clients a steel backup as a standard part of the setup, branded to your service.' },
  { Icon: Tag,     title: 'Law firms & estates',  body: 'Succession planning for bitcoin estates. Engravable plates that can sit in a safety deposit box for decades, co-branded with your firm.' },
  { Icon: BarChart2, title: 'Bitcoin conferences', body: 'Branded giveaway or paid merch. We produce runs of 50–500 with event artwork on the housing. Fast turnaround.' },
  { Icon: Globe,   title: 'Global distributors',  body: 'We work with regional distributors who want an exclusive or non-exclusive Yokis listing in their market. EU stock available.' },
]

export default function PartnersPage() {
  const [form, setForm] = useState({ name: '', company: '', email: '', type: 'whitelabel', message: '' })
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    if (form.name && form.email) setSent(true)
  }

  return (
    <div className="partners-page">
      {/* Hero */}
      <section className="partners-hero">
        <div className="container partners-hero-inner">
          <span className="eyebrow">Wholesale · Whitelabel · Distribution</span>
          <h1 className="partners-headline">Build with steel.</h1>
          <p className="partners-sub">
            Custom-branded Yokis for custody providers, law firms, exchanges, and hardware distributors. We make the steel; you put your name on it.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href="#contact" className="btn btn-primary btn-lg">Get in touch</a>
            <a href="#wholesale" className="btn btn-ghost btn-lg">View wholesale tiers <ArrowRight size={16} /></a>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Who we work with</span>
            <h2>If you move bitcoin, we can help.</h2>
            <p>Yokis fits anywhere physical custody matters — and it matters everywhere.</p>
          </div>
          <div className="feature-grid">
            {USE_CASES.map(({ Icon, title, body }) => (
              <div className="feature" key={title}>
                <div className="icon"><Icon /></div>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Whitelabel */}
      <section className="section alt" id="whitelabel">
        <div className="container">
          <div className="partners-split">
            <div>
              <span className="eyebrow">Whitelabel</span>
              <h2 style={{ marginTop: 12, marginBottom: 20 }}>Your brand.<br />Our steel.</h2>
              <p style={{ fontSize: 18, color: 'var(--ink-2)', lineHeight: 1.5, marginBottom: 32 }}>
                We produce custom-branded Yokis plates and housings from 50 units. Laser engraving, anodized colors, custom serial numbering — all from our EU facility.
              </p>
              <ul className="wl-list">
                {WHITELABEL_FEATURES.map(f => (
                  <li key={f}><Check size={15} /> {f}</li>
                ))}
              </ul>
            </div>
            <div className="wl-visual">
              <img src="/yokis-plates-trio.webp" alt="Yokis — whitelabel" />
            </div>
          </div>
        </div>
      </section>

      {/* Wholesale tiers */}
      <section className="section" id="wholesale">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Wholesale</span>
            <h2>Volume pricing.</h2>
            <p>Standard Yokis, no customization required. Discounts start at 10 units.</p>
          </div>
          <div className="tier-grid">
            {WHOLESALE_TIERS.map(({ qty, disc, note }) => (
              <div className="tier-card" key={qty}>
                <div className="tier-qty">{qty}</div>
                <div className="tier-disc">{disc}</div>
                <div className="tier-note">{note}</div>
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', marginTop: 32, color: 'var(--ink-3)', fontFamily: 'var(--xlx-font-mono)', fontSize: 13 }}>
            All wholesale orders include a certificate of conformity and EU customs documentation.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="section alt" id="contact">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Inquiries</span>
            <h2>Get in touch.</h2>
            <p>Tell us what you need. We'll reply within one business day.</p>
          </div>
          {!sent ? (
            <form className="partners-form" onSubmit={handleSubmit}>
              <div className="pf-row">
                <div className="checkout field">
                  <label>Your name</label>
                  <input
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    placeholder="Satoshi Nakamoto"
                  />
                </div>
                <div className="checkout field">
                  <label>Company</label>
                  <input
                    value={form.company}
                    onChange={e => setForm(f => ({ ...f, company: e.target.value }))}
                    placeholder="Nakamoto Corp"
                  />
                </div>
              </div>
              <div className="checkout field" style={{ marginBottom: 12 }}>
                <label>Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  placeholder="satoshi@company.io"
                />
              </div>
              <div className="checkout field" style={{ marginBottom: 12 }}>
                <label>Inquiry type</label>
                <select
                  value={form.type}
                  onChange={e => setForm(f => ({ ...f, type: e.target.value }))}
                >
                  <option value="whitelabel">Whitelabel / custom branding</option>
                  <option value="wholesale">Wholesale / reseller</option>
                  <option value="distribution">Distribution partnership</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="checkout field" style={{ marginBottom: 24 }}>
                <label>Message</label>
                <textarea
                  className="pf-textarea"
                  rows={5}
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  placeholder="Describe what you're looking for — volume, timeline, customization needs."
                />
              </div>
              <button type="submit" className="btn btn-primary btn-lg">Send inquiry</button>
            </form>
          ) : (
            <div className="pf-success">
              <Check size={28} />
              <h3>Inquiry received.</h3>
              <p>We'll reply within one business day to {form.email}.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
