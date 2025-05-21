import React from "react";

const Help = () => {
  return (
    <div className="flex min-h-screen w-screen flex-col bg-blue-300 text-gray-800">
      {/* Navbar */}
      <nav className="left-0 z-50 w-full border-b border-white/20 bg-white/30 shadow backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="border-2 border-black bg-white px-4 py-1 text-lg font-bold text-black shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
            MyPortfolio
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="w-full text-center mt-14 mb-1 px-4">
        <h1 className="text-3xl font-black text-black">Help & Support</h1>
        <p className="text-lg text-gray-700 mt-2">
          Find answers to your questions and start building your professional
          portfolio with ease.
        </p>
        <div className="mt-4 w-16 h-[3px] bg-black mx-auto"></div>
      </div>

      <div className="space-y-10 px-6 pt-3 pb-24 md:px-20">
        {/* Getting Started */}
        <section className="rounded-none border-2 border-black bg-white p-8 shadow-[6px_6px_0_0_rgba(0,0,0,1)]">
          <h2 className="mb-2 text-2xl font-bold">1. Getting Started</h2>
          <p className="text-sm mb-3">
            To begin, create an account, fill in your portfolio details, choose
            a template, and generate your site. It’s that simple!
          </p>
          <ul className="list-inside list-disc text-sm space-y-1">
            <li>Create an account or log in</li>
            <li>Fill out the portfolio form with your details</li>
            <li>Browse and preview templates in our Template Gallery</li>
            <li>Click 'Generate' to create your portfolio</li>
          </ul>
        </section>

        {/* Filling the Portfolio Form */}
        <section className="rounded-none border-2 border-black bg-white p-8 shadow-[6px_6px_0_0_rgba(0,0,0,1)]">
          <h2 className="mb-2 text-2xl font-bold">2. Filling the Portfolio Form</h2>
          <p className="text-sm mb-3">
            Each section of the form helps shape your portfolio. Here's what you
            need to know:
          </p>
          <ul className="list-inside list-disc space-y-1 text-sm">
            <li><strong>Personal Info:</strong> Your name, email, and contact details</li>
            <li><strong>About:</strong> A short bio to introduce yourself</li>
            <li><strong>Skills & Tech Stack:</strong> Highlight the technologies you know</li>
            <li><strong>Work Experience:</strong> Add your roles, responsibilities, and achievements</li>
            <li><strong>Projects:</strong> Showcase what you’ve built</li>
            <li><strong>Education:</strong> Academic history</li>
            <li><strong>Certifications:</strong> Courses, badges, and recognitions</li>
            <li><strong>Social Links:</strong> Add GitHub, LinkedIn, etc.</li>
            <li><strong>Media Uploads:</strong> Upload a resume, profile photo, logo, etc.</li>
          </ul>
        </section>

        {/* Editing or Updating Portfolios */}
        <section className="rounded-none border-2 border-black bg-white p-8 shadow-[6px_6px_0_0_rgba(0,0,0,1)]">
          <h2 className="mb-2 text-2xl font-bold">3. Editing or Updating Portfolios</h2>
          <p className="text-sm">
            You can always go back and update your information or try out a
            different template.
          </p>
          <ul className="list-inside list-disc space-y-1 text-sm mt-2">
            <li>Click on 'Edit Portfolio' from the dashboard</li>
            <li>Changes are autosaved or you can click 'Save Changes'</li>
          </ul>
        </section>

        {/* Technical Issues / Troubleshooting */}
        <section className="rounded-none border-2 border-black bg-white p-8 shadow-[6px_6px_0_0_rgba(0,0,0,1)]">
          <h2 className="mb-2 text-2xl font-bold">4. Technical Issues / Troubleshooting</h2>
          <p className="text-sm mb-3">Having trouble? Try these solutions:</p>
          <ul className="list-inside list-disc space-y-1 text-sm">
            <li><strong>Portfolio not loading?</strong> Refresh the page or clear your browser cache</li>
            <li><strong>Image not uploading?</strong> Make sure it’s under 5MB and in JPG/PNG format</li>
            <li><strong>Links not working?</strong> Ensure they begin with https://</li>
            <li><strong>Generation failed?</strong> Recheck your inputs and try again</li>
          </ul>
        </section>

        {/* Privacy & Data Safety */}
        <section className="rounded-none border-2 border-black bg-white p-8 shadow-[6px_6px_0_0_rgba(0,0,0,1)]">
          <h2 className="mb-2 text-2xl font-bold">5. Privacy & Data Safety</h2>
          <p className="text-sm">
            We value your privacy. All data is encrypted and securely stored.
            Learn more in our{" "}
            <a href="#" className="text-purple-700 underline">
              Privacy Policy
            </a>
            .
          </p>
          <ul className="list-inside list-disc space-y-1 text-sm mt-2">
            <li>Your data stays private unless you publish your portfolio</li>
            <li>You can delete your profile anytime</li>
            <li>Only public profiles are visible to others</li>
          </ul>
        </section>
      </div>

      {/* Contact Us Section */}
      <div className="rounded-none border-2 border-black bg-white p-8 mx-6 mb-12 mt-0 shadow-[6px_6px_0_0_rgba(0,0,0,1)] md:mx-20">
        <h2 className="mb-2 text-2xl font-bold">Contact Us</h2>
        <p className="mb-4 text-sm text-gray-700">
          Have questions, suggestions, or facing any issues? Reach out to our
          support team anytime!
        </p>
        <div className="space-y-1 text-sm">
          <p>
            📧 Email: <strong>support@myportfolio.com</strong>
          </p>
          <p>
            📞 Phone: <strong>+91-98765-43210</strong>
          </p>
          <p>📍 Location: Ujjain, Madhya Pradesh, India</p>
        </div>
        <p className="mt-4 text-sm text-gray-600">
          We usually respond within 24–48 hours.
        </p>
      </div>

      {/* Footer */}
      <footer className="left-0 w-full border-t border-white/30 bg-white/20 shadow-inner backdrop-blur-md">
        <div className="flex justify-center space-x-6 py-3 text-sm text-black/70">
          <a href="#" className="hover:underline">
            Privacy
          </a>
          <a href="#" className="hover:underline">
            Policy
          </a>
          <a href="#" className="capitalize hover:underline">
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

export default Help;
