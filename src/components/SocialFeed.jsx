const POSTS = [
  {
    src: 'twitter',
    name: 'Marty Bent',
    handle: 'MartyBent',
    verified: true,
    avatar: 'M',
    avatarBg: '#1DA1F2',
    body: 'Just got my @xellox Yokis. Built like a brick. The engraving pen feels like a surgical tool. Steel beats paper.',
    time: '2h',
    likes: '1.2K',
    reposts: '341',
    replies: '87',
  },
  {
    src: 'instagram',
    name: 'cold.storage.lab',
    handle: 'cold.storage.lab',
    verified: false,
    avatar: 'C',
    avatarBg: 'linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)',
    body: 'Unboxing the Yokis Triple for our new multisig setup. Three plates, three locations. Sleep well. 🔐',
    img: '/yokis-plates-fan.jpg',
    time: '1d',
    likes: '4,823',
  },
  {
    src: 'twitter',
    name: 'Lyn Alden',
    handle: 'LynAldenContact',
    verified: true,
    avatar: 'L',
    avatarBg: '#8B5CF6',
    body: 'For long-term holders, physical seed backups are non-negotiable. @xellox ships 48h in EU. Worth it.',
    time: '3d',
    likes: '8.1K',
    reposts: '2.4K',
    replies: '302',
  },
]

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.258 5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="url(#ig-grad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <defs>
        <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f09433"/>
          <stop offset="50%" stopColor="#dc2743"/>
          <stop offset="100%" stopColor="#bc1888"/>
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4.5"/>
      <circle cx="17.5" cy="6.5" r="1" fill="#dc2743" stroke="none"/>
    </svg>
  )
}

function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>
  )
}

function RepostIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8">
      <polyline points="17 1 21 5 17 9"/>
      <path d="M3 11V9a4 4 0 0 1 4-4h14"/>
      <polyline points="7 23 3 19 7 15"/>
      <path d="M21 13v2a4 4 0 0 1-4 4H3"/>
    </svg>
  )
}

function ReplyIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    </svg>
  )
}

function TwitterPost({ post }) {
  return (
    <div className="x-post">
      <div className="x-post-header">
        <div className="x-avatar" style={{ background: post.avatarBg }}>{post.avatar}</div>
        <div className="x-meta">
          <div className="x-name-row">
            <span className="x-name">{post.name}</span>
            {post.verified && (
              <span className="x-verified">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="#1D9BF0">
                  <path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91C2.88 9.33 2 10.57 2 12s.88 2.67 2.19 3.34c-.46 1.39-.2 2.9.81 3.91s2.52 1.26 3.91.8c.66 1.31 1.91 2.19 3.34 2.19s2.67-.88 3.33-2.19c1.4.46 2.91.2 3.92-.81s1.26-2.52.8-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z"/>
                </svg>
              </span>
            )}
          </div>
          <span className="x-handle">@{post.handle} · {post.time}</span>
        </div>
        <div className="x-brand-icon"><XIcon /></div>
      </div>
      <p className="x-body">{post.body}</p>
      <div className="x-actions">
        <span className="x-action"><ReplyIcon />{post.replies}</span>
        <span className="x-action"><RepostIcon />{post.reposts}</span>
        <span className="x-action"><HeartIcon />{post.likes}</span>
      </div>
    </div>
  )
}

function InstagramPost({ post }) {
  return (
    <div className="ig-post">
      <div className="ig-header">
        <div className="ig-avatar-wrap">
          <div className="ig-avatar" style={{ background: post.avatarBg }}>{post.avatar}</div>
        </div>
        <div className="ig-meta">
          <span className="ig-name">{post.name}</span>
          <span className="ig-time">{post.time}</span>
        </div>
        <div className="ig-brand-icon"><InstagramIcon /></div>
      </div>
      {post.img && (
        <div className="ig-image">
          <img src={post.img} alt="post" />
        </div>
      )}
      <div className="ig-body-wrap">
        <div className="ig-actions">
          <div className="ig-actions-left">
            <HeartIcon /><ReplyIcon />
          </div>
        </div>
        <p className="ig-likes"><b>{post.likes} likes</b></p>
        <p className="ig-caption"><b>{post.name}</b> {post.body}</p>
      </div>
    </div>
  )
}

export default function SocialFeed() {
  return (
    <section className="section" id="feed">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Community</span>
          <h2>From the field.</h2>
          <p>What real bitcoiners say. Pulled live from Twitter and Instagram.</p>
        </div>
        <div className="feed-grid">
          {POSTS.map((p, i) =>
            p.src === 'twitter'
              ? <TwitterPost key={i} post={p} />
              : <InstagramPost key={i} post={p} />
          )}
        </div>
      </div>
    </section>
  )
}
