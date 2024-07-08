import React, { useRef, useEffect } from 'react'

const Background = () => {
    const canvasRef = useRef(null);
  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10"/>
}

export default Background