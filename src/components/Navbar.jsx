import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import logo_bg from '../assets/images/logo_bg.png';
import GlitchText from '@johnn-e/react-glitch-text';

const Navbar = ({active}) => {
    console.log("active", active);
    return (
        <>
        <style>{`
            .cornerLight1, .cornerLight2 {
                position: relative; /* Ensures the pseudo-cornerLights are positioned relative to the cornerLight */
            }

            .cornerLight2::before,
            .cornerLight2::after,
            .cornerLight1::before,
            .cornerLight1::after {
                content: '';
                position: absolute;
                background-color: white;
                transition: all 0.3s ease-in-out;
            }

            /* Top border */
            .cornerLight2:hover::before {
                top: 0;
                right: 0;
                height: 2px; /* Thickness of the border */
                width: 20px; /* Length of the top border */
            }

            /* Right border */
            .cornerLight2:hover::after {
                top: 0;
                right: 0;
                width: 2px; /* Thickness of the border */
                height: 20px; /* Length of the right border */
            }

            /* Bottom border */
            .cornerLight1:hover::before {
                bottom: 0;
                left: 0;
                height: 2px; /* Thickness of the border */
                width: 20px; /* Length of the top border */
            }

            /* Left border */
            .cornerLight1:hover::after {
                bottom: 0;
                left: 0;
                width: 2px; /* Thickness of the border */
                height: 20px; /* Length of the right border */
            }
            `}
        </style>
        <nav className="fixed flex justify-between top-0 left-0 w-full backdrop-blur-2xl hover:backdrop-blur-3xl transition duration-250 z-80 p-1vh">
            {/* Logo */}
            <div className="flex w-full items-center content-center">
                <Link to="/">
                    <div className="cornerLight1">
                    <div className="cornerLight2 px-4 py-2 transition duration-250">
                        <GlitchText $text='Joshua' className="font-black text-4xl" style={{ color: '#000' }} />
                    </div>
                    </div>
                </Link>
                {/*<img src={logo} className="h-15vh"/>*/}
            </div>

            {/* Links */}
            <div className="text-palette-blue hover:text-palette-blue-25 transition-all duration-300 ease-in-out w-full space-x-5vmin p-1vh flex items-center justify-center text-5vmin">
                <Link to="/">
                    <a className={`${active=="" ? "text-palette-blue" : ""} hover:text-palette-blue font-pixeloid font-bold`}>About Me</a>
                </Link>
                <p className="text-palette-blue">/</p>
                <Link to={"/projects"}>
                    <a className={` ${active=="projects" ? "text-palette-blue" : ""}
                                hover:text-palette-blue font-pixeloid font-bold`}>Projects</a>
                </Link>
                <p className="text-palette-blue">/</p>
                <Link to={"/contact"}>
                    <a className={` ${active=="contact" ? "text-palette-blue" : ""}
                                hover:text-palette-blue font-pixeloid font-bold`}>Contact</a>
                </Link>
            </div>
        </nav>
        </>
    )
}

export default Navbar;