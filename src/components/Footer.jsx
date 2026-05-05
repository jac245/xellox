import { Twitter, Instagram, Github, Rss } from 'lucide-react'
import { XellLogo } from './Header'

export default function Footer({ navigate }) {
  function go(page, e) {
    e.preventDefault()
    navigate(page)
  }

  return (
    <footer className="xlx-footer">
      <div className="container">
        <div className="grid">
          <div className="brand-block">
            <XellLogo size={28} />
            <p>Bitcoin self-custody, made physical. Hardware wallets and steel seed-phrase backups, machined in Berlin since 2023.</p>
          </div>
          <div>
            <h4>Shop</h4>
            <ul>
              <li><a href="#" onClick={e => go('product', e)}>Yokis Steel Backup</a></li>
              <li><a href="#" onClick={e => go('product', e)}>Engraving Pen</a></li>
              <li><a href="#" onClick={e => go('product', e)}>Yokis Triple Bundle</a></li>
              <li><a href="#" onClick={e => go('home', e)}>All products</a></li>
            </ul>
          </div>
          <div>
            <h4>Learn</h4>
            <ul>
              <li><a href="#" onClick={e => go('education', e)}>Setup guide</a></li>
              <li><a href="#" onClick={e => go('education', e)}>Multisig with Yokis</a></li>
              <li><a href="#" onClick={e => go('education', e)}>Specifications</a></li>
              <li><a href="#" onClick={e => go('education', e)}>Changelog</a></li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li><a href="#" onClick={e => go('partners', e)}>Wholesale</a></li>
              <li><a href="#" onClick={e => go('partners', e)}>Whitelabel</a></li>
              <li><a href="#" onClick={e => go('partners', e)}>Contact</a></li>
              <li><a href="#" onClick={e => go('partners', e)}>Bitcoin-only manifesto</a></li>
            </ul>
          </div>
        </div>
        <div className="bottom">
          <span>© 2026 Xellox UG · Berlin · Made with steel and skepticism</span>
          <span className="bottom-links">
            <a href="#"><Twitter size={16} /></a>
            <a href="#"><Instagram size={16} /></a>
            <a href="#"><Github size={16} /></a>
            <a href="#"><Rss size={16} /></a>
          </span>
        </div>
      </div>
    </footer>
  )
}
