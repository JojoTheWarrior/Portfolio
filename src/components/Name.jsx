import React, { useState } from 'react';
export default function Name() {
  const [value, setValue] = useState(100);
  return <div className="name-block"><h1 className="sr-only">Joshua Wang / JojoTheWarrior</h1>
    <div className="name-reveal" style={{ '--reveal': `${value}%` }}>
      <div className="name-layer name-handle" aria-hidden="true">JojoTheWarrior</div>
      <div className="name-layer name-real" aria-hidden="true">Joshua Wang<span>.</span></div>
      <div className="reveal-rule" aria-hidden="true"><span>↔</span></div>
      <input aria-label="Reveal Joshua Wang or JojoTheWarrior" aria-valuetext={value === 100 ? 'Joshua Wang' : value === 0 ? 'JojoTheWarrior' : `${value}% Joshua Wang, ${100 - value}% JojoTheWarrior`} className="name-slider" type="range" min="0" max="100" value={value} onChange={event => setValue(Number(event.target.value))} />
    </div>
    <div className="name-caption"><span>also <span className="handle">@JojoTheWarrior</span></span><span className="drag-hint">drag to meet my other name <span aria-hidden="true">↔</span></span></div>
  </div>;
}
