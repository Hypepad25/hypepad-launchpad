
import React from 'react';

const App = () => {
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
      backgroundColor: '#1C1C1E'
    }
  };

  return (
    <div style={styles.body}>
      <nav style={styles.navbar}>
        <h1>HYPEPAD</h1>
        <div style={styles.navLinks}>
          <a href="#">Home</a>
          <a href="#">Create</a>
          <a href="#">Dashboard</a>
          <a href="#">Staking</a>
        </div>
      </nav>

      <section style={styles.hero}>
        <img src="/assets/hypepad-banner.jpg" alt="HypePad Banner" style={styles.bannerImg} />
        <h2>Anti-Bot. Staking. Referrals. All-in-One Launchpad.</h2>
        <button style={styles.button}>Launch Your Token</button>
      </section>
    </div>
  );
};

export default App;
