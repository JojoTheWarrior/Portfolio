import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Name from  './components/Name';
import AboutMe from './components/AboutMe';
import Background from "./components/Background";
import Carousel from './components/Carousel';
import Stats from './components/Stats';
import Projects from './components/Projects';

function App() {
  return (
    <Router>
      <div>
        <Background />
        <Routes>
          <Route path="/" element={
            <>
              <Navbar active="" />
              <Name />
              <AboutMe />
              <Stats />
            </>
            } />
            <Route path="/projects" element={
              <>
                <Navbar active="projects"/>
                <Projects />
              </>
            } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
