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

const NavbarWithRoute = () => {
  const location = useLocation();
  return <Navbar currentRoute={location.pathname} />;
};

function App() {
  return (
    <Router>
      <div>
        <Background />
        <NavbarWithRoute />
        <Routes>
          <Route path="/" element={
            <>
              <Name />
              <AboutMe />
              <Stats />
            </>
            } />
            <Route path="/projects" element={
              <>
                <Projects />
              </>
            } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
