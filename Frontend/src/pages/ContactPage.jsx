import React from "react";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const ContactPage = () => {
  return (
    <div className="bg-red-300 min-h-screen w-screen flex flex-col">
      {/* Navbar */}
      <Navbar />
      {/* Contact Section */}
      <div className="section-contact-container p-20 w-[700px] mx-auto">
        <h1 className="text-3xl font-bold mb-6 mt-6 text-center">Contact Me</h1>
        <div className="bg-white p-8 border-2 shadow-[5px_5px_0_0_rgba(0,0,0,1)] mb-10">
          <form id="contactForm" className="flex flex-col space-y-4">
            <label className="text-lg font-semibold" htmlFor="contactName">
              Your Name
            </label>
            <input
              type="text"
              id="contactName"
              name="name"
              className="border border-black px-4 py-2 focus:outline-none"
              placeholder="Enter your name"
              required
            />

            <label className="text-lg font-semibold" htmlFor="contactEmail">
              Email Address
            </label>
            <input
              type="email"
              id="contactEmail"
              name="email"
              className="border border-black px-4 py-2 focus:outline-none"
              placeholder="Enter your email"
              required
            />

            <label className="text-lg font-semibold" htmlFor="contactMessage">
              Your Message
            </label>
            <textarea
              id="contactMessage"
              name="message"
              rows="5"
              className="border border-black px-4 py-2 focus:outline-none"
              placeholder="Write your message here..."
              required
            ></textarea>

            <button
              type="submit"
              className="py-2 px-5 border-2 font-semibold bg-red-400 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:bg-red-500 focus:outline-none"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ContactPage;
