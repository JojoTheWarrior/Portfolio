import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import logo_bg from '../assets/images/logo_bg.png';

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full bg-palette-purple z-50">
            {/* Logo */}
            <div className="flex items-center">
                <img src={logo} className="h-8"/>
            </div>

        </nav>
    )
}

export default Navbar;