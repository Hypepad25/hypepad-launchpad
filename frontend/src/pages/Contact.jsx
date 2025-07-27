import React, { useState } from 'react';
const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:contact@hypepad.app?subject=Partner Inquiry from ${form.name}&body=${form.message}%0A%0AFrom: ${form.name} (${form.email})`;
  };
  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h2>Partner With HYPEPAD</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required /><br />
        <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required /><br />
        <textarea name="message" placeholder="Message" value={form.message} onChange={handleChange} required /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default Contact;
