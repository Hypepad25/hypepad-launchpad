
import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">HYPEPAD</div>
      <div className="menu-toggle" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/explore">Explore</a></li>
        <li><a href="/create">Create</a></li>
        <li><a href="/dashboard">Dashboard</a></li>
        <li><a href="/staking">Staking</a></li>
        <li><a href="/locker">Locker</a></li>
        <li><a href="/referral">Referral</a></li>
        <li><a href="/claim">Claim</a></li>
        <li><a href="mailto:contact@hypepad.app">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
