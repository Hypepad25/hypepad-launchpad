
import React from 'react';

const Home = () => {
  const styles = {
    hero: {
      textAlign: 'center',
      padding: '4rem 2rem',
      backgroundColor: '#1C1C1E',
      color: '#F5F5F5',
      minHeight: '100vh',
    },
    bannerImg: {
      width: '100%',
      maxHeight: '500px',
      objectFit: 'cover',
      marginBottom: '2rem',
    },
    slogan: {
      fontSize: '1.75rem',
      fontWeight: 'bold',
      marginBottom: '1.5rem',
    },
    button: {
      background: 'linear-gradient(135deg, #FF6A00, #FF4500)',
      color: 'white',
      padding: '0.75rem 1.5rem',
      fontWeight: 'bold',
      borderRadius: '10px',
      border: 'none',
      cursor: 'pointer',
    }
  };

  return (
    <section style={styles.hero}>
      <img src={process.env.PUBLIC_URL + "/assets/hypepad-banner.jpg"} alt="HypePad Banner" style={styles.bannerImg} />
      <div style={styles.slogan}>Anti-Bot. Staking. Referrals. All-in-One Launchpad.</div>
      <button style={styles.button}>Launch Your Token</button>
    </section>
  );
};

export default Home;
