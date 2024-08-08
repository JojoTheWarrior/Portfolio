import React, { useState } from 'react'

const Projects = () => {
    const [view, setView] = useState("grid");

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