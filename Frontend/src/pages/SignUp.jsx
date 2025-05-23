import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [success, setSuccess] = useState(false); // Track signup success
  const [error, setError] = useState(""); // Track errors if any

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset messages
    setError("");
    setSuccess(false);

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const response = await axios.post(
        "https://backend-4hrs.onrender.com/api/auth/signup",
        formData
      );

      console.log("Signup success:", response.data);
      setSuccess(true);
      // Optionally reset form
      setFormData({
        fullName: "",
        userName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (err) {
      console.error("Signup error:", err.response?.data || err.message);
      setError("Signup failed. Please try again.");
    }
  };

  return (
    <div className="flex min-h-screen w-screen flex-col bg-purple-300">
      <Navbar />

      <main className="flex-grow flex items-center justify-center pt-24 pb-20">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">
            Hey👋 <br />
            Welcome to MyPortfolio
          </h1>
          <h2 className="text-xl font-semibold mb-5">Account Sign Up</h2>

          {/* Success Message */}
          {success ? (
            <div className="text-green-800 bg-green-200 p-4 rounded shadow-md">
              <p className="font-semibold text-lg">
                Account created successfully!
              </p>
              <button
                onClick={() => navigate("/login")}
                className="mt-4 py-2 px-5 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
              >
                Go to Login
              </button>
            </div>
          ) : (
            <form className="grid gap-4" onSubmit={handleSubmit}>
              <Input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
              />
              <Input
                type="text"
                name="userName"
                placeholder="User Name"
                value={formData.userName}
                onChange={handleChange}
              />
              <Input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
              <Input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
              <Input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />

              <button
                type="submit"
                className="py-2 px-5 w-80 bg-purple-400 border-2 border-black font-semibold shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:bg-purple-500"
              >
                Sign Up
              </button>

              {error && (
                <p className="text-red-600 mt-2 font-medium">{error}</p>
              )}
            </form>
          )}

          {/* Link to Login page */}
          {!success && (
            <div className="grid font-semibold mt-4">
              <p>
                If you already have an account then{" "}
                <Link to="/login" className="text-blue-500 font-bold underline">
                  Login!
                </Link>
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SignUp;
