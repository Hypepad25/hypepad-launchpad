
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/theme.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import MemeLaunch from './pages/MemeLaunch';
import TokenCreator from './pages/TokenCreator';
import Leaderboard from './pages/Leaderboard';
import DashboardUser from './pages/DashboardUser';
import DashboardDev from './pages/DashboardDev';
import AirdropTool from './pages/AirdropTool';
import DAOVoting from './pages/DAOVoting';
import NFTMint from './pages/NFTMint';
import CrossPromo from './pages/CrossPromo';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/launch-meme" element={<MemeLaunch />} />
        <Route path="/create-token" element={<TokenCreator />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/dashboard-user" element={<DashboardUser />} />
        <Route path="/dashboard-dev" element={<DashboardDev />} />
        <Route path="/airdrop" element={<AirdropTool />} />
        <Route path="/dao" element={<DAOVoting />} />
        <Route path="/mint-nft" element={<NFTMint />} />
        <Route path="/cross-promo" element={<CrossPromo />} />
      </Routes>
    </Router>
  );
}

export default App;
