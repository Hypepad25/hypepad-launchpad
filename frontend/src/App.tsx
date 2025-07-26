import React from 'react';

export default function App() {
  return (
    <div style={{
      fontFamily: 'Orbitron, sans-serif',
      backgroundColor: '#0d0d0d',
      color: '#00ff99',
      minHeight: '100vh',
      padding: '2rem',
      textAlign: 'center',
    }}>
      <header style={{
        fontSize: '2rem',
        fontWeight: 'bold',
        color: '#0ff',
        marginBottom: '1.5rem',
      }}>
        🚀 HYPEPAD
      </header>

      <p style={{
        fontSize: '1.2rem',
        color: '#aaa',
        maxWidth: '600px',
        margin: '0 auto 2rem auto',
      }}>
        The All-In-One Multi-Chain Launchpad for Meme Coins, Presales, Staking & More.
      </p>

      <nav style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '2rem',
        flexWrap: 'wrap',
      }}>
        <a href="#" style={navLinkStyle}>Live Tokens</a>
        <a href="#" style={navLinkStyle}>Presales</a>
        <a href="#" style={navLinkStyle}>Staking</a>
        <a href="mailto:contact@hypepad.app" style={navLinkStyle}>Support</a>
      </nav>
    </div>
  );
}

const navLinkStyle: React.CSSProperties = {
  color: '#0ff',
  fontSize: '1rem',
  textDecoration: 'none',
  transition: 'color 0.3s',
};
