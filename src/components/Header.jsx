import { ShoppingBag } from 'lucide-react'

export default function Header({ cartCount = 0, onCart, navigate, currentView }) {
  function navTo(page, e) {
    e.preventDefault()
    navigate(page)
  }

  return (
    <header className="xlx-header">
      <div className="container inner">
        <a href="#" className="brand" onClick={e => navTo('home', e)}>
          <img src="/logo-xellox.webp" alt="Xellox" className="brand-logo" />
          XELLOX
        </a>
        <nav>
          <a
            href="#"
            className={currentView === 'product' ? 'nav-active' : ''}
            onClick={e => navTo('product', e)}
          >Yokis</a>
          <a
            href="#"
            className={currentView === 'home' ? 'nav-active' : ''}
            onClick={e => navTo('home', e)}
          >Shop</a>
          <a
            href="#"
            className={currentView === 'education' ? 'nav-active' : ''}
            onClick={e => navTo('education', e)}
          >Learn</a>
          <a
            href="#"
            className={currentView === 'partners' ? 'nav-active' : ''}
            onClick={e => navTo('partners', e)}
          >Partners</a>
        </nav>
        <div className="right">
          <span className="ticker">
            <span className="dot"></span>
            BTC <b>$72,418</b>
          </span>
          <button className="cart" onClick={onCart} aria-label="Cart">
            <ShoppingBag size={18} />
            {cartCount > 0 && <span className="count">{cartCount}</span>}
          </button>
        </div>
      </div>
    </header>
  )
}
