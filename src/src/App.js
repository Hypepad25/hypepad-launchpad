
import React, { useState } from 'react';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#1C1C1E',
    borderBottom: '1px solid #FF6A00',
    flexWrap: 'wrap',
  };

  const navLinks = {
    display: menuOpen ? 'block' : 'none',
    width: '100%',
    textAlign: 'left',
    paddingTop: '1rem',
  };

  return (
    <div style={{ backgroundColor: '#1C1C1E', color: '#F5F5F5', fontFamily: 'Inter, sans-serif' }}>
      <header style={navStyles}>
        <img src="/assets/hypepad-rocket-icon.png" alt="HypePad Logo" style={{ height: '40px' }} />
        <button
          onClick={toggleMenu}
          style={{
            background: 'none',
            border: 'none',
            color: '#F5F5F5',
            fontSize: '1.5rem',
            cursor: 'pointer',
            display: 'inline-block',
          }}
        >
          ☰
        </button>
        <nav style={Object.assign({}, navLinks, {
          display: menuOpen ? 'flex' : 'none',
          flexDirection: 'column',
          gap: '1rem'
        })}>
          <a href="#" style={{ color: '#F5F5F5', textDecoration: 'none' }}>Home</a>
          <a href="#" style={{ color: '#F5F5F5', textDecoration: 'none' }}>Create</a>
          <a href="#" style={{ color: '#F5F5F5', textDecoration: 'none' }}>Dashboard</a>
          <a href="#" style={{ color: '#F5F5F5', textDecoration: 'none' }}>Staking</a>
        </nav>
      </header>

      <section style={{ textAlign: 'center', padding: '3rem 2rem' }}>
        <img
          src="/assets/hypepad-banner.jpg"
          alt="HypePad Banner"
          style={{ width: '100%', maxHeight: '500px', objectFit: 'cover', marginBottom: '2rem' }}
        />
        <h1 style={{ color: '#FF6A00' }}>Anti-bot. Staking. Referrals. All-in-One Launchpad.</h1>
        <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
          Multi-chain launchpad with built-in anti-bot protection, staking rewards, referral incentives, and liquidity locking.
        </p>
        <button style={{
          background: 'linear-gradient(135deg, #FF6A00, #FF4500)',
          color: 'white',
          padding: '0.75rem 1.5rem',
          fontWeight: 'bold',
          borderRadius: '10px',
          border: 'none',
          marginTop: '2rem',
          cursor: 'pointer'
        }}>
          Launch Your Project
        </button>
      </section>
    </div>
  );
}

export default App;
