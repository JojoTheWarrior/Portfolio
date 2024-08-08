import React from 'react'

const Project = ({name, image, description, tools_list}) => {
  return (
    <div className="w-30vw m-5vh rounded-2xl p-1vh bg-gradient-to-r from-blue-100 to-blue-200 ">
        <h1 className="font-ubuntu-bold text-2xl">{name}</h1>
        <hr className="border-t-4 rounded-lg border-button-dark-blue"/>
        <img src={image}/>
        <div className="flex">
            <h1 className="text-xl">Tools:</h1>
        </div>
    </div>
  )
}

export default Project