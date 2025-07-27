import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav style={{ backgroundColor: '#000', padding: '1rem', color: '#fff' }}>
    <h2 style={{ display: 'inline', marginRight: '1rem' }}>🚀 HYPEPAD</h2>
    <Link to="/" style={{ marginRight: '1rem', color: '#fff' }}>Home</Link>
    <Link to="/create" style={{ marginRight: '1rem', color: '#fff' }}>Create</Link>
    <Link to="/dashboard" style={{ marginRight: '1rem', color: '#fff' }}>Dashboard</Link>
    <Link to="/staking" style={{ color: '#fff' }}>Staking</Link>
  </nav>
);

export default Navbar;

<Link to="/contact" style={{ marginLeft: "1rem", color: "#fff" }}>Contact</Link>
