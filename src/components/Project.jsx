import React from 'react'

const Project = ({name, image, description, tools_list}) => {
  console.log(tools_list);
  return (
    <div className="w-30vw m-5vh rounded-2xl p-1vh bg-blue-500 bg-opacity-25 backdrop-blur-2xl">
        <h1 className="font-pixeloid font-bold text-center text-4xl">{name}</h1>
        <hr className="border-t-4 rounded-lg border-button-dark-blue"/>
        <img className="drop-shadow-glow rounded-3xl p-4" src={image}></img>
        {/* Tools List */}
        <div className="flex">
            {
              tools_list.map((tool, index) => {
                return(
                <div key={index}>
                  <img src={tool.image} className="w-8vh h-8vh"></img>
                </div>
                )
              })
            }
        </div>
    </div>
  )
}

export default Project