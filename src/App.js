
import React from 'react';
import './styles/hypepad-theme.css';

function App() {
  return (
    <div>
      <header className="navbar">
        <div className="logo">HYPEPAD</div>
        <nav>
          <a href="#" className="active">Home</a>
          <a href="#">Create</a>
          <a href="#">Dashboard</a>
          <a href="#">Staking</a>
        </nav>
      </header>

      <section className="hero">
        <h1>Fuel Your Launch. Rule the Hype.</h1>
        <p>Launch your token, NFT, or presale with confidence using the most powerful multi-chain launchpad in crypto.</p>
        <div className="launch-countdown">Launching in: 03:12:59</div>
        <button className="button-primary">Launch Your Project</button>
      </section>

      <section className="section">
        <h2>Why Choose HYPEPAD?</h2>
        <p>Our next-gen platform offers advanced anti-bot protection, cross-chain compatibility, referral systems, staking rewards, and fully customizable launch experiences.</p>
        <div className="card-grid">
          <div className="card">🛡️ Anti-Bot Protection</div>
          <div className="card">🌐 Multi-Chain Support</div>
          <div className="card">🚀 One-Click Launch</div>
          <div className="card">💰 Creator Royalties</div>
        </div>
      </section>

      <footer className="footer">
        © 2025 HYPEPAD. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
