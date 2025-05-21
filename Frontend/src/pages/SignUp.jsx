import React from "react";
import { Link } from "react-router-dom"; // Import Link
import Input from "../components/Input";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const SignUp = () => {
  return (
    <div className="flex min-h-screen w-screen flex-col bg-purple-300">
      {/* Navbar */}
      <Navbar />

      {/* Content Area */}
      <main className="flex-grow flex items-center justify-center pt-24 pb-20">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">
            Hey👋 <br />
            Welcome MyPortfolio
          </h1>
          <h2 className="text-xl font-semibold mb-5">Account Sign Up</h2>

          <form className="grid gap-4">
            <Input type="text" placeholder="FullName" />
            <Input type="text" placeholder="UserName" />
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Password" />
            <Input type="password" placeholder="Confirm Password" />

            <button
              type="submit"
              className="py-2 px-5 w-80 bg-purple-400 border-2 border-black font-semibold shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:bg-purple-500"
            >
              Sign In
            </button>
          </form>

          {/* Link to Login page */}
          <div className="grid font-semibold mt-4">
            <p>
              If you already have an account then{" "}
              <Link to="/" className="text-blue-500 font-bold underline">
                Sign Up!
              </Link>
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default SignUp;
