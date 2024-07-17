import React, { useState } from 'react'

const Name = () => {
    const [sliderValue, setSliderValue] = useState(50);

    const handleSliderChange = (event) => {
        setSliderValue(event.target.value);
        console.log(sliderValue)
    }

    return (
    <div className="relative w-full h-25vh mt-25vh flex items-center justify-center z-5">
        <input
            type="range"
            min="0"
            max="100"
            value={sliderValue}
            onChange={handleSliderChange}
            className="absolute w-50vw h-1 bg-gray-300 outline-none z-20"
        />
        <div className="relative w-full h-full flex z-10">
            <div className="absolute inset-0 flex items-center justify-center font-bold">
                <span 
                    className="absolute w-50vw inset-0 m-auto text-10vmin text-palette-blue z-20"
                    style={{ 
                        clipPath: 
                        `polygon(0% 0%, 
                        ${sliderValue}% 0%, 
                        ${sliderValue}% 100%,
                        0% 100%,
                        0% 0%)` 
                    }}
                >
                    Joshua Wang
                </span>
                <span 
                    className="absolute w-50vw inset-0 m-auto text-10vmin text-palette-blue z-20"
                    style={{ 
                        clipPath: 
                        `polygon(100% 0%, 
                        ${sliderValue}% 0%, 
                        ${sliderValue}% 100%,
                        100% 100%,
                        100% 0%)` 
                    }}
                >
                    JojoTheWarrior
                </span>
            </div>
        </div>
    </div>
    )
}

export default Name