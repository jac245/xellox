import { useState, useRef } from 'react'

export default function YokisViewer() {
  const [face, setFace] = useState('front')
  const [autoSpin, setAutoSpin] = useState(true)
  const [drag, setDrag] = useState({ active: false, lastX: 0, rotY: 0 })
  const stageRef = useRef(null)

  const manualRotY = face === 'front' ? drag.rotY : drag.rotY + 180
  const stageStyle = autoSpin
    ? {}
    : { animation: 'yokis-bob 5s ease-in-out infinite', transform: `rotateY(${manualRotY}deg)` }

  function onPointerDown(e) {
    setAutoSpin(false)
    setDrag(d => ({ ...d, active: true, lastX: e.clientX }))
    e.currentTarget.setPointerCapture?.(e.pointerId)
  }
  function onPointerMove(e) {
    if (!drag.active) return
    const dx = e.clientX - drag.lastX
    setDrag(d => ({ ...d, lastX: e.clientX, rotY: d.rotY + dx * 0.6 }))
  }
  function onPointerUp() { setDrag(d => ({ ...d, active: false })) }

  return (
    <div className="yokis-viewer">
      <div
        ref={stageRef}
        className={`stage ${autoSpin ? 'spin' : ''}`}
        style={stageStyle}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        <div
          className="face front"
          style={{ backgroundImage: 'url(/yokis-front.png)' }}
        />
        <div
          className="face back"
          style={{ backgroundImage: 'url(/yokis-plates-trio-cut.png)' }}
        />
      </div>
      <div className="controls">
        <button
          className={face === 'front' && !autoSpin ? 'active' : ''}
          onClick={() => { setAutoSpin(false); setFace('front'); setDrag(d => ({ ...d, rotY: 0 })) }}
        >Front</button>
        <button
          className={face === 'back' && !autoSpin ? 'active' : ''}
          onClick={() => { setAutoSpin(false); setFace('back'); setDrag(d => ({ ...d, rotY: 0 })) }}
        >Back</button>
        <button
          className={autoSpin ? 'active' : ''}
          onClick={() => { setAutoSpin(true); setDrag(d => ({ ...d, rotY: 0 })) }}
        >Auto</button>
      </div>
    </div>
  )
}
