import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Input from "../components/Input";

const ResetPassword = () => {
  return (
    <div className="bg-orange-300 min-h-screen w-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Centered Reset Password Section */}
      <div className="flex-grow flex items-center justify-center pt-20 pb-16">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">
            Hey👋 <br />
            Welcome MyPortfolio
          </h1>
          <h2 className="text-xl font-semibold mb-5">Reset Your Password</h2>

          <form className="grid gap-4">
            <Input type="text" placeholder="UserName" />

            <Input type="password" placeholder="New Password" />
            <Input type="password" placeholder="Confirm Password" />

            <button
              type="submit"
              className="py-2 px-5 w-80 border-2 font-semibold bg-orange-400 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:bg-orange-500"
            >
              Confirm
            </button>
          </form>

          <div className="grid font-semibold mt-4 space-y-1">
            
            <Link to='/signup' className=" mt-3 hover:text-blue-600">Create Account</Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 w-full z-50 backdrop-blur-md bg-white/10 border-t border-white/20">
        <div className="flex justify-center space-x-6 py-3 text-sm text-black/65">
          <a href="#" className="hover:underline">
            Privacy
          </a>
          <a href="#" className="hover:underline">
            Policy
          </a>
          <a href="#" className="hover:underline capitalize">
            Feedback
          </a>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </div>
      </footer>
    </div>
  );
};

export default ResetPassword;
