
import React from 'react';
import { Routes, Route } from 'react-router-dom';

function Home() {
  return (
    <div style={{ textAlign: 'center', marginTop: '4rem' }}>
      <h1>🔥 Welcome to HYPEPAD</h1>
      <p>Your all-in-one multi-chain launchpad.</p>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
