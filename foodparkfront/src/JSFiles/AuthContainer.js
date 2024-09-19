// components/AuthContainer.js
import React, { useState, useEffect } from "react";
import "../index.css";
import c1 from "../imgs/c1.jpeg";
import c2 from "../imgs/c2.jpeg";
import c3 from "../imgs/c3.jpeg";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import axios from 'axios';

const AuthContainer = () => {
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
            {isSignUp ? <SignUpForm /> : <LoginForm />}

            {/* Toggle Link */}
            <div className="text-center text-sm text-black mb-4">
              {isSignUp ? (
                <p>
                  Already have an account?{" "}
                  <a
                    href="#"
                    onClick={toggleForm}
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
                    onClick={toggleForm}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthContainer;
