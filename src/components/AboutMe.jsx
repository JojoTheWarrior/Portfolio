import React from 'react'
import temp_pfp from '../assets/images/temp_pfp.jpeg';

const AboutMe = () => {
  return (
    <>
      <div className="w-full">
        {/* Name and profile picture */}
        <div className='font-ubuntu flex background-blur-sm mx-8vh p-1vh justify-evenly items-center'>
            <div className="text-white p-1vh backdrop-blur-lg">
              <h1 className="text-4xl">Hi, I'm <b>Shuya</b>!</h1>
              <p className="text-2xl">I enjoy <b className="text-palette-lapis">web</b> + <b className="text-palette-lapis"> game development</b>, and <b className="text-palette-lapis">music</b></p>
              <p className="text-2xl">I'm a Grade 12 student at Earl Haig SS.</p>
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