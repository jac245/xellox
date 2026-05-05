// YokisViewer.jsx — Floating, flippable Yokis with transparent BGs
function YokisViewer() {
  const [face, setFace] = React.useState('front');
  const [autoSpin, setAutoSpin] = React.useState(true);
  const [drag, setDrag] = React.useState({ active: false, lastX: 0, rotY: 0 });
  const stageRef = React.useRef(null);

  const manualRotY = face === 'front' ? drag.rotY : drag.rotY + 180;
  const stageStyle = autoSpin ? {} : { animation: 'yokis-bob 5s ease-in-out infinite', transform: `rotateY(${manualRotY}deg)` };

  function onPointerDown(e) {
    setAutoSpin(false);
    setDrag(d => ({ ...d, active: true, lastX: e.clientX }));
    e.currentTarget.setPointerCapture?.(e.pointerId);
  }
  function onPointerMove(e) {
    if (!drag.active) return;
    const dx = e.clientX - drag.lastX;
    setDrag(d => ({ ...d, lastX: e.clientX, rotY: d.rotY + dx * 0.6 }));
  }
  function onPointerUp() { setDrag(d => ({ ...d, active: false })); }

  return (
    <div className="yokis-viewer">
      <div ref={stageRef} className={`stage ${autoSpin ? 'spin' : ''}`} style={stageStyle}
        onPointerDown={onPointerDown} onPointerMove={onPointerMove} onPointerUp={onPointerUp} onPointerCancel={onPointerUp}>
        <div className="face front"></div>
        <div className="face back"></div>
      </div>
      <div className="controls">
        <button className={face === 'front' && !autoSpin ? 'active' : ''} onClick={() => { setAutoSpin(false); setFace('front'); setDrag(d=>({...d,rotY:0})); }}>Front</button>
        <button className={face === 'back' && !autoSpin ? 'active' : ''} onClick={() => { setAutoSpin(false); setFace('back'); setDrag(d=>({...d,rotY:0})); }}>Back</button>
        <button className={autoSpin ? 'active' : ''} onClick={() => { setAutoSpin(true); setDrag(d=>({...d,rotY:0})); }}>Auto</button>
      </div>
    </div>
  );
}
window.YokisViewer = YokisViewer;
