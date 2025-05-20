import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Input from "../components/Input";

const Login = () => {
  const navigate = useNavigate(); 

  return (
    <div className="bg-green-300 min-h-screen w-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Centered Login Section */}
      <div className="flex-grow flex items-center justify-center pt-20 pb-16">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">
            Hey👋 <br />
            Welcome MyPortfolio
          </h1>
          <h2 className="text-xl font-semibold mb-5">Account Sign in</h2>
          <form className="grid gap-4">
            <Input type="text" placeholder="UserName" />
            <Input type="password" placeholder="Enter Password" />

            <button
              type="submit"
              className="py-2 px-5 w-80 border-2 font-semibold bg-green-400 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:bg-green-500"
            >
              Log In
            </button>
          </form>

          <div className="grid font-semibold mt-4">
            <a href="#">
              Forgot password?{" "}
              <span className="text-blue-500 font-bold">Click here!</span>
            </a>
            <button
              onClick={() => navigate("/signup")}
              className="text-blue-600 underline mt-2"
            >
              Create Account
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Login;
