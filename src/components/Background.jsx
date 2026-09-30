import React, { useEffect, useRef, useState } from 'react';
export default function Background() {
  const canvasRef = useRef(null);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return undefined;
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0, width = 0, height = 0, lastTime = 0, time = 0;
    let pointer = { x: 0, y: 0 }, eased = { x: 0, y: 0 }, scroll = window.scrollY;
    const stars = Array.from({ length: 85 }, (_, i) => ({ x: Math.random(), y: Math.random(), depth: 0.3 + Math.random() * 0.7, phase: Math.random() * Math.PI * 2, colored: i % 7 === 0 }));
    const wrap = (value, max) => ((value % max) + max) % max;
    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      stars.forEach(star => {
        const x = wrap(star.x * width + eased.x * star.depth * 17, width);
        const y = wrap(star.y * height + time * (2 + star.depth * 4) - scroll * star.depth * 0.075 + eased.y * star.depth * 12, height);
        const radius = 0.7 + star.depth * 1.3;
        ctx.globalAlpha = 0.22 + star.depth * 0.2 + Math.sin(time * 0.65 + star.phase) * 0.12;
        ctx.fillStyle = star.colored ? '#c66bfa' : '#cbc3df';
        ctx.beginPath(); ctx.arc(x, y, radius, 0, Math.PI * 2); ctx.fill();
        if (star.colored) { ctx.globalAlpha *= 0.12; ctx.beginPath(); ctx.arc(x, y, radius * 4, 0, Math.PI * 2); ctx.fill(); }
      });
      ctx.globalAlpha = 1;
    };
    const resize = () => {
      width = window.innerWidth; height = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr; canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0); draw();
    };
    const animate = timestamp => {
      time += lastTime ? Math.min((timestamp - lastTime) / 1000, 0.05) : 0;
      lastTime = timestamp;
      eased.x += (pointer.x - eased.x) * 0.035; eased.y += (pointer.y - eased.y) * 0.035;
      scroll += (window.scrollY - scroll) * 0.045;
      draw(); frame = window.requestAnimationFrame(animate);
    };
    const sync = () => {
      window.cancelAnimationFrame(frame); lastTime = 0;
      if (!paused && !media.matches && !document.hidden) frame = window.requestAnimationFrame(animate); else draw();
    };
    const move = event => { pointer = { x: event.clientX / width - 0.5, y: event.clientY / height - 0.5 }; };
    resize(); sync();
    window.addEventListener('resize', resize); window.addEventListener('pointermove', move, { passive: true });
    document.addEventListener('visibilitychange', sync); media.addEventListener('change', sync);
    return () => {
      window.cancelAnimationFrame(frame); window.removeEventListener('resize', resize); window.removeEventListener('pointermove', move);
      document.removeEventListener('visibilitychange', sync); media.removeEventListener('change', sync);
    };
  }, [paused]);
  return <><canvas className="starfield" ref={canvasRef} aria-hidden="true" /><button className="motion-toggle" type="button" onClick={() => setPaused(!paused)} aria-label={paused ? 'Resume background animation' : 'Pause background animation'} aria-pressed={paused}><span aria-hidden="true">{paused ? '▷' : 'Ⅱ'}</span><span className="motion-label">{paused ? 'stars paused' : 'pause stars'}</span></button></>;
}
