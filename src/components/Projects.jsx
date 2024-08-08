import React, { useState } from 'react'

const Projects = () => {
    const [view, setView] = useState("grid");

    return (
        <div>
            {/* Switch */}
            <div className="flex justify-center w-full mt-25vh font-ubuntu font-bold text-white text-2xl">
                <button className={`p-2 w-40vw bg-gradient-to-l 
                    ${view=="grid" ? "from-button-lighter-blue to-button-light-blue" : "from-button-dark-blue to-button-darker-blue"}
                    ${view=="categorical" ? "border-4 border-button-dark-blue" : ""}`}
                    onClick={}>
                    Grid View
                </button>
                <button className={`p-2 w-40vw bg-gradient-to-r 
                    ${view=="categorical" ? "from-button-lighter-blue to-button-light-blue" : "from-button-dark-blue to-button-darker-blue"}
                    ${view=="grid" ? "border-4 border-button-lighter-blue" : ""}`}>
                    Categorical View
                </button>
            </div>

        </div>
    )
}

export default Projects