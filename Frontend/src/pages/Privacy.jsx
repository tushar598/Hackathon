import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Privacy = () => {
  return (
    <div className="bg-purple-300 min-h-screen w-screen flex flex-col">
      {/* Navbar */}
     <Navbar />

      <div className="p-20 pt-[80px]">
        <h1 className="text-3xl">Polices</h1>
        <div className="w-full h-[700px] p-10 bg-white mt-10 border-2 shadow-[5px_5px_0_0_rgba(0,0,0,1)] overflow-y-scroll">
          <div className="section-privacy-container">
            <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
            <h3>
              Effective Date: <span className="font-light">25/09/2026</span>
            </h3>
            <h3>
              Last Updated: <span className="font-light">18/05/2025</span>
            </h3>

            <p className="text-[14px] mt-3 font-extralight">
              Thank you for choosing to be part of our community at{" "}
              <b>[Your Portfolio Website Name]</b> (“we”, “our”, or “us”). Your
              privacy is important to us. This Privacy Policy explains how we
              collect, use, and protect your information when you use our
              website and services.
            </p>

            <h2 className="mt-5 font-semibold">1. Information We Collect</h2>
            <p className="text-[14px] font-extralight">
              We collect the following personal information that you
              voluntarily provide to us through the portfolio form or user input
              fields:
            </p>
            <ul className="list-disc list-inside text-[14px] font-extralight">
              <li>Full Name</li>
              <li>Profile Heading</li>
              <li>About/Personal Bio</li>
              <li>Work Experience</li>
              <li>Project Details</li>
              <li>Achievements</li>
              <li>Education Background</li>
              <li>Social Media Links (e.g., LinkedIn, GitHub, Twitter)</li>
            </ul>

            <h2 className="mt-5 font-semibold">2. How We Use Your Information</h2>
            <p className="text-[14px] font-extralight">
              The information you provide is used solely for the purpose of:
            </p>
            <ul className="list-disc list-inside text-[14px] font-extralight">
              <li>Creating a personalized portfolio webpage</li>
              <li>Displaying your professional profile publicly (with your consent)</li>
              <li>Enhancing user experience by dynamically generating content</li>
              <li>Contacting you (if applicable or requested by you)</li>
            </ul>
            <p className="text-[14px] font-extralight mt-2">
              We <b>do not sell, rent, or trade</b> your personal information to
              any third party.
            </p>

            <h2 className="mt-5 font-semibold">3. Data Storage & Security</h2>
            <p className="text-[14px] font-extralight">
              We implement standard security measures to protect your personal
              information. However, no method of transmission over the Internet
              or method of electronic storage is 100% secure. While we strive
              to use commercially acceptable means to protect your data, we
              cannot guarantee its absolute security.
            </p>

            <h2 className="mt-5 font-semibold">4. Public Display of Information</h2>
            <p className="text-[14px] font-extralight">
              Please be aware that the information you submit (like name,
              projects, social links) may be <b>publicly visible</b> on your
              portfolio page. You should only provide details that you are
              comfortable sharing publicly.
            </p>

            <h2 className="mt-5 font-semibold">5. Your Data Rights</h2>
            <p className="text-[14px] font-extralight">You have the right to:</p>
            <ul className="list-disc list-inside text-[14px] font-extralight">
              <li>Access, correct, or update your personal data</li>
              <li>Request deletion of your portfolio or personal details</li>
              <li>Withdraw consent at any time (this may result in the removal of
                your profile)</li>
            </ul>
            <p className="text-[14px] font-extralight mt-2">
              To exercise these rights, please contact us at{" "}
              <b>[Your Support Email or Contact Info]</b>.
            </p>

            <h2 className="mt-5 font-semibold">6. Third-Party Links</h2>
            <p className="text-[14px] font-extralight">
              Our website may include links to third-party websites (like your
              LinkedIn or GitHub profiles). We are not responsible for the
              privacy practices of those external sites. We encourage you to
              review their policies before submitting any personal information.
            </p>

            <h2 className="mt-5 font-semibold">7. Changes to This Policy</h2>
            <p className="text-[14px] font-extralight">
              We may update this Privacy Policy from time to time to reflect
              changes to our practices or for legal reasons. Any changes will be
              posted on this page with an updated “Effective Date”.
            </p>

            <h2 className="mt-5 font-semibold">8. Contact Us</h2>
            <p className="text-[14px] font-extralight">
              If you have any questions or concerns about this Privacy Policy or
              our data practices, please contact us at: <br />
              📧 <b>[tushar19chouhan@gmail.com]</b>
              <br />
              🌐 <b>[google.com]</b>
            </p>
          </div>
          <hr className="mt-7 font-light" />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Privacy;
