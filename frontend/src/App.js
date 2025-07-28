
import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Create from './pages/Create';
import Dashboard from './pages/Dashboard';
import Staking from './pages/Staking';

const App = () => {
  return (
    <Router>
      <div>
        <nav style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1rem 2rem',
          borderBottom: '1px solid #FF6A00',
          backgroundColor: '#1C1C1E',
          flexWrap: 'wrap'
        }}>
          <h1 style={{ color: '#FF6A00' }}>🚀 HYPEPAD</h1>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/">Home</Link>
            <Link to="/create">Create</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/staking">Staking</Link>
          </div>
        </nav>
        <div style={{ padding: '2rem' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/staking" element={<Staking />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
