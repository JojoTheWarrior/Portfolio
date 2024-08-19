import React, { useRef, useEffect, useState } from 'react'


const Background = () => {
  const canvasRef = useRef(null);
  let scroll = 0;

  useEffect(() => {    
    // initializing canvas
    const canvas = canvasRef.current;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // initializing stars
    const getRandomInt = (max) => Math.floor(Math.random() * max);
    const N = 50;
    const stars = Array.from({ length: 2 }, () => 
      Array.from({ length: N }, () => [getRandomInt(canvas.width), getRandomInt(canvas.height)])
    );

    const draw = (ctx) => {
      // black background
      ctx.fillStyle = 'black'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      stars[0].forEach((star) => {
        ctx.beginPath();
        ctx.arc(star[0], Math.abs((star[1] + 10*scroll) % canvas.height), 5, 0, 2*Math.PI)
        ctx.fillStyle = 'white';
        ctx.fill();
      });
      stars[1].forEach((star) => {
        ctx.beginPath();
        ctx.arc(star[0], Math.abs((star[1] + 5*scroll) % canvas.height), 5, 0, 2*Math.PI)
        ctx.fillStyle = 'white';
        ctx.fill();
      });
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

    // handling scroll
    const handleScroll = (event) => {
      scroll += event.deltaY;
    }
    window.addEventListener('wheel', handleScroll);

    // part that always runs to slowly move stars down
    const starsInterval = setInterval(() =>{
      stars[0].forEach((star) => {
        star[1] += 2;
        if (star[1] > canvas.height){
          star[1] = -scroll;
          star[0] = getRandomInt(canvas.width);
          console.log(canvas.height);
        }
      });
      stars[1].forEach((star) => {
        star[1] += 1;
        if (star[1] > canvas.height){
          star[1] = -scroll;
          star[0] = getRandomInt(canvas.width);
        }
      });
    }, 10);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('wheel', handleScroll);
      clearInterval(starsInterval);
    }
  }, [])

  return (
    <div className="fixed bg-black top-0 left-0 w-full h-full -z-10">
      <canvas ref={canvasRef} className=""/>
    </div>
  )
}

export default Background;