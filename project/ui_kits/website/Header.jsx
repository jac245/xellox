// Header.jsx — Sticky top header with brand, nav, BTC ticker, cart
function XellLogo({ size = 24 }) {
  return (
    <svg viewBox="0 0 200 200" width={size} height={size} fill="currentColor" aria-label="Xellox">
      <path d="M40 40 L72 40 Q78 40 76 46 L62 78 Q60 84 66 84 L100 100 L66 116 Q60 116 62 122 L76 154 Q78 160 72 160 L40 160 Q34 160 36 154 L52 122 Q54 116 48 116 L24 100 L48 84 Q54 84 52 78 L36 46 Q34 40 40 40 Z"/>
      <path d="M160 40 L128 40 Q122 40 124 46 L138 78 Q140 84 134 84 L100 100 L134 116 Q140 116 138 122 L124 154 Q122 160 128 160 L160 160 Q166 160 164 154 L148 122 Q146 116 152 116 L176 100 L152 84 Q146 84 148 78 L164 46 Q166 40 160 40 Z"/>
    </svg>
  );
}

function Header({ cartCount = 1, onCart, btcPrice = "$72,418" }) {
  return (
    <header className="xlx-header">
      <div className="container inner">
        <a href="#" className="brand"><XellLogo size={26}/> XELLOX</a>
        <nav>
          <a href="#shop">Shop</a>
          <a href="#yokis">Yokis</a>
          <a href="#tech">Technology</a>
          <a href="#feed">Community</a>
          <a href="#support">Support</a>
        </nav>
        <div className="right">
          <span className="ticker">
            <span className="d"></span>
            BTC <b>{btcPrice}</b>
          </span>
          <button className="cart" onClick={onCart} aria-label="Cart">
            <i data-lucide="shopping-bag"></i>
            <span className="count">{cartCount}</span>
          </button>
        </div>
      </div>
    </header>
  );
}

window.Header = Header;
window.XellLogo = XellLogo;
