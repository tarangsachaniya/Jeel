import React, { useState, useEffect } from "react";
import { FaUser, FaLock, FaEnvelope, FaKey } from "react-icons/fa";
import "../index.css";
import c1 from "../imgs/c1.jpeg";
import c2 from "../imgs/c2.jpeg";
import c3 from "../imgs/c3.jpeg";
import axios from 'axios';

const Login = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSignUp, setIsSignUp] = useState(false); // Toggle between Sign In and Sign Up
  const slides = [c1, c2, c3];
  const [user, setUser] = useState([]);
  
  useEffect(() => {
    async function getAllUser() {
      try {
        const user = await axios.get("http://127.0.0.1:8000/customer/Customer/");
        console.log(user.data);
        setUser(user.data);
      } catch (err) {
        console.log(err);
      }
    }
    getAllUser();
  }, []);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // 3 seconds interval

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () =>
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  const prevSlide = () =>
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );

  // Toggle between Sign Up and Login
  const toggleForm = () => setIsSignUp((prev) => !prev);

  return (
    <div className="main-div flex justify-center items-center min-h-screen">
      <div className="relative w-full max-w-5xl">
        {/* Carousel Wrapper */}
        <div className="relative overflow-hidden rounded-lg h-[500px] md:h-[600px]">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute w-full h-full transition-opacity duration-700 ease-in-out ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={slide}
                className="w-full h-full object-cover"
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </div>

        {/* Dots indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-white" : "bg-white/50"
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>

        {/* Form Overlay */}
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="bg-white bg-opacity-20 w-96 p-8 rounded-lg shadow-lg">
            <form className="ml-2">
              <h1 className="text-center text-3xl mb-8">
                {isSignUp ? "SIGN UP" : "LOGIN"}
              </h1>

              {isSignUp && (
                <>
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
                </>
              )}

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
                  placeholder={isSignUp ? "Create Password" : "Password"}
                  required
                />
                <FaLock className="absolute top-1/2 left-3 transform -translate-y-1/2 text-black text-xl" />
              </div>

              {isSignUp && (
                <>
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
                </>
              )}

              {!isSignUp && (
                <div className="flex justify-between text-sm mb-4">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2 accent-gray-500" />
                    Remember Me
                  </label>
                  <a href="#" className="underline">
                    Forget password?
                  </a>
                </div>
              )}

              <button className="w-full bg-black h-12 rounded-full shadow-md font-bold text-white text-lg mb-4">
                {isSignUp ? "Sign Up" : "Login"}
              </button>

              <div className="text-center text-sm text-black mb-4">
                {isSignUp ? (
                  <p>
                    Already have an account?{" "}
                    <a
                      href="#"
                      onClick={toggleForm} // Toggle form
                      className="underline font-bold"
                    >
                      Login
                    </a>
                  </p>
                ) : (
                  <p>
                    Don't have an account?{" "}
                    <a
                      href="#"
                      onClick={toggleForm} // Toggle form
                      className="underline font-bold"
                    >
                      Sign Up
                    </a>
                  </p>
                )}
              </div>

              {/* Skip for now link */}
              <div className="text-center text-sm">
                <a href="/" className="underline font-bold">
                  Skip for now
                </a>
                {user.map((item, i) => (
                  <p key={i}>{item.c_fname}</p>
                ))}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
