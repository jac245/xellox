import { ArrowRight } from 'lucide-react'
import YokisViewer from './YokisViewer'

export default function Hero({ onShop }) {
  return (
    <section className="xlx-hero">
      <div className="container grid">
        <div>
          <span className="eyebrow">YOKIS · 304 STAINLESS</span>
          <h1>Steel that <em>outlives</em> you.</h1>
          <p>Engrave 24 words. Forget the cloud. A 3-plate stack of fire-, water-, and time-proof bitcoin backup, machined in the EU.</p>
          <div className="ctas">
            <button className="btn btn-primary btn-lg" onClick={onShop}>Order Yokis</button>
            <a href="#tech" className="btn btn-ghost btn-lg">
              Specs <ArrowRight size={16} />
            </a>
          </div>
          <div className="micro">
            <div className="stat"><b>1,200°C</b><span>Fire-rated</span></div>
            <div className="stat"><b>304</b><span>Stainless grade</span></div>
            <div className="stat"><b>48h</b><span>EU shipping</span></div>
          </div>
        </div>
        <YokisViewer />
      </div>
    </section>
  )
}
