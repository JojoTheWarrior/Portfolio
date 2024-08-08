import React, { useState } from 'react'
import Project from "./Project.jsx";
/* Project Images */
import astral_adventure from "../assets/images/astral_adventure.png";



const Projects = () => {
    const [view, setView] = useState("grid");
    const GridView = (
        <div className="flex w-full">
            <Project 
                name="Astral Adventure" image={astral_adventure}
                description="Fun and educational Processing game about an astronaut's adventure through space. Created by Joshua Wang and Brian Song, May 2022."
            />
        </div>
    )

    return (
        <div>
            {/* Switch */}
            <div className="flex justify-center w-full mt-25vh font-ubuntu font-bold text-white text-2xl">
                <button className={`rounded-l-lg p-2 ${view=="grid" ? `w-60vw` : 'w-20vw'} bg-gradient-to-r from-button-lighter-blue to-button-light-blue
                    transition-all duration-700 ease-in-out`}
                    onClick={() => setView("grid")}>
                    Grid View
                </button>
                <button className={`rounded-r-lg p-2 ${view=="categorical" ? `w-60vw` : 'w-20vw'} bg-gradient-to-r from-button-dark-blue to-button-darker-blue
                    transition-all duration-700 ease-in-out`}
                    onClick={() => setView("categorical")}>
                    Categorical View
                </button>
            </div>
        </div>
    )
}

export default Projects