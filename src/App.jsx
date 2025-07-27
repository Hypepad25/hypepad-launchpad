
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
  const [isOpen, setIsOpen] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");

  return (
    <Router>
      <nav className="navbar">
        <div className="navbar-top">
          <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>☰</button>
          <div className="wallet-connect">
            {walletAddress ? (
              <span className="wallet-address">{walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}</span>
            ) : (
              <button className="wallet-button" onClick={() => connectWallet(setWalletAddress)}>
                Connect Wallet
              </button>
            )}
          </div>
        </div>
        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/launch-meme" onClick={() => setIsOpen(false)}>Launch Meme</Link>
          <Link to="/create-token" onClick={() => setIsOpen(false)}>Create Token</Link>
          <Link to="/leaderboard" onClick={() => setIsOpen(false)}>Leaderboard</Link>
          <Link to="/dashboard-user" onClick={() => setIsOpen(false)}>User Dashboard</Link>
          <Link to="/dashboard-dev" onClick={() => setIsOpen(false)}>Dev Dashboard</Link>
          <Link to="/airdrop" onClick={() => setIsOpen(false)}>Airdrop Tool</Link>
          <Link to="/dao" onClick={() => setIsOpen(false)}>DAO Voting</Link>
          <Link to="/mint-nft" onClick={() => setIsOpen(false)}>NFT Mint</Link>
          <Link to="/cross-promo" onClick={() => setIsOpen(false)}>Cross Promo</Link>
        </div>
      </nav>
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
