import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav style={{ padding: '10px', background: '#111', color: '#fff' }}>
    <Link to="/" style={{ marginRight: '15px', color: '#fff' }}>Home</Link>
    <Link to="/create" style={{ marginRight: '15px', color: '#fff' }}>Create Token</Link>
    <Link to="/dashboard" style={{ marginRight: '15px', color: '#fff' }}>Dashboard</Link>
    <Link to="/staking" style={{ marginRight: '15px', color: '#fff' }}>Staking</Link>
  </nav>
);

export default Navbar;