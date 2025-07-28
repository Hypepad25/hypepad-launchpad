import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Create from './pages/Create';
import Dashboard from './pages/Dashboard';
import Staking from './pages/Staking';
import Leaderboard from './pages/Leaderboard';
import Support from './pages/Support';
import Whitepaper from './pages/Whitepaper';

const App = () => {
  return (
    <Router>
      <nav style={{ backgroundColor: '#1C1C1E', padding: '1rem' }}>
        <Link to="/" style={{ margin: '0 1rem', color: '#FF6A00' }}>Home</Link>
        <Link to="/create" style={{ margin: '0 1rem', color: '#FF6A00' }}>Create</Link>
        <Link to="/dashboard" style={{ margin: '0 1rem', color: '#FF6A00' }}>Dashboard</Link>
        <Link to="/staking" style={{ margin: '0 1rem', color: '#FF6A00' }}>Staking</Link>
        <Link to="/leaderboard" style={{ margin: '0 1rem', color: '#FF6A00' }}>Leaderboard</Link>
        <Link to="/support" style={{ margin: '0 1rem', color: '#FF6A00' }}>Support</Link>
        <Link to="/whitepaper" style={{ margin: '0 1rem', color: '#FF6A00' }}>Whitepaper</Link>
      </nav>
      <div style={{ padding: '2rem', color: '#FF6A00' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/staking" element={<Staking />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/support" element={<Support />} />
          <Route path="/whitepaper" element={<Whitepaper />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
