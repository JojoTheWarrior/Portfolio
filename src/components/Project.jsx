import React from 'react'

const Project = ({name, image, description, tools_list}) => {
  return (
    <div className="w-30vw m-5vh rounded-2xl p-1vh bg-blue-500 bg-opacity-25 backdrop-blur-2xl">
        <h1 className="font-pixeloid font-bold text-center text-4xl">{name}</h1>
        <hr className="border-t-4 rounded-lg border-button-dark-blue"/>
        <img className="drop-shadow-glow rounded-3xl p-4" src={image}></img>
        {/* Tools List */}
        <div className="flex">
            {
              tools_list.map((tool, index) =>)
            }
        </div>
    </div>
  )
}

export default Project