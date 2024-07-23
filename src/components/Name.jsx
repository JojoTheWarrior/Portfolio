import React, { useState } from 'react'

const Name = () => {
    const [sliderValue, setSliderValue] = useState(50);

    const handleSliderChange = (event) => {
        setSliderValue(event.target.value);
        console.log(sliderValue)
    }

    return (
    <div className="relative w-full h-25vh mt-25vh flex items-center justify-center z-5">
        <style> {`
            .slider {
                -webkit-appearance: none;
                width: 100%;
                height: 15px;
                background: #ddd;
                outline: none;
                opacity: 0.7;
                transition: opacity .2s;
            }

            .slider::-webkit-slider-thumb {
                -webkit-appearance: none;
                appearance: none;
                width: 25px;
                height: 25px;
                background: transparent;
                cursor: pointer;
                position: relative;
            }

            .slider::-webkit-slider-thumb::before {
                content: '/';
                font-size: 20px;
                color: black;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }

            /* For Firefox */
            .slider::-moz-range-thumb {
                width: 25px;
                height: 25px;
                background: transparent;
                cursor: pointer;
                position: relative;
            }

            .slider::-moz-range-thumb::before {
                content: '/';
                font-size: 20px;
                color: black;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
        `}</style>
        <input
            type="range"
            min="0"
            max="100"
            value={sliderValue}
            onChange={handleSliderChange}
            className="absolute slider bg-gray-300 outline-none z-20"
            style={{
                width: '555.492px',
                bottom: '104.29px',
            }}
        />
        {/* Joshua Wang / JojoTheWarrior */}
        <div className="relative w-full h-full flex justify-center z-10">
            <span 
                className="absolute text-10vmin font-bold text-palette-blue z-20"
                style={{ 
                    clipPath: 
                    `polygon(0% 0%, 
                    ${1.25 * Math.min(Math.max(sliderValue - 10, 0), 80)}% 0%, 
                    ${1.25 * Math.min(Math.max(sliderValue - 10, 0), 80)}% 100%,
                    0% 100%,
                    0% 0%)`,
                    letterSpacing: '0.03763em'
                }}
            >
                Joshua Wang
            </span>
            <span 
                className="absolute text-10vmin text-palette-blue z-20"
                style={{ 
                    clipPath: 
                    `polygon(100% 0%, 
                    ${1.25 * Math.min(Math.max(sliderValue - 10, 0), 80)}% 0%, 
                    ${1.25 * Math.min(Math.max(sliderValue - 10, 0), 80)}% 100%,
                    100% 100%,
                    100% 0%)` 
                }}
            >
                JojoTheWarrior
            </span>
        </div>
    </div>
    )
}

export default Name