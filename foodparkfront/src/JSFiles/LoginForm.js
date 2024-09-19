// components/LoginForm.js
import React from "react";
import { FaLock, FaEnvelope } from "react-icons/fa";

const LoginForm = () => {
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <form className="ml-2" onSubmit={handleLoginSubmit}>
      <h1 className="text-center text-3xl mb-8">LOGIN</h1>

      {/* Email Field */}
      <div className="relative mb-8">
        <input
          type="email"
          className="h-12 w-full bg-transparent border-2 border-gray-200 rounded-full px-10 py-2 text-lg placeholder-black"
          placeholder="Email"
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
          required
        />
        <FaLock className="absolute top-1/2 left-3 transform -translate-y-1/2 text-black text-xl" />
      </div>

      {/* Remember Me and Forget Password */}
      <div className="flex justify-between text-sm mb-4">
        <label className="flex items-center">
          <input type="checkbox" className="mr-2 accent-gray-500" />
          Remember Me
        </label>
        <a href="#" className="underline">
          Forget password?
        </a>
      </div>

      {/* Submit Button */}
      <button className="w-full bg-black h-12 rounded-full shadow-md font-bold text-white text-lg mb-4">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
