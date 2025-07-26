
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/launch-meme">Launch Meme</Link>
      <Link to="/create-token">Create Token</Link>
      <Link to="/leaderboard">Leaderboard</Link>
      <Link to="/dashboard-user">User Dashboard</Link>
      <Link to="/dashboard-dev">Dev Dashboard</Link>
      <Link to="/dao">DAO Voting</Link>
      <Link to="/mint-nft">NFT Mint</Link>
      <Link to="/airdrop">Airdrop Tool</Link>
      <Link to="/cross-promo">Cross-Promo</Link>
    </nav>
  );
}

export default Navbar;
