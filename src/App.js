import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          {
            /*
              <Route path="/" element={<Home />}>
            */
          }
        </Routes>
      </div>
    </Router>
  );
}

export default App;
