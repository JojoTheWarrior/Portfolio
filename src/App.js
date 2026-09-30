import React, { useEffect, useRef } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Background from './components/Background';
import HomePage from './components/HomePage';
import Projects from './components/Projects';
import Project from './components/Project';
import AboutMe from './components/AboutMe';
import Library from './components/Library';
import { Contact, Footer, NotFound } from './components/Shared';

function Site() {
  const { pathname } = useLocation();
  const mainRef = useRef(null);
  const previousPath = useRef(pathname);
  useEffect(() => {
    window.scrollTo(0, 0);
    if (previousPath.current !== pathname) mainRef.current?.focus();
    previousPath.current = pathname;
  }, [pathname]);
  return <>
    <Background />
    <a className="skip-link" href="#main">Skip to content</a>
    <Navbar />
    <main id="main" ref={mainRef} tabIndex={-1} className="site-main">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/homepage" element={<Navigate to="/" replace />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<Project />} />
        <Route path="/library" element={<Library />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
    <Footer />
  </>;
}
export default function App() { return <BrowserRouter><Site /></BrowserRouter>; }
