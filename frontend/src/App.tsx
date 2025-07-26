
import React from 'react';

export default function App() {
  return (
    <div style={{
      fontFamily: 'sans-serif',
      backgroundColor: '#000',
      color: '#0f0',
      minHeight: '100vh',
      padding: '2rem',
      textAlign: 'center'
    }}>
      <h1>HypePad</h1>
      <p>Next-Gen Launchpad. Built for Founders. Powered by Community.</p>
      <nav style={{ marginTop: '2rem' }}>
        <a href="#" style={{ color: '#0ff', margin: '0 1rem' }}>Live Tokens</a>
        <a href="#" style={{ color: '#0ff', margin: '0 1rem' }}>Presales</a>
        <a href="mailto:contact@hypepad.app" style={{ color: '#0ff', margin: '0 1rem' }}>Support</a>
      </nav>
    </div>
  );
}
