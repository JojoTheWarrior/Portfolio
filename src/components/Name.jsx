import React, { useState, useEffect } from 'react'
import logo from '../assets/images/logo.png';
import logo_bg from '../assets/images/logo_bg.png';

const Name = () => {
    const [sliderValue, setSliderValue] = useState(50);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleSliderChange = (event) => {
        setSliderValue(event.target.value);
    }

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleWindowResize);
        return () => { window.removeEventListener('resize', handleWindowResize); }
    }, []);

    return (
    <div className="relative w-full h-25vh mt-25vh flex items-center justify-center z-5">
        <style> {`
            .slider {
                -webkit-appearance: none;
                height: 1vh;
                background: white;
                outline: none;
                opacity: 0.7;
            }

            .slider::-webkit-slider-thumb {
                -webkit-appearance: none;
                appearance: none;
                width: 5vw;
                height: 15vh;
                background: url(${logo}) no-repeat center center;
                background-size: contain;
                cursor: pointer;
                position: relative;
            }

            .slider::-webkit-slider-thumb:hover {
                background: url(${logo_bg}) no-repeat center center;
                background-size: contain;
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
                width: `${window.innerWidth * 555.492 / 1600}px`,
                bottom: `${window.innerWidth * 104.29 / 1600}px`,
            }}
        />
        {/* Name and nickname */}
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
                Shuya Wang
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
                BidMusician
            </span>
        </div>
    </div>
    )
}

export default Name