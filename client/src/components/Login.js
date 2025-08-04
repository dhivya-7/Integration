import React, { useState } from 'react';
import axios from 'axios';


const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', form);
      setMessage(res.data.message);
    } catch (err) {
      setMessage(err.response?.data?.error || 'Login failed');
    }
  };

  return (
    <div className="card p-4 shadow-sm">
      <h4>Login</h4>
      <form onSubmit={handleSubmit}>
        <input className="form-control mb-2" name="email" placeholder="Email" onChange={handleChange} />
        <input className="form-control mb-3" type="password" name="password" placeholder="Password" onChange={handleChange} />
        <button className="btn btn-success w-100">Login</button>
        {message && <p className="mt-2 text-success">{message}</p>}
      </form>
    </div>
  );
};

export default Login;
