import React from "react";
import { Link, useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* Footer */}
      <footer className="fixed bottom-0 left-0 w-full z-50 backdrop-blur-md bg-white/10 border-t border-white/20">
        <div className="flex justify-center space-x-6 py-3 text-sm text-black/65">
          <Link to="/privacy" className="hover:underline">
            Privacy
          </Link>
          <a href="#" className="hover:underline">
            Policy
          </a>
          <Link to="/feedback" className="hover:underline">
            Feedback
          </Link>
          <Link to="/contact" className="hover:underline">
            Contact
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;
