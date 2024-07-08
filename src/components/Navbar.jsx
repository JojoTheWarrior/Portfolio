import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import logo_bg from '../assets/images/logo_bg.png';

const Navbar = () => {
    return (
        <nav className="fixed flex justify-between top-0 left-0 w-full bg-palette-purple z-80 p-1">
            {/* Logo */}
            <div className="left-0 flex p-4 w-full items-center content-center">
                <img src={logo} className="h-20"/>
            </div>

            {/* Links */}
            <div className="bg-palette-pink w-full text-palette-blue space-x-4 p-4 flex items-center">
                <a className="">About Me</a>
                <p>/</p>
                <a>Projects</a>
                <p>/</p>
                <a>Contact</a>
            </div>
        </nav>
    )
}

export default Navbar;