import { ArrowRight } from 'lucide-react'

export default function Shop({ onBuy, onViewProduct }) {
  return (
    <section className="section alt" id="shop">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Shop</span>
          <h2>One product. Two refills.</h2>
          <p>Yokis ships as a 3-plate set. Lose one, expand a multisig, or rotate a backup — buy more plates anytime.</p>
        </div>

        <div className="shop-hero">
          <div className="copy">
            <span className="eyebrow">Yokis · 304 stainless</span>
            <h3 className="name">Yokis Steel Backup.</h3>
            <p className="tagline">Three engravable plates in an anodized housing. Engrave once, read it back in 30 years.</p>
            <p className="includes">
              Includes <b>3 plates</b> · <b>tungsten scribe</b> · <b>tamper rivets</b>
            </p>
            <div className="price-row">
              <span className="btc">₿ 0.0042</span>
              <span className="usd">from $249</span>
            </div>
            <div className="ctas">
              <button className="btn btn-primary btn-lg" onClick={() => onBuy('yokis')}>
                Add to cart
              </button>
              <button className="btn btn-outline btn-lg" onClick={onViewProduct}>
                Full specs <ArrowRight size={16} />
              </button>
            </div>
          </div>
          <div className="img-stage" style={{ cursor: 'pointer' }} onClick={onViewProduct} title="View product">
            <img src="/yokis-front.png" alt="Yokis Steel Backup" />
          </div>
        </div>

        <div className="shop-grid">
          <div className="shop-card">
            <div className="meta">
              <span className="eyebrow">Add-on · single plate</span>
              <h4 className="name">Yokis Plate</h4>
              <p className="desc">One extra engravable 304 stainless plate. Slot it into any existing Yokis housing.</p>
              <div className="price">
                <span className="btc">₿ 0.0009</span>
                <span className="usd">$59</span>
              </div>
              <button
                className="btn btn-outline"
                style={{ alignSelf: 'flex-start' }}
                onClick={() => onBuy('plate-1')}
              >Add to cart</button>
            </div>
            <div className="img-cell">
              <img src="/yokis-plates-fan.jpg" alt="Single plate" />
            </div>
          </div>

          <div className="shop-card">
            <div className="meta">
              <span className="eyebrow">Add-on · 3-pack</span>
              <h4 className="name">Backup Set · 3 Plates</h4>
              <p className="desc">A second 3-plate set for off-site backup, multisig redundancy, or seed rotation.</p>
              <div className="price">
                <span className="btc">₿ 0.0024</span>
                <span className="usd">$149</span>
              </div>
              <button
                className="btn btn-outline"
                style={{ alignSelf: 'flex-start' }}
                onClick={() => onBuy('plate-3')}
              >Add to cart</button>
            </div>
            <div className="img-cell">
              <img src="/yokis-plates-trio-cut.png" alt="3-plate backup set" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
