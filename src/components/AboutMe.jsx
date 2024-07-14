import React from 'react'
import temp_pfp from '../assets/images/temp_pfp.jpeg';

const AboutMe = () => {
  return (
    <div className="w-full">
      {/* Name and profile picture */}
      <div className='flex bg-palette-lapis mx-8vh mt-25vh p-1vh justify-evenly items-center'>
          <div className="text-lg bg-palette-pink p-1vh">
            Joshua Wang \n JojoTheWarrior
          </div>
          <div className>
            <img src={temp_pfp} className="h-30vh"/>
          </div>
      </div>
      {/* Carousel space belt */}

    </div>
  )
}

export default AboutMe; 