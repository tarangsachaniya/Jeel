import React, { useState } from "react";
import axios from "axios";
const customerfrom = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    username: "",
    password: "",
    otp: "",
  });
  const [otpSent, setOtpSent] = useState(false);
  const [generatedOtp, setGeneratedOtp] = useState("");
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Generate OTP
//   const generateOtp = () => {
//     const otp = Math.floor(100000 + Math.random() * 900000).toString(); // Generate a 6-digit OTP
//     setGeneratedOtp(otp);
//     sendOtpToEmail(otp, formData.email); // Call the function to send the OTP via email
//   };
  const handleSubmit=()=>{
    e.preventDefault();
    
  }

  return <div></div>;
};

export default customerfrom;
