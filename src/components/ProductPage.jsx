import { useState } from 'react'
import { Flame, Droplets, ShieldCheck, ArrowRight, ChevronDown, ChevronUp, Check, X } from 'lucide-react'
import YokisViewer from './YokisViewer'

const SPECS = [
  { label: 'Material',          value: '304 marine-grade stainless steel' },
  { label: 'Plate thickness',   value: '1.5mm per plate' },
  { label: 'Housing',           value: 'Hard-anodized 6061-T6 aluminum' },
  { label: 'Capacity',          value: '24 BIP-39 seed words — full words, no abbreviations' },
  { label: 'Fire rating',       value: '1,200°C sustained' },
  { label: 'Water resistance',  value: 'Fully submersible — marine grade' },
  { label: 'Plates per unit',   value: '3 × independent plates' },
  { label: 'Engraving tool',    value: 'Tungsten carbide scribe (included)' },
  { label: 'Tamper sealing',    value: '4 × single-use steel rivets' },
  { label: 'Dimensions',        value: '112 × 64 × 9mm (stacked assembly)' },
  { label: 'Weight',            value: '340g full assembly' },
  { label: 'Compatibility',     value: 'Any BIP-39 wallet — Coldcard, Trezor, Passport, Jade, Ledger' },
  { label: 'Origin',            value: 'Machined in the EU · Ships from Berlin in 48h' },
]

const COMPARISON = [
  {
    feature: 'Engraving method',
    yokis: 'Tungsten scribe (included)',
    cs: 'Letter tiles — slide in with tweezers',
    ct: 'Hammer + punch set',
    bp: 'Punch dots on a grid',
  },
  {
    feature: 'Tools needed',
    yokis: 'Nothing beyond the included scribe',
    cs: 'Tweezers, patience, strong fingers',
    ct: 'Hammer + punch (sold separately)',
    bp: 'Punch kit (sold separately)',
  },
  {
    feature: 'Word format',
    yokis: 'Full BIP-39 words — exactly as shown',
    cs: '4-letter abbreviation required',
    ct: '4-letter abbreviation required',
    bp: 'Numeric dot-grid encoding',
  },
  {
    feature: 'Complexity',
    yokis: 'None. Write the word.',
    cs: 'High — find each tile, slide in order',
    ct: 'Medium — strike each letter individually',
    bp: 'High — learn the encoding table first',
  },
  {
    feature: 'Plates included',
    yokis: '3',
    cs: '1',
    ct: '1',
    bp: '1',
  },
  {
    feature: 'Tamper-evident',
    yokis: true,
    cs: false,
    ct: false,
    bp: false,
  },
  {
    feature: 'Organized housing',
    yokis: true,
    cs: 'Cassette only',
    ct: false,
    bp: false,
  },
  {
    feature: 'Starting price',
    yokis: '$89 (3 plates)',
    cs: '$99+ (1 plate)',
    ct: '$149+ (1 plate)',
    bp: '$79+ (1 plate)',
  },
]

const STEPS = [
  { n: '01', title: 'Open the housing', body: 'Slide the plates out of the anodized housing. Three independent plates — each holds a full copy of your 24-word seed.' },
  { n: '02', title: 'Engrave your seed', body: 'Use the included tungsten carbide scribe. Press firmly and write each word clearly. Full words — no abbreviations, no codebook, no encoding table.' },
  { n: '03', title: 'Seal with rivets', body: 'Four single-use steel rivets lock the housing shut. They deform permanently on installation. If someone opens it, you will know.' },
  { n: '04', title: 'Distribute', body: 'Three plates. Three locations. Home safe, safety deposit box, trusted family. Any one plate recovers the full wallet.' },
]

const FAQ = [
  {
    q: 'Can I re-engrave if I make a mistake?',
    a: 'No. Steel is permanent — that is the point. Engrave slowly, word by word. If you mis-strike a letter, mark it and continue. You have three plates: room to start fresh on plate 2 or 3 if needed.',
  },
  {
    q: 'What if I lose or damage a plate?',
    a: 'Order a single replacement plate for $59. It slots directly into your existing Yokis housing. You only need any one plate to recover your full seed — losing one does not compromise your backup.',
  },
  {
    q: 'Is this compatible with my hardware wallet?',
    a: 'Yes. Yokis stores standard BIP-39 mnemonics — the 24-word format used by every major hardware wallet: Coldcard, Trezor, Foundation Passport, Jade, Ledger, and any wallet that follows the standard.',
  },
  {
    q: 'Do I need any special tools beyond what\'s included?',
    a: 'No. The tungsten carbide scribe is included. Press firmly and draw your letters — no hammer, no punch, no electricity required. A ruler is optional for straight rows.',
  },
  {
    q: 'Where should I store it?',
    a: 'Somewhere not in your house. The point of three plates is geographic separation: each location gets one plate. Any single plate recovers the full wallet — keep them apart.',
  },
  {
    q: 'What is 304 stainless and why does it matter?',
    a: '304 is an austenitic stainless steel alloy: 18% chromium, 8% nickel. It\'s what surgical instruments, marine hardware, and food processing equipment are made from. It does not rust, corrode in salt water, or deform under heat up to 1,400°C. This is not decorative steel. It is the same material used in environments where failure is not an option.',
  },
]

function CmpVal({ val }) {
  if (val === true)  return <span className="cmp-yes"><Check size={14} /> Yes</span>
  if (val === false) return <span className="cmp-no"><X size={14} /> No</span>
  return <span>{val}</span>
}

export default function ProductPage({ onBuy, navigate }) {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <div className="product-page">
      {/* Breadcrumb */}
      <div className="prod-breadcrumb">
        <div className="container bread-inner">
          <button onClick={() => navigate('home')} className="crumb-link">Home</button>
          <span className="crumb-sep">›</span>
          <button onClick={() => navigate('home')} className="crumb-link">Shop</button>
          <span className="crumb-sep">›</span>
          <span className="crumb-cur">Yokis Steel Backup</span>
        </div>
      </div>

      {/* Hero */}
      <section className="prod-hero">
        <div className="container prod-hero-grid">
          <div className="prod-viewer-wrap">
            <YokisViewer />
          </div>
          <div className="prod-copy">
            <span className="eyebrow">Yokis · 304 Stainless · Ships from Berlin</span>
            <h1 className="prod-name">Yokis Steel Backup</h1>
            <p className="prod-lead">
              Three laser-engravable steel plates in an anodized housing. Engrave your 24-word seed once. Read it back in 30 years — or 300.
            </p>
            <div className="prod-pills">
              <span className="prod-pill"><Flame size={12} /> 1,200°C fire-rated</span>
              <span className="prod-pill"><Droplets size={12} /> Marine waterproof</span>
              <span className="prod-pill"><ShieldCheck size={12} /> Tamper-evident</span>
            </div>
            <div className="prod-price-row">
              <span className="prod-btc">₿ 0.0015</span>
              <span className="prod-usd">$89 · free shipping</span>
            </div>
            <p className="prod-includes">
              Includes <b>3 plates</b> · <b>tungsten scribe</b> · <b>4 tamper rivets</b>
            </p>
            <div className="prod-ctas">
              <button className="btn btn-primary btn-lg" onClick={() => onBuy('yokis')}>
                Add to cart
              </button>
            </div>
            <div className="prod-stock">
              <span className="stock-dot"></span>
              In stock · ships in 48h
            </div>
          </div>
        </div>
      </section>

      {/* Steel science */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Material</span>
            <h2>304-grade marine stainless.</h2>
            <p>The alloy used in surgical instruments, marine hardware, and offshore infrastructure. Not decorative steel. Not coated aluminum.</p>
          </div>
          <div className="steel-grid">
            {[
              { num: '18%',    label: 'Chromium',       body: 'Forms a passive oxide layer. Protects against corrosion, salt water, and acids without any coating that can chip or degrade.' },
              { num: '8%',     label: 'Nickel',         body: 'Adds ductility and toughness. The plates won\'t crack under impact or deform under load — they bend before they break.' },
              { num: '1,200°C', label: 'Fire rating',   body: 'House fires peak at 600–900°C. 304 stainless loses structural integrity above 1,400°C. Your seed survives the building.' },
              { num: 'IP68',   label: 'Water resistance', body: 'Submerge it, freeze it, salt it. Marine grade means no rust, no swelling, no delamination — unchanged after years underwater.' },
            ].map(({ num, label, body }) => (
              <div className="steel-card" key={label}>
                <div className="steel-num">{num}</div>
                <div className="steel-label">{label}</div>
                <div className="steel-body">{body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engraving visual */}
      <section className="prod-engraving-section">
        <div className="container">
          <div className="prod-engraving-band">
            <img src="/engraving-pen.webp" alt="Engraving the plate" className="prod-engraving-img" />
            <div className="prod-engraving-copy">
              <span className="eyebrow">The scribe</span>
              <h3>Tungsten carbide.<br />Included in every kit.</h3>
              <p>Industrial-grade tungsten carbide tip. Harder than the steel it marks. Press firmly, draw your letters — full BIP-39 words, no codebook, no abbreviation. What you engrave is what you read back in 30 years.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">How it works</span>
            <h2>No instructions required.</h2>
            <p>Open the housing. Engrave your words. Rivet it shut. Store it somewhere that isn't your house.</p>
          </div>
          <div className="steps-grid">
            {STEPS.map(({ n, title, body }) => (
              <div className="step-card" key={n}>
                <div className="step-n">{n}</div>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full specs */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Specifications</span>
            <h2>Everything, measured.</h2>
          </div>
          <div className="specs-table">
            {SPECS.map(({ label, value }) => (
              <div className="spec-row" key={label}>
                <span className="spec-label">{label}</span>
                <span className="spec-value">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="section alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Comparison</span>
            <h2>Other brands make it complicated.</h2>
            <p>
              Most steel backup products require special tools, abbreviation tables, or encoding systems you have to learn before you can even start. Yokis doesn't. Write the word. Exactly as it appears in your wallet. That's it.
            </p>
          </div>
          <div className="comparison-scroll">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th></th>
                  <th className="col-yokis">Yokis</th>
                  <th>Cryptosteel</th>
                  <th>CRYPTOTAG</th>
                  <th>Blockplate</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map(row => (
                  <tr key={row.feature}>
                    <td className="feat-label">{row.feature}</td>
                    <td className="col-yokis val-yokis"><CmpVal val={row.yokis} /></td>
                    <td className="val-other"><CmpVal val={row.cs} /></td>
                    <td className="val-other"><CmpVal val={row.ct} /></td>
                    <td className="val-other"><CmpVal val={row.bp} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <blockquote className="comparison-quote">
            "Other steel backups force you to memorize abbreviation tables, hunt for letter tiles with tweezers, or learn a dot-grid encoding system. Yokis: write the word. Exactly as it appears. No codebook."
          </blockquote>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container faq-wrap">
          <div className="section-head">
            <span className="eyebrow">Questions</span>
            <h2>Straight answers.</h2>
          </div>
          <div className="faq-list">
            {FAQ.map(({ q, a }, i) => (
              <div className="faq-item" key={i}>
                <button className="faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{q}</span>
                  {openFaq === i ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>
                {openFaq === i && <div className="faq-a">{a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section alt" style={{ paddingTop: 80, paddingBottom: 96 }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="eyebrow">In stock · 48h EU shipping · Free over ₿0.005</span>
          <h2 style={{ marginTop: 16, marginBottom: 24 }}>Steel that outlives you.</h2>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn btn-primary btn-lg" onClick={() => onBuy('yokis')}>
              Add to cart · $249
            </button>
            <button className="btn btn-ghost btn-lg" onClick={() => navigate('partners')}>
              Wholesale inquiry <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
