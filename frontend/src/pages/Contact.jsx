import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:contact@hypepad.app?subject=Contact from ${form.name}&body=${form.message}%0A%0AFrom: ${form.name} (${form.email})`;
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto', color: '#fff' }}>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input name="name" type="text" value={form.name} onChange={handleChange} required style={{ width: '100%', marginBottom: '1rem' }} />
        <label>Email:</label>
        <input name="email" type="email" value={form.email} onChange={handleChange} required style={{ width: '100%', marginBottom: '1rem' }} />
        <label>Message:</label>
        <textarea name="message" value={form.message} onChange={handleChange} required style={{ width: '100%', height: '120px' }} />
        <br /><br />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
