
import React from 'react';

const Home = () => {
  return (
    <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', padding: '2rem', textAlign: 'center' }}>
      <div style={{ backgroundColor: '#222', padding: '1rem', color: 'lime', marginBottom: '2rem' }}>
        🚀 This version of HypePad was successfully updated and deployed!
      </div>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Welcome to HYPEPAD</h1>
      <h2 style={{ fontSize: '1.2rem', color: '#0ff' }}>
        Next-Gen Launchpad. Built for Founders. Powered by Community.
      </h2>
      <p style={{ marginTop: '2rem' }}>
        This is your launch dashboard. Use the navbar to explore features.
      </p>
    </div>
  );
};

export default Home;
