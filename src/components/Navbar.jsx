import React from 'react';
import { Link, NavLink } from 'react-router-dom';
export default function Navbar() {
  return <header className="site-header"><div className="nav-inner">
    <Link to="/" className="wordmark" aria-label="JojoTheWarrior home">jojo<span>.</span></Link>
    <nav aria-label="Main navigation"><NavLink to="/" end>home</NavLink><NavLink to="/projects">projects</NavLink><NavLink to="/library">library</NavLink><NavLink to="/about">about</NavLink></nav>
    <a className="nav-contact" href="mailto:j2975wan@uwaterloo.ca">say hi <span aria-hidden="true">↗</span></a>
  </div></header>;
}
