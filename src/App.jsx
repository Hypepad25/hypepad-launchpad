import React from 'react';
import '../styles/hypepad-theme.css';
import banner from '../assets/hypepad-banner.jpg';

export default function App() {
  return (
    <div className="body" style={{ backgroundImage: `url(${banner})` }}>
      <header className="navbar">
        <div className="logo-title">HYPEPAD</div>
        <nav className="nav-links">
          <a href="#">Home</a>
          <a href="#">Presales</a>
          <a href="#">Staking</a>
          <a href="mailto:contact@hypepad.app">Support</a>
        </nav>
      </header>
    </div>
  );
}
