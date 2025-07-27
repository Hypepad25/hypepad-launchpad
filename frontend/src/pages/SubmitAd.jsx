
import React, { useState } from 'react';

export default function SubmitAd() {
  const [form, setForm] = useState({
    projectName: '',
    adImageUrl: '',
    destinationUrl: '',
    adType: 'Homepage Banner',
    duration: '4h',
    walletAddress: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ideally: Send to backend or blockchain contract
    alert('Ad submission received. Please send payment to activate.');
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Submit a Paid Ad</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input className="w-full p-2 border rounded" name="projectName" placeholder="Project Name" onChange={handleChange} required />
        <input className="w-full p-2 border rounded" name="adImageUrl" placeholder="Ad Image URL" onChange={handleChange} required />
        <input className="w-full p-2 border rounded" name="destinationUrl" placeholder="Destination URL" onChange={handleChange} required />
        <select className="w-full p-2 border rounded" name="adType" onChange={handleChange}>
          <option>Homepage Banner</option>
          <option>Trending Featured</option>
          <option>Token Page Sidebar</option>
        </select>
        <select className="w-full p-2 border rounded" name="duration" onChange={handleChange}>
          <option value="4h">4 Hours</option>
          <option value="8h">8 Hours</option>
          <option value="12h">12 Hours</option>
          <option value="24h">24 Hours</option>
        </select>
        <input className="w-full p-2 border rounded" name="walletAddress" placeholder="Your Wallet Address" onChange={handleChange} required />
        <button className="bg-black text-white px-4 py-2 rounded" type="submit">Submit Ad</button>
      </form>
    </div>
  );
}
