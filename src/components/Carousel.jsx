import React, { useRef, useEffect } from 'react'

const Carousel = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    canvas.width = window.innerWidth;
    canvas.height= window.innerHeight;

    const draw = (ctx) => {
        ctx.beginPath();
        ctx.moveTo(20, 20);
        ctx.bezierCurveTo(20, 100, 200, 100, 200, 20);
        ctx.stroke();
    }

    const animate = () => {
        draw(canvas.getContext('2d'));
        requestAnimationFrame(animate);
      }
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

  return (
    <canvas ref={canvasRef} className=""/>
  )
}

export default Carousel