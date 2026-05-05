import { useState } from 'react'
import { ArrowRight, BookOpen, Shield, Key, Layers } from 'lucide-react'

const UPCOMING = [
  { Icon: Key,     title: 'Seed phrases, explained',    body: 'What BIP-39 is, how the 24 words are generated, and why the order matters.' },
  { Icon: Shield,  title: 'Why paper fails',            body: 'Fire, water, time, and the human error that paper backup almost always involves.' },
  { Icon: Layers,  title: 'Multisig with Yokis',        body: 'A 2-of-3 multisig setup across three Yokis plates. Step-by-step, no shortcuts.' },
  { Icon: BookOpen, title: 'Self-custody from zero',    body: 'First hardware wallet. First backup. No assumptions about what you already know.' },
]

export default function EducationPage() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  return (
    <div className="edu-page">
      <div className="edu-hero">
        <div className="container edu-hero-inner">
          <span className="eyebrow">Learning center</span>
          <h1 className="edu-headline">Coming soon.</h1>
          <p className="edu-sub">
            Guides on seed phrases, multisig setups, and why physical backup matters. Real words, no filler. Written for people who already hold their own keys — or are about to.
          </p>
          {!submitted ? (
            <div className="edu-notify">
              <input
                className="edu-input"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <button
                className="btn btn-primary"
                onClick={() => email && setSubmitted(true)}
              >
                Notify me
              </button>
            </div>
          ) : (
            <div className="edu-confirmed">
              Confirmed. We'll reach out when guides go live.
            </div>
          )}
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">What's coming</span>
            <h2>Plain-language guides.</h2>
            <p>No blockchain jargon. No beginner condescension. Just what you need to know.</p>
          </div>
          <div className="feature-grid">
            {UPCOMING.map(({ Icon, title, body }) => (
              <div className="feature edu-feature" key={title}>
                <div className="icon"><Icon /></div>
                <h3>{title}</h3>
                <p>{body}</p>
                <span className="edu-soon">Coming soon</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt" style={{ paddingTop: 80, paddingBottom: 80 }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="eyebrow">In the meantime</span>
          <h2 style={{ marginTop: 12, marginBottom: 20 }}>Start with the hardware.</h2>
          <p style={{ fontSize: 18, color: 'var(--ink-2)', marginBottom: 32 }}>
            The guides will make more sense once you've held the product.
          </p>
          <a href="/#shop" className="btn btn-primary btn-lg">
            View Yokis <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </div>
  )
}
