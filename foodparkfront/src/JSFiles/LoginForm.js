// components/LoginForm.js
import React, { useState } from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import axios from 'axios';
import { toast } from 'react-toastify';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get("http://127.0.0.1:8000/customer/Customer/");
      const users = response.data;

      // Check if the user exists with matching email and password
      const user = users.find(u => u.email === email && u.password === password); // Assuming the password is stored in plain text for now

      if (user) {
        // Store the user in localStorage
        localStorage.setItem('user', JSON.stringify(user));
        setError(null);
        toast.success('Login successful!');
        // Redirect or update the UI as needed
        window.location.href = '/'; // Redirect to home or another page
      } else {
        toast.error('Invalid email or password');
      }
    } catch (err) {
      setError('An error occurred during login');
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h1 className="text-center text-3xl mb-8">LOGIN</h1>

      {/* Email Field */}
      <div className="relative mb-8">
        <input
          type="email"
          className="h-12 w-full bg-transparent border-2 border-gray-200 rounded-full px-10 py-2 text-lg placeholder-black"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <FaEnvelope className="absolute top-1/2 left-3 transform -translate-y-1/2 text-black text-xl" />
      </div>

      {/* Password Field */}
      <div className="relative mb-8">
        <input
          type="password"
          className="h-12 w-full bg-transparent border-2 border-gray-200 rounded-full px-10 py-2 text-lg placeholder-black"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <FaLock className="absolute top-1/2 left-3 transform -translate-y-1/2 text-black text-xl" />
      </div>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <button className="w-full bg-black h-12 rounded-full shadow-md font-bold text-white text-lg mb-4">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
