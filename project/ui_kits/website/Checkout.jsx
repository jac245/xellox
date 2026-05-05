// Checkout.jsx — Single-column simple checkout, BTCPay + Stripe
function Checkout({ items, onClose }) {
  const [pay, setPay] = React.useState('btc');
  const subtotalSat = items.reduce((s, it) => s + it.sat * it.qty, 0);
  const subtotalUsd = items.reduce((s, it) => s + it.usd * it.qty, 0);
  const shipping = 0;
  const totalSat = subtotalSat + shipping;
  const totalUsd = subtotalUsd;

  return (
    <section className="section" style={{ paddingTop: 24 }} id="checkout">
      <div className="checkout">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
          <span className="eyebrow">Checkout</span>
          {onClose && <button className="btn btn-ghost" style={{ padding: '6px 12px', fontSize: 13 }} onClick={onClose}><i data-lucide="arrow-left"></i> Back</button>}
        </div>
        <h2>Pay and ship.</h2>

        <div className="block">
          <div className="title"><span className="step">1</span>Cart</div>
          {items.map(it => (
            <div key={it.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0', borderBottom: '1px solid var(--xlx-divider)' }}>
              <div style={{ fontFamily: 'var(--xlx-font-display)', fontSize: 15 }}>
                {it.name} <span style={{ color: 'var(--xlx-fg-3)', fontFamily: 'var(--xlx-font-mono)', fontSize: 12 }}>× {it.qty}</span>
              </div>
              <div style={{ fontFamily: 'var(--xlx-font-mono)', fontSize: 13 }}>
                <span style={{ color: 'var(--xlx-accent)' }}>₿ {(it.sat * it.qty / 1e8).toFixed(4)}</span>
                <span style={{ color: 'var(--xlx-fg-3)', marginLeft: 8 }}>${(it.usd * it.qty).toLocaleString()}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="block active">
          <div className="title"><span className="step">2</span>Shipping</div>
          <div className="row">
            <div className="field"><label>Email</label><input defaultValue="satoshi@xellox.io"/></div>
            <div className="field"><label>Country</label><select><option>Germany</option><option>Netherlands</option><option>Switzerland</option></select></div>
          </div>
          <div className="row">
            <div className="field"><label>First name</label><input defaultValue="Satoshi"/></div>
            <div className="field"><label>Last name</label><input defaultValue="Nakamoto"/></div>
          </div>
          <div className="row">
            <div className="field full"><label>Address</label><input defaultValue="Bitcoinstr. 21"/></div>
          </div>
          <div className="row">
            <div className="field"><label>City</label><input defaultValue="Berlin"/></div>
            <div className="field"><label>Postal code</label><input defaultValue="10117"/></div>
          </div>
        </div>

        <div className="block">
          <div className="title"><span className="step">3</span>Payment</div>
          <div className="pay-options">
            <input type="radio" name="pay" id="pay-btc" checked={pay==='btc'} onChange={() => setPay('btc')}/>
            <label htmlFor="pay-btc">
              <span className="radio"></span>
              <i data-lucide="bitcoin" style={{ width: 20, height: 20, color: 'var(--xlx-accent)' }}></i>
              Bitcoin <span className="logo">BTCPay</span>
            </label>
            <input type="radio" name="pay" id="pay-card" checked={pay==='card'} onChange={() => setPay('card')}/>
            <label htmlFor="pay-card">
              <span className="radio"></span>
              <i data-lucide="credit-card" style={{ width: 20, height: 20 }}></i>
              Card <span className="logo">Stripe</span>
            </label>
          </div>

          {pay === 'btc' && (
            <div style={{ marginTop: 16, padding: 16, background: '#000', borderRadius: 10, border: '1px solid var(--xlx-border)', display: 'flex', gap: 14, alignItems: 'center' }}>
              <div style={{ width: 90, height: 90, background: '#fff', borderRadius: 8, display: 'grid', gridTemplateColumns: 'repeat(8,1fr)', gap: 1, padding: 6 }}>
                {Array.from({length: 64}).map((_,i)=>(<div key={i} style={{background: ((i*7+i*i)%5<2)?'#000':'#fff'}}></div>))}
              </div>
              <div>
                <div style={{ fontFamily: 'var(--xlx-font-mono)', fontSize: 11, color: 'var(--xlx-fg-3)', textTransform: 'uppercase', letterSpacing: '.16em', marginBottom: 4 }}>Send exactly</div>
                <div style={{ fontFamily: 'var(--xlx-font-mono)', fontSize: 18, color: 'var(--xlx-accent)', fontWeight: 600 }}>₿ {(totalSat / 1e8).toFixed(8)}</div>
                <div style={{ fontFamily: 'var(--xlx-font-mono)', fontSize: 11, color: 'var(--xlx-fg-3)', marginTop: 6, wordBreak: 'break-all' }}>bc1q··xellox··3y8w·9k2m·a7f4</div>
              </div>
            </div>
          )}
          {pay === 'card' && (
            <div className="row" style={{ marginTop: 16 }}>
              <div className="field full"><label>Card number</label><input defaultValue="4242 4242 4242 4242"/></div>
              <div className="field"><label>Expiry</label><input defaultValue="12 / 28"/></div>
              <div className="field"><label>CVC</label><input defaultValue="123"/></div>
            </div>
          )}
        </div>

        <div className="block">
          <div className="title"><span className="step">4</span>Order summary</div>
          <div className="summary">
            <div className="line"><span>Subtotal</span><span>₿ {(subtotalSat / 1e8).toFixed(4)} · ${subtotalUsd.toLocaleString()}</span></div>
            <div className="line"><span>Shipping (EU)</span><span style={{ color: 'var(--xlx-success)' }}>Free</span></div>
            <div className="line total"><span>Total</span><span><b>₿ {(totalSat/1e8).toFixed(4)}</b> · ${totalUsd.toLocaleString()}</span></div>
          </div>
          <button className="btn btn-primary pay-btn">
            {pay === 'btc' ? <>Confirm & open wallet <i data-lucide="external-link"></i></> : <>Pay ${totalUsd.toLocaleString()} <i data-lucide="lock"></i></>}
          </button>
          <div style={{ fontFamily: 'var(--xlx-font-mono)', fontSize: 11, color: 'var(--xlx-fg-3)', textAlign: 'center', marginTop: 12, letterSpacing: '0.04em' }}>
            <i data-lucide="shield-check" style={{ width: 12, height: 12, verticalAlign: '-2px' }}></i> Encrypted · BTCPay self-hosted · Stripe PCI-compliant
          </div>
        </div>
      </div>
    </section>
  );
}
window.Checkout = Checkout;
