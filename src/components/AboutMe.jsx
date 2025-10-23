import React from 'react'
import temp_pfp from '../assets/images/temp_pfp.jpeg';

const AboutMe = () => {
  return (
    <>
      <div className="w-full">
        {/* Name and profile picture */}
        <div className='font-ubuntu flex background-blur-sm mx-8vh p-1vh justify-evenly items-center'>
            <div className="text-white p-1vh backdrop-blur-lg">
              <h1 className="text-4xl">Hi, I'm <b>Joshua</b>!</h1>
              <p className="text-2xl">I enjoy <b className="text-palette-lapis">quant finance</b>, <b className="text-palette-lapis">software development</b>, and <b className="text-palette-lapis">mathematics.</b></p>
              <p className="text-2xl">I'm a first-year <b className="text-palette-lapis">Computer Science</b> student at the University of Waterloo.</p>
            </div>
            <div className="">
              <img src={temp_pfp} className="h-30vh"/>
            </div>
        </div>
      </div>
    </>
  )
}

export default AboutMe; 