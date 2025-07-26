
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Staking from './pages/Staking';
import Locker from './pages/Locker';
import Referral from './pages/Referral';
import Claim from './pages/Claim';
import Create from './pages/Create';
import Dashboard from './pages/Dashboard';
import HypeStream from './components/HypeStream';
import ChatBox from './components/ChatBox';
import HypeVote from './components/HypeVote';
import CommentSection from './components/CommentSection';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/staking" element={<Staking />} />
        <Route path="/locker" element={<Locker />} />
        <Route path="/referral" element={<Referral />} />
        <Route path="/claim" element={<Claim />} />
        <Route path="/create" element={<Create />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/stream" element={<HypeStream />} />
        <Route path="/chat" element={<ChatBox />} />
        <Route path="/vote" element={<HypeVote />} />
        <Route path="/comments" element={<CommentSection />} />
      </Routes>
    </Router>
  );
}

export default App;
