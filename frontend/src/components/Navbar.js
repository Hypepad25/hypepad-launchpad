import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav style={{ background: '#111', color: '#fff', padding: '10px' }}>
    <Link to='/' style={{ marginRight: 15, color: '#fff' }}>Home</Link>
    <Link to='/create' style={{ marginRight: 15, color: '#fff' }}>Create</Link>
    <Link to='/dashboard' style={{ marginRight: 15, color: '#fff' }}>Dashboard</Link>
    <Link to='/staking' style={{ marginRight: 15, color: '#fff' }}>Staking</Link>
    <Link to='/locker' style={{ marginRight: 15, color: '#fff' }}>Locker</Link>
    <Link to='/claim' style={{ marginRight: 15, color: '#fff' }}>Claim</Link>
    <Link to='/leaderboard' style={{ marginRight: 15, color: '#fff' }}>Leaderboard</Link>
    <Link to='/promoted' style={{ marginRight: 15, color: '#fff' }}>Promoted</Link>
    <Link to='/kyc' style={{ marginRight: 15, color: '#fff' }}>KYC</Link>
    <Link to='/referral' style={{ marginRight: 15, color: '#fff' }}>Referral</Link>
    <Link to='/settings' style={{ marginRight: 15, color: '#fff' }}>Settings</Link>
  </nav>
);

export default Navbar;
