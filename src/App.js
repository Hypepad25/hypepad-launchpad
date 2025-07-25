
import React from 'react';
import Navbar from './components/Navbar';

function Home() {
  return (
    <div style={{ textAlign: 'center', marginTop: '4rem' }}>
      <h1>🚀 Fuel Your Launch. Rule the Hype.</h1>
      <p>Multi-chain launchpad + meme token creator.</p>
    </div>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <Home />
    </>
  );
}

export default App;
