// SocialFeed.jsx — Twitter/Instagram embed-style cards
function SocialFeed() {
  const posts = [
    { src: 'twitter', name: 'Marty Bent', handle: '@MartyBent', avatar: 'M', body: 'Just got my @xellox Yokis. Built like a brick. The engraving pen feels like a surgical tool. <b>Steel beats paper.</b>', meta: '2h · 1.2k likes' },
    { src: 'instagram', name: 'cold.storage.lab', handle: '@cold.storage.lab', avatar: 'C', body: 'Unboxing the Yokis Triple for our new multisig setup. Three plates, three locations. <b>Sleep well.</b>', img: '../../assets/yokis-plates-fan.jpg', meta: '1d · 4.8k likes' },
    { src: 'twitter', name: 'Lyn Alden', handle: '@LynAldenContact', avatar: 'L', body: 'For long-term holders, physical seed backups are non-negotiable. <b>@xellox</b> ships 48h in EU. Worth it.', meta: '3d · 8.1k likes' },
  ];
  const icon = src => src === 'twitter' ? 'twitter' : 'instagram';
  return (
    <section className="section" id="feed">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Community</span>
          <h2>From the field.</h2>
          <p>What real bitcoiners say. Pulled live from Twitter and Instagram.</p>
        </div>
        <div className="feed-grid">
          {posts.map((p, i) => (
            <div className="post" key={i}>
              <div className="head">
                <div className="avatar">{p.avatar}</div>
                <div>
                  <div className="name">{p.name}</div>
                  <div className="handle">{p.handle}</div>
                </div>
                <div className="src"><i data-lucide={icon(p.src)}></i></div>
              </div>
              <div className="body" dangerouslySetInnerHTML={{__html: p.body}}/>
              {p.img && <div className="img" style={{ backgroundImage: `url(${p.img})` }}></div>}
              <div className="meta">{p.meta}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.SocialFeed = SocialFeed;
