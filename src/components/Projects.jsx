import React, { useState } from 'react'
import Project from "./Project.jsx";
/* Project Images */
import astral_adventure from "../assets/images/astral_adventure.png";

/* Framework Images */
import processing from "../assets/images/processing.png";

const Projects = () => {
    const [view, setView] = useState("grid");

    return (
        <div>
            {/* Switch */}
            <div className="flex w-full justify-center">
                <div className="flex justify-center w-80vw rounded-xl mt-25vh font-ubuntu font-bold text-white text-2xl
                                shadow-glow">
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
            {   
                view=="grid" ? 
                <div className="flex w-full">
                    <Project name="Astral Adventure" image={astral_adventure}/>
                </div>
                :
                <div>
                    {/* Categorical view */}
                </div>
            }
        </div>
    )
}

export default Projects