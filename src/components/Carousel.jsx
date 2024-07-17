import React, { useRef, useEffect } from 'react'

const Carousel = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    // 1413 by 639
    canvas.width = window.innerWidth * 0.92
    canvas.height = window.innerHeight * 0.92
    let PAD = window.innerHeight * 0.02

    console.log(canvas.height);

    const draw = (ctx) => {
        ctx.beginPath();
        ctx.moveTo(PAD, canvas.height*200/639);
        ctx.bezierCurveTo(PAD+canvas.width*471/1413, canvas.height*50/639, PAD+canvas.width*942/1413, canvas.height*700/639, PAD+canvas.width*1413/1413, canvas.height*300/639);
        ctx.stroke();
    }

    const animate = () => {
        draw(canvas.getContext('2d'));
        requestAnimationFrame(animate);
      }
      animate();
    
      // handling resize
      const handleResize = () => {
        canvas.width = window.innerWidth * 0.92;
        canvas.height = window.innerHeight * 0.92;
        PAD = window.innerHeight * 0.02;
      }
      window.addEventListener('resize', handleResize);
    
      return () => {
        window.removeEventListener('resize', handleResize);
      }
  }, [])

  return (
    <div className='w-full'>
        <div className="h-100vh bg-palette-lapis m-4vh">
            <canvas ref={canvasRef} className=""/>
        </div>
    </div>
  )
}

export default Carousel