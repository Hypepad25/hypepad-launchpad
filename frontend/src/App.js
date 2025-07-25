
import React from 'react';
import Navbar from './components/Navbar';
import banner from './assets/banner.png';

function App() {
  return (
    <>
      <Navbar />
      <div style={{ textAlign: 'center', marginTop: '4rem', backgroundColor: '#000', color: '#fff' }}>
        <img src={banner} alt="HypePad Banner" style={{ width: '90%', maxWidth: '600px', borderRadius: '12px' }} />
        <h1 style={{ color: '#FF6A00', marginTop: '2rem' }}>🚀 Fuel Your Launch. Rule the Hype.</h1>
        <p style={{ fontSize: '1.1rem', maxWidth: '700px', margin: '1rem auto' }}>
          🌐 Launch your project in minutes with multichain support, staking, meme coin builder, and more — all in one place.
        </p>
      </div>
    </>
  );
}

export default App;
