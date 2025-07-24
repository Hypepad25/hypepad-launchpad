import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav style={{ background: '#111', color: '#fff', padding: '10px' }}>
    <Link to='/' style={{ marginRight: 15, color: '#fff' }}>Home</Link>
    <Link to='/create' style={{ marginRight: 15, color: '#fff' }}>Create</Link>
    <Link to='/dashboard' style={{ marginRight: 15, color: '#fff' }}>Dashboard</Link>
    <Link to='/staking' style={{ marginRight: 15, color: '#fff' }}>Staking</Link>
  </nav>
);

export default Navbar;