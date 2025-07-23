
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './pages/Home/Home';
import Launch from './pages/Launch/Launch';
import Stake from './pages/Stake/Stake';
import Trending from './pages/Trending/Trending';
import Promote from './pages/Promote/Promote';
import Locker from './pages/Locker/Locker';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="main">
          <Sidebar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/launch" element={<Launch />} />
              <Route path="/stake" element={<Stake />} />
              <Route path="/trending" element={<Trending />} />
              <Route path="/promote" element={<Promote />} />
              <Route path="/locker" element={<Locker />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
