import React from 'react'

const Project = (name, image, description, tools_list) => {
  return (
    <div className="w-30vw m-5vh p-1vh">
        <h1 className="font-ubuntu-bold text-2xl">{name}</h1>
        <hr className="border-t border-gray-300"/>
        <img src={image}/>
        <div className="flex">
            <h1 className="text-xl">Tools:</h1>
        </div>
    </div>
  )
}

export default Project