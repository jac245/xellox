// Footer.jsx
function Footer() {
  return (
    <footer className="xlx-footer">
      <div className="container">
        <div className="grid">
          <div className="brand-block">
            <XellLogo size={28}/>
            <p>Bitcoin self-custody, made physical. Hardware wallets and steel seed-phrase backups, machined in Berlin since 2023.</p>
          </div>
          <div>
            <h4>Shop</h4>
            <ul>
              <li><a href="#">Yokis Steel Backup</a></li>
              <li><a href="#">Engraving Pen</a></li>
              <li><a href="#">Yokis Triple Bundle</a></li>
              <li><a href="#">Hardware wallets</a></li>
            </ul>
          </div>
          <div>
            <h4>Resources</h4>
            <ul>
              <li><a href="#">Setup guide</a></li>
              <li><a href="#">Multisig with Yokis</a></li>
              <li><a href="#">Specifications</a></li>
              <li><a href="#">Changelog</a></li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Press kit</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Bitcoin-only manifesto</a></li>
            </ul>
          </div>
        </div>
        <div className="bottom">
          <span>© 2026 Xellox UG · Berlin · Made with steel and skepticism</span>
          <span style={{ display: 'flex', gap: 14 }}>
            <a href="#" style={{ color: 'var(--xlx-fg-3)' }}><i data-lucide="twitter"></i></a>
            <a href="#" style={{ color: 'var(--xlx-fg-3)' }}><i data-lucide="instagram"></i></a>
            <a href="#" style={{ color: 'var(--xlx-fg-3)' }}><i data-lucide="github"></i></a>
            <a href="#" style={{ color: 'var(--xlx-fg-3)' }}><i data-lucide="rss"></i></a>
          </span>
        </div>
      </div>
    </footer>
  );
}
window.Footer = Footer;
