import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Name from  './components/Name';
import AboutMe from './components/AboutMe';
import Background from "./components/Background";
import Carousel from './components/Carousel';

function App() {
  return (
    <Router>
      <div>
        <Background />
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Name />
              <AboutMe />
              <Carousel />
            </>
            } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
