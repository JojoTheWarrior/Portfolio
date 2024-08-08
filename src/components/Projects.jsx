import React, { useState } from 'react'

const Projects = () => {
    const [view, setView] = useState("grid");

    return (
        <div>
            {/* Switch */}
            <div className="flex justify-center w-full mt-25vh font-ubuntu font-bold text-white text-2xl">
                <button className={`p-2 ${view=="grid" ? `w-60vw` : 'w-20vw'} bg-gradient-to-l from-button-lighter-blue to-button-light-blue
                    ${view=="categorical" ? "border-4 border-button-dark-blue bg-opacity-50" : ""}
                    transition-all duration-300 ease-in-out`}
                    onClick={() => setView("grid")}>
                    Grid View
                </button>
                <button className={`p-2 ${view=="categorical" ? `w-60vw` : 'w-20vw'} bg-gradient-to-r from-button-dark-blue to-button-darker-blue
                    ${view=="grid" ? "border-4 border-button-lighter-blue bg-opacity-50" : ""}
                    transition-all duration-300 ease-in-out`}
                    onClick={() => setView("categorical")}>
                    Categorical View
                </button>
            </div>

        </div>
    )
}

export default Projects