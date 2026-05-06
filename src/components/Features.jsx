import { Flame, Droplets, ShieldCheck, Cpu, Package, Bitcoin } from 'lucide-react'

const ITEMS = [
  { Icon: Flame,       title: 'Fire-proof',         body: 'Withstands 1,200°C — well past the burning point of paper, plastic, and most metals.' },
  { Icon: Droplets,    title: 'Water-proof',         body: 'Marine-grade 304 stainless. Submerge it, freeze it, salt it. Read it back unchanged.' },
  { Icon: ShieldCheck, title: 'Tamper-evident',      body: "Anodized housing seals with single-use rivets. You'll know if anyone has been there first." },
  { Icon: Cpu,         title: 'Air-gapped by default', body: 'No electronics. No firmware. Nothing to update, exploit, or break in 30 years.' },
  { Icon: Package,     title: 'Ships in 48h',        body: 'From Berlin. Discreet packaging. Free over ₿0.005. We never store your address.' },
  { Icon: Bitcoin,     title: 'Bitcoin-only',        body: 'Pay with on-chain BTC or Lightning via BTCPay. Card via Stripe if you must.' },
]

export default function Features() {
  return (
    <section className="section" id="tech">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Why steel</span>
          <h2>Cold by design.<br />Permanent on purpose.</h2>
          <p>Paper burns. Phones die. SaaS gets acquired. Steel waits.</p>
        </div>
        <div className="features-visual-band">
          <img src="/engraving-pen.webp" alt="Engraving the Yokis plate" className="features-engraving-img" />
          <div className="features-band-copy">
            <span className="eyebrow">Engineered for permanence</span>
            <p>One tungsten carbide scribe. Press firmly. Write your 24 words exactly as they appear. No abbreviations. No encoding tables. No tools to buy. No instructions to follow.</p>
          </div>
        </div>
        <div className="feature-grid">
          {ITEMS.map(({ Icon, title, body }) => (
            <div className="feature" key={title}>
              <div className="icon"><Icon /></div>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
