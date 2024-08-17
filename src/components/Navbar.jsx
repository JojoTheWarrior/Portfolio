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
            .cornerLight2::after {
                content: '';
                position: absolute;
                background-color: white;
                width: 0;
                height: 0;
                top: 0;
                right: 0;
                transition: all 0.3s ease-in-out;
            }
            .cornerLight1::before,
            .cornerLight1::after {
                content: '';
                position: absolute;
                background-color: white;
                width: 0;
                height: 0;
                bottom: 0;
                left: 0;
                transition: all 0.3s ease-in-out;
            }

            /* Top border */
            .cornerLight2:hover::before {
                height: 2px; /* Thickness of the border */
                width: 20px; /* Length of the top border */
            }

            /* Right border */
            .cornerLight2:hover::after {
                width: 2px; /* Thickness of the border */
                height: 20px; /* Length of the right border */
            }

            /* Bottom border */
            .cornerLight1:hover::before {
                height: 2px; /* Thickness of the border */
                width: 20px; /* Length of the top border */
            }

            /* Left border */
            .cornerLight1:hover::after {
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
                    <div className="cornerLight2 px-4 py-2">
                        <GlitchText $text='Joshua' className="font-black text-4xl" style={{ color: '#000' }} />
                    </div>
                    </div>
                </Link>
                {/*<img src={logo} className="h-15vh"/>*/}
            </div>

            {/* Links */}
            <div className="text-mcpt-magenta whitespace-nowrap hover:text-mcpt-magenta-25 transition-all duration-300 ease-in-out w-full space-x-5vmin flex items-center justify-center text-5vmin">
                <Link to="/">
                    <div className="cornerLight1">
                    <div className="cornerLight2 px-4">
                    <a className={`${active=="" ? "text-mcpt-magenta" : "text-mcpt-sangria"} hover:text-mcpt-magenta font-undertale font-bold`}>About Me</a>
                    </div>
                    </div>
                </Link>
                <p className="text-mcpt-sangria">/</p>
                <Link to={"/projects"}>
                    <div className="cornerLight1">
                    <div className="cornerLight2 px-4">
                    <a className={` ${active=="projects" ? "text-mcpt-magenta" : "text-mcpt-sangria"}
                                hover:text-mcpt-magenta font-undertale font-bold`}>Projects</a>
                    </div>
                    </div>
                </Link>
                <p className="text-mcpt-sangria">/</p>
                <Link to={"/contact"}>
                    <div className="cornerLight1">
                    <div className="cornerLight2 px-4">
                    <a className={` ${active=="contact" ? "text-mcpt-magenta" : "text-mcpt-sangria"}
                                hover:text-mcpt-magenta font-undertale font-bold`}>Contact</a>
                    </div>
                    </div>
                </Link>
            </div>
        </nav>
        </>
    )
}

export default Navbar;