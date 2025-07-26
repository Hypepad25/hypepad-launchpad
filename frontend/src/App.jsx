import React from 'react';

const styles = {
  body: {
    fontFamily: 'sans-serif',
    backgroundColor: '#1C1C1E',
    color: '#00ffcc',
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

export default function App() {
  return (
    <div style={styles.body}>
      <header style={styles.navbar}>
        <div style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>HYPEPAD</div>
        <nav style={styles.navLinks}>
          <a href="#" style={{ color: '#F5F5F5' }}>Home</a>
          <a href="#" style={{ color: '#F5F5F5' }}>Presales</a>
          <a href="#" style={{ color: '#F5F5F5' }}>Staking</a>
          <a href="mailto:contact@hypepad.app" style={{ color: '#F5F5F5' }}>Support</a>
        </nav>
      </header>
    </div>
  );
}
