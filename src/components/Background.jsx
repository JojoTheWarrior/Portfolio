import React, { useRef, useEffect } from 'react'


const Background = () => {
  const canvasRef = useRef(null);

  useEffect(() => {    
    // initializing canvas
    const canvas = canvasRef.current;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // initilizing bouncing dots
    const N = 15;
    let dots = Array.from({ length: N }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      dx: 4*Math.random() - 2,
      dy: 4*Math.random() - 2
    }));

    const draw = (ctx) => {
      ctx.fillStyle = 'lightblue';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // drawing each dot
      dots.forEach(dot => {
        // drawing the circle
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, 10, 0, Math.PI * 2, false);
        ctx.fillStyle = 'red';
        ctx.fill();
        ctx.closePath();

        dot.x += dot.dx;
        dot.y += dot.dy;
        
        if (dot.x + 5 > canvas.width || dot.x - 5 < 0) dot.dx *= -1;
        if (dot.y + 5 > canvas.height || dot.y - 5 < 0) dot.dy *= -1;
      });

      ctx.lineWidth = 5;
      // drawing the connections
      for (let i = 0; i < N; i++){
        for (let j = 0; j < N; j++){
          let dst = Math.sqrt(Math.pow(dots[i].x - dots[j].x, 2) + Math.pow(dots[i].y - dots[j].y, 2));
          
          ctx.strokeStyle = `rgba(125, 30, 30, ${(Math.max(100 - dst, 0) / 100.0)})`;

          // drawing the line
          ctx.beginPath();
          ctx.moveTo(dots[i].x, dots[i].y);
          ctx.lineTo(dots[j].x, dots[j].y);
          ctx.stroke();
        }
      }
    };

    // the drawing loop
    const animate = () => {
      draw(canvas.getContext('2d'));
      requestAnimationFrame(animate);
    };
    animate();

    // handling resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10"/>
}

export default Background