
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="HypePad Logo" />
        </Link>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
        <div className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
          <Link to="/launch">Launch</Link>
          <Link to="/stake">Stake</Link>
          <Link to="/promote">Promote</Link>
          <Link to="/locker">Locker</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
