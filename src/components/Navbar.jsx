import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-black text-white px-4 py-3 flex justify-between items-center">
      <div className="text-xl font-bold">🚀 HYPEPAD</div>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/submit-ad">Promote</Link>
      </div>
    </nav>
  );
}
