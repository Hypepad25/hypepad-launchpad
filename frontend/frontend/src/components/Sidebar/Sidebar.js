
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <ul>
        <li><Link to="/">🏠 Home</Link></li>
        <li><Link to="/launch">🚀 Launch</Link></li>
        <li><Link to="/stake">📈 Stake</Link></li>
        <li><Link to="/trending">🔥 Trending</Link></li>
        <li><Link to="/promote">💰 Promote</Link></li>
        <li><Link to="/locker">🔐 Locker</Link></li>
      </ul>
    </aside>
  );
}

export default Sidebar;
