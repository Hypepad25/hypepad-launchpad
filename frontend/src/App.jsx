

const styles = {
  body: {
    fontFamily: 'sans-serif',
    backgroundColor: '#000',
    color: '#0f0',
    minHeight: '100vh',
    padding: '2rem',
    textAlign: 'center',
  },
  navbar: {
    marginBottom: '2rem',
  },
  navLinks: {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    flexWrap: 'wrap',
  }
};

import React from 'react';


const styles = {
  body: {
    backgroundColor: '#1C1C1E',
    color: '#F5F5F5',
    fontFamily: 'Inter, sans-serif',
    margin: 0,
    padding: 0,
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    borderBottom: '1px solid #FF6A00',
    backgroundColor: '#1C1C1E'
  },
  navLinks: {
    display: 'flex',
    gap: '1rem',
    fontWeight: 'bold',
  },
  hero: {
    textAlign: 'center',
    padding: '4rem 2rem',
    backgroundColor: '#1C1C1E'
  },
  bannerImg: {
    width: '100%',
    maxHeight: '500px',
    objectFit: 'cover',
    marginBottom: '2rem'
  },
  button: {
    background: 'linear-gradient(135deg, #FF6A00, #FF4500)',
    color: 'white',
    padding: '0.75rem 1.5rem',
    fontWeight: 'bold',
    borderRadius: '10px',
    border: 'none',
    marginTop: '1.5rem',
    cursor: 'pointer'
  },
  section: {
    textAlign: 'center',
    padding: '4rem 2rem',
    backgroundColor: '#121212',
    color: '#F5F5F5'
  },
  footer: {
    textAlign: 'center',
    padding: '2rem',
    backgroundColor: '#111',
    color: '#888',
    fontSize: '0.9rem'
  },
  cardGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '2rem',
    marginTop: '2rem'
  },
  card: {
    backgroundColor: '#1C1C1E',
    border: '1px solid rgba(255, 106, 0, 0.4)',
    borderRadius: '12px',
    padding: '2rem',
    color: '#F5F5F5'
  }
};

function App() {
  return (
    <div style={styles.body}>
      <header style={styles.navbar}>
        <div style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>HYPEPAD</div>
        <nav style={styles.navLinks}>
          <a href="#" style={{ color: '#F5F5F5' }}>Home</a>
          <a href="#" style={{ color: '#F5F5F5' }}>Create</a>
          <a href="#" style={{ color: '#F5F5F5' }}>Dashboard</a>
          <a href="#" style={{ color: '#F5F5F5' }}>Staking</a>
        </nav>
      </header>

      <section style={styles.hero}>
        <img src="/assets/hypepad-banner.jpg" alt="HypePad Banner" style={styles.bannerImg} />
        <h1 style={{ color: '#FF6A00' }}>Fuel Your Launch. Rule the Hype.</h1>
        <p>Launch your token, NFT, or presale with confidence using the most powerful multi-chain launchpad in crypto.</p>
        <div style={{ color: '#FF6A00', marginTop: '1rem' }}>Launching in: 03:12:59</div>
        <button style={styles.button}>Launch Your Project</button>
      </section>

      <section style={styles.section}>
        <h2 style={{ color: '#FF6A00' }}>Why Choose HYPEPAD?</h2>
        <p>Our next-gen platform offers advanced anti-bot protection, cross-chain compatibility, referral systems, staking rewards, and fully customizable launch experiences.</p>
        <div style={styles.cardGrid}>
          <div style={styles.card}>🛡️ Anti-Bot Protection</div>
          <div style={styles.card}>🌐 Multi-Chain Support</div>
          <div style={styles.card}>🚀 One-Click Launch</div>
          <div style={styles.card}>💰 Creator Royalties</div>
        </div>
      </section>

      <footer style={styles.footer}>
        © 2025 HYPEPAD. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
