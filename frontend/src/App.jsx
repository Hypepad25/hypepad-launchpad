import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Staking from './pages/Staking'
import Dashboard from './pages/Dashboard'
import Create from './pages/Create'
import Promote from './pages/Promote'

export default function App() {
  return (
    <div style={{ backgroundColor: '#0d0d0d', color: '#fff', minHeight: '100vh' }}>
      <nav style={{ padding: '1rem', borderBottom: '1px solid #333' }}>
        <h1>🚀 HYPEPAD</h1>
        <Link to="/">Home</Link> | <Link to="/create">Create</Link> | <Link to="/dashboard">Dashboard</Link> | <Link to="/staking">Staking</Link> | <Link to="/promote">Promote</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/staking" element={<Staking />} />
        <Route path="/promote" element={<Promote />} />
      </Routes>
    </div>
  )
}
