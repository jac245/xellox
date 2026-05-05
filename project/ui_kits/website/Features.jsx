// Features.jsx
function Features() {
  const items = [
    { icon: 'flame', title: 'Fire-proof', body: 'Withstands 1,200°C — well past the burning point of paper, plastic, and most metals.' },
    { icon: 'droplets', title: 'Water-proof', body: 'Marine-grade 304 stainless. Submerge it, freeze it, salt it. Read it back unchanged.' },
    { icon: 'shield-check', title: 'Tamper-evident', body: "Anodized housing seals with single-use rivets. You'll know if anyone has been there first." },
    { icon: 'cpu', title: 'Air-gapped by default', body: 'No electronics. No firmware. Nothing to update, exploit, or break in 30 years.' },
    { icon: 'package', title: 'Ships in 48h', body: 'From Berlin. Discreet packaging. Free over ₿0.005. We never store your address.' },
    { icon: 'bitcoin', title: 'Bitcoin-only', body: 'Pay with on-chain BTC or Lightning via BTCPay. Card via Stripe if you must.' },
  ];
  return (
    <section className="section" id="tech">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Why steel</span>
          <h2>Cold by design.<br/>Permanent on purpose.</h2>
          <p>Paper burns. Phones die. SaaS gets acquired. Steel waits.</p>
        </div>
        <div className="feature-grid">
          {items.map(it => (
            <div className="feature" key={it.title}>
              <div className="icon"><i data-lucide={it.icon}></i></div>
              <h3>{it.title}</h3>
              <p>{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Features = Features;
