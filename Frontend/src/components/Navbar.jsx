import React from 'react'
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  return (
   <>
    {/* Navbar */}
  <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/10 border-b border-white/20">
    <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
      <div className="text-black text-lg font-bold py-1 bg-white px-3 border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
        MyPortfolio
      </div>
      <button onClick={()=> navigate("/help")} className="text-black underline font-semibold underline-offset-[2px] border-black py-1 px-2 transition duration-300">
        Help!
      </button>
    </div>
  </nav>
   </>
  )
}

export default Navbar