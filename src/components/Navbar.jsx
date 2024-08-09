import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import logo_bg from '../assets/images/logo_bg.png';

const Navbar = ({active}) => {
    console.log("active", active);
    return (
        <nav className="fixed flex justify-between top-0 left-0 w-full backdrop-blur-2xl hover:backdrop-blur-3xl transition duration-250 z-80 p-1vh">
            {/* Logo */}
            <div className="flex w-full items-center content-center">
                <h1 className="text-4xl font-bold animate-colorChange">Joshua</h1>
                {/*<img src={logo} className="h-15vh"/>*/}
            </div>

            {/* Links */}
            <div className="text-palette-blue hover:text-palette-blue-25 w-full space-x-5vmin p-1vh flex items-center justify-center text-5vmin">
                <a className={`hover:text-palette-blue font-pixeloid font-bold`}>About Me</a>
                <p className="text-palette-blue">/</p>
                <a className="hover:text-palette-blue font-pixeloid font-bold">Projects</a>
                <p className="text-palette-blue">/</p>
                <a className="hover:text-palette-blue font-pixeloid font-bold">Contact</a>
            </div>
        </nav>
    )
}

export default Navbar;