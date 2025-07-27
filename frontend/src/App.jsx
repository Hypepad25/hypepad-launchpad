
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { connectWallet } from './utils/wallet';
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
import './styles/theme.css';
import './App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");

  const handleConnectWallet = async () => {
    await connectWallet(setWalletAddress);
  };

  return (
    <Router>
      <div className="navbar">
        <div className="navbar-header">
          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
          <button className="wallet-button" onClick={handleConnectWallet}>
            {walletAddress ? `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}` : 'Connect Wallet'}
          </button>
        </div>
        <div className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/launch-meme" onClick={() => setMenuOpen(false)}>Launch Meme</Link>
          <Link to="/create-token" onClick={() => setMenuOpen(false)}>Create Token</Link>
          <Link to="/leaderboard" onClick={() => setMenuOpen(false)}>Leaderboard</Link>
          <Link to="/dashboard-user" onClick={() => setMenuOpen(false)}>User Dashboard</Link>
          <Link to="/dashboard-dev" onClick={() => setMenuOpen(false)}>Dev Dashboard</Link>
          <Link to="/airdrop" onClick={() => setMenuOpen(false)}>Airdrop Tool</Link>
          <Link to="/dao" onClick={() => setMenuOpen(false)}>DAO Voting</Link>
          <Link to="/mint-nft" onClick={() => setMenuOpen(false)}>NFT Mint</Link>
          <Link to="/cross-promo" onClick={() => setMenuOpen(false)}>Cross Promo</Link>
        </div>
      </div>
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
