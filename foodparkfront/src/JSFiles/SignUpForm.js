// components/SignUpForm.js
import React from "react";
import { FaUser, FaLock, FaEnvelope, FaKey } from "react-icons/fa";

const SignUpForm = () => {
  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    // Handle sign-up logic here
  };

  return (
    <form className="ml-2" onSubmit={handleSignUpSubmit}>
      <h1 className="text-center text-3xl mb-8">SIGN UP</h1>

      {/* Name Field */}
      <div className="relative mb-8">
        <input
          type="text"
          className="h-12 w-full bg-transparent border-2 border-gray-200 rounded-full px-10 py-2 text-lg placeholder-black"
          placeholder="Name"
          required
        />
        <FaUser className="absolute top-1/2 left-3 transform -translate-y-1/2 text-black text-xl" />
      </div>

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
          placeholder="Create Password"
          required
        />
        <FaLock className="absolute top-1/2 left-3 transform -translate-y-1/2 text-black text-xl" />
      </div>

      {/* OTP Field */}
      <div className="relative mb-8">
        <input
          type="text"
          className="h-12 w-full bg-transparent border-2 border-gray-200 rounded-full px-10 py-2 text-lg placeholder-black"
          placeholder="OTP"
          required
        />
        <FaKey className="absolute top-1/2 left-3 transform -translate-y-1/2 text-black text-xl" />
      </div>

      {/* Submit Button */}
      <button className="w-full bg-black h-12 rounded-full shadow-md font-bold text-white text-lg mb-4">
        Sign Up
      </button>
    </form>
  );
};

export default SignUpForm;
