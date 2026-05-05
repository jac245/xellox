import { useState } from 'react'
import { ArrowLeft, Bitcoin, CreditCard, ExternalLink, Lock, ShieldCheck, Tag, ChevronDown } from 'lucide-react'

export default function Checkout({ items, onClose }) {
  const [pay, setPay] = useState('btc')
  const [affiliate, setAffiliate] = useState('')
  const [affiliateOpen, setAffiliateOpen] = useState(false)
  const [affiliateApplied, setAffiliateApplied] = useState(false)

  const subtotalSat = items.reduce((s, it) => s + it.sat * it.qty, 0)
  const subtotalUsd = items.reduce((s, it) => s + it.usd * it.qty, 0)
  const discount = affiliateApplied ? 0.05 : 0
  const discountUsd = Math.round(subtotalUsd * discount)
  const discountSat = Math.round(subtotalSat * discount)
  const totalSat = subtotalSat - discountSat
  const totalUsd = subtotalUsd - discountUsd

  function applyAffiliate() {
    if (affiliate.trim().length > 0) setAffiliateApplied(true)
  }

  return (
    <section className="section" style={{ paddingTop: 24 }} id="checkout">
      <div className="checkout">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
          <span className="eyebrow">Checkout</span>
          {onClose && (
            <button className="btn btn-ghost" style={{ padding: '6px 12px', fontSize: 13 }} onClick={onClose}>
              <ArrowLeft size={14} /> Back
            </button>
          )}
        </div>
        <h2>Pay and ship.</h2>

        {/* Cart */}
        <div className="block">
          <div className="title"><span className="step">1</span>Cart</div>
          {items.map(it => (
            <div key={it.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0', borderBottom: '1px solid var(--xlx-divider)' }}>
              <div style={{ fontFamily: 'var(--xlx-font-display)', fontSize: 15 }}>
                {it.name}{' '}
                <span style={{ color: 'var(--ink-3)', fontFamily: 'var(--xlx-font-mono)', fontSize: 12 }}>
                  × {it.qty}
                </span>
              </div>
              <div style={{ fontFamily: 'var(--xlx-font-mono)', fontSize: 13 }}>
                <span style={{ color: 'var(--xlx-accent)' }}>₿ {(it.sat * it.qty / 1e8).toFixed(4)}</span>
                <span style={{ color: 'var(--ink-3)', marginLeft: 8 }}>${(it.usd * it.qty).toLocaleString()}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Shipping */}
        <div className="block active">
          <div className="title"><span className="step">2</span>Shipping</div>
          <div className="row">
            <div className="field">
              <label>Email</label>
              <input defaultValue="satoshi@xellox.io" />
            </div>
            <div className="field">
              <label>Country</label>
              <select>
                <option>Germany</option>
                <option>Netherlands</option>
                <option>Switzerland</option>
                <option>France</option>
                <option>United Kingdom</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="field"><label>First name</label><input defaultValue="Satoshi" /></div>
            <div className="field"><label>Last name</label><input defaultValue="Nakamoto" /></div>
          </div>
          <div className="row">
            <div className="field full"><label>Address</label><input defaultValue="Bitcoinstr. 21" /></div>
          </div>
          <div className="row">
            <div className="field"><label>City</label><input defaultValue="Berlin" /></div>
            <div className="field"><label>Postal code</label><input defaultValue="10117" /></div>
          </div>
        </div>

        {/* Affiliate code */}
        <div className="block">
          <button
            className="affiliate-toggle"
            onClick={() => setAffiliateOpen(o => !o)}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <Tag size={15} style={{ color: 'var(--ink-3)' }} />
              <span>Promo or affiliate code</span>
            </div>
            <ChevronDown size={16} style={{ color: 'var(--ink-3)', transform: affiliateOpen ? 'rotate(180deg)' : 'none', transition: 'transform .15s' }} />
          </button>
          {affiliateOpen && (
            <div className="affiliate-body">
              {affiliateApplied ? (
                <div className="affiliate-applied">
                  <span style={{ color: 'var(--xlx-success)', fontFamily: 'var(--xlx-font-mono)', fontSize: 13 }}>
                    ✓ Code "{affiliate}" applied — 5% off
                  </span>
                  <button className="btn-link" onClick={() => { setAffiliateApplied(false); setAffiliate('') }}>Remove</button>
                </div>
              ) : (
                <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
                  <input
                    className="affiliate-input"
                    placeholder="e.g. MARTY10"
                    value={affiliate}
                    onChange={e => setAffiliate(e.target.value.toUpperCase())}
                    onKeyDown={e => e.key === 'Enter' && applyAffiliate()}
                  />
                  <button className="btn btn-outline btn-sm" onClick={applyAffiliate}>Apply</button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Payment */}
        <div className="block">
          <div className="title"><span className="step">3</span>Payment</div>
          <div className="pay-options">
            <input type="radio" name="pay" id="pay-btc" checked={pay === 'btc'} onChange={() => setPay('btc')} />
            <label htmlFor="pay-btc">
              <span className="radio"></span>
              <Bitcoin size={20} style={{ color: 'var(--xlx-accent)' }} />
              Bitcoin
              <span className="logo">BTCPay</span>
            </label>
            <input type="radio" name="pay" id="pay-card" checked={pay === 'card'} onChange={() => setPay('card')} />
            <label htmlFor="pay-card">
              <span className="radio"></span>
              <CreditCard size={20} />
              Card
              <span className="logo">Stripe</span>
            </label>
          </div>

          {pay === 'btc' && (
            <div style={{ marginTop: 16, padding: 16, background: '#000', borderRadius: 10, border: '1px solid #25252c', display: 'flex', gap: 14, alignItems: 'center' }}>
              <div style={{ width: 90, height: 90, background: '#fff', borderRadius: 8, display: 'grid', gridTemplateColumns: 'repeat(8,1fr)', gap: 1, padding: 6, flexShrink: 0 }}>
                {Array.from({ length: 64 }).map((_, i) => (
                  <div key={i} style={{ background: ((i * 7 + i * i) % 5 < 2) ? '#000' : '#fff' }} />
                ))}
              </div>
              <div>
                <div style={{ fontFamily: 'var(--xlx-font-mono)', fontSize: 11, color: '#8a8a96', textTransform: 'uppercase', letterSpacing: '.16em', marginBottom: 4 }}>
                  Send exactly
                </div>
                <div style={{ fontFamily: 'var(--xlx-font-mono)', fontSize: 18, color: 'var(--xlx-accent)', fontWeight: 600 }}>
                  ₿ {(totalSat / 1e8).toFixed(8)}
                </div>
                <div style={{ fontFamily: 'var(--xlx-font-mono)', fontSize: 11, color: '#8a8a96', marginTop: 6, wordBreak: 'break-all' }}>
                  bc1q··xellox··3y8w·9k2m·a7f4
                </div>
              </div>
            </div>
          )}

          {pay === 'card' && (
            <div className="row" style={{ marginTop: 16 }}>
              <div className="field full"><label>Card number</label><input defaultValue="4242 4242 4242 4242" /></div>
              <div className="field"><label>Expiry</label><input defaultValue="12 / 28" /></div>
              <div className="field"><label>CVC</label><input defaultValue="123" /></div>
            </div>
          )}
        </div>

        {/* Order summary */}
        <div className="block">
          <div className="title"><span className="step">4</span>Order summary</div>
          <div className="summary">
            <div className="line">
              <span>Subtotal</span>
              <span>₿ {(subtotalSat / 1e8).toFixed(4)} · ${subtotalUsd.toLocaleString()}</span>
            </div>
            {affiliateApplied && (
              <div className="line" style={{ color: 'var(--xlx-success)' }}>
                <span>Affiliate discount (5%)</span>
                <span>−₿ {(discountSat / 1e8).toFixed(4)} · −${discountUsd}</span>
              </div>
            )}
            <div className="line">
              <span>Shipping (EU)</span>
              <span style={{ color: 'var(--xlx-success)' }}>Free</span>
            </div>
            <div className="line total">
              <span>Total</span>
              <span><b>₿ {(totalSat / 1e8).toFixed(4)}</b> · ${totalUsd.toLocaleString()}</span>
            </div>
          </div>
          <button className="btn btn-primary pay-btn">
            {pay === 'btc'
              ? <><span>Confirm &amp; open wallet</span> <ExternalLink size={15} /></>
              : <><span>Pay ${totalUsd.toLocaleString()}</span> <Lock size={15} /></>
            }
          </button>
          <div style={{ fontFamily: 'var(--xlx-font-mono)', fontSize: 11, color: 'var(--ink-3)', textAlign: 'center', marginTop: 12, letterSpacing: '0.04em', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
            <ShieldCheck size={12} /> Encrypted · BTCPay self-hosted · Stripe PCI-compliant
          </div>
        </div>
      </div>
    </section>
  )
}
