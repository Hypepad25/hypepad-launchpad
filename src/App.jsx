
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/hypepad-theme.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Staking from './pages/Staking';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/staking" element={<Staking />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
