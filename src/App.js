import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Background from "./components/Background";

function App() {
  return (
    <Router>
      <div>
        <Background />
        <Navbar />
        <Routes>
          <Route path="/" element={<AboutMe />} />
        </Routes>

        <AboutMe />
        <AboutMe />
        <AboutMe />
        <AboutMe />
        <AboutMe />
      </div>
    </Router>
  );
}

export default App;
