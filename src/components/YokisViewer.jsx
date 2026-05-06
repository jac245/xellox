import { useState } from 'react'

export default function YokisViewer() {
  const [flipped, setFlipped] = useState(false)

  return (
    <div className="yokis-viewer-3d">
      <div
        className={`yokis-card ${flipped ? 'flipped' : ''}`}
        onClick={() => setFlipped(f => !f)}
        title="Click to flip"
      >
        <div className="yokis-face yokis-face-front">
          <img src="/yokis-front.png" alt="Yokis — front" draggable={false} />
        </div>
        <div className="yokis-face yokis-face-back">
          <img src="/yokis-plates-trio-cut.png" alt="Yokis — back plates" draggable={false} />
        </div>
      </div>
      <div className="yokis-flip-hint">
        {flipped ? 'Click to see front' : 'Click to see plates'}
      </div>
      <div className="yokis-flip-controls">
        <button
          className={!flipped ? 'active' : ''}
          onClick={() => setFlipped(false)}
        >Front</button>
        <button
          className={flipped ? 'active' : ''}
          onClick={() => setFlipped(true)}
        >Plates</button>
      </div>
    </div>
  )
}
