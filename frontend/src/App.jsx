import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';

const App = () => (
  <Router>
    <nav>
      <div className="logo">🚀 HYPEPAD</div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/contact">Promote</Link>
      </div>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Router>
);
export default App;
