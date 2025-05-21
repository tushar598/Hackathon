import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Menu,
  X,
  MessageSquare,
  User,
  Mail,
  Send,
} from "lucide-react";
import FeedbackModal from "../components/FeedbackModal";
import TeamMember from "../components/TeamMember";
import FeatureCard from "../components/FeatureCard";
import { Navigate } from "react-router-dom";

const FrontPage = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [feedbackModalOpen, setFeedbackModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const teamMembers = [
    {
      profilePhoto:
        "https://marketplace.canva.com/EAFltFTo1p0/1/0/1600w/canva-cute-anime-illustration-boy-avatar-d8N3f7Rn9aU.jpg",
      name: "Yash Singh Solanki",
      role: "Frontend Developer",
    },
    {
      profilePhoto:
        "https://marketplace.canva.com/EAFltFTo1p0/1/0/1600w/canva-cute-anime-illustration-boy-avatar-d8N3f7Rn9aU.jpg",
      name: "Tushar Singh Chouhan",
      role: "Backend Developer",
    },
    {
      profilePhoto:
        "https://marketplace.canva.com/EAFltFTo1p0/1/0/1600w/canva-cute-anime-illustration-boy-avatar-d8N3f7Rn9aU.jpg",
      name: "Yashika Chaturvedi",
      role: "UI/UX Designer",
    },
    {
      profilePhoto:
        "https://marketplace.canva.com/EAFltFTo1p0/1/0/1600w/canva-cute-anime-illustration-boy-avatar-d8N3f7Rn9aU.jpg",
      name: "Sheetal Pandey",
      role: "Project Manager",
    },
  ];

  const features = [
    {
      icon: <User size={28} className="text-cyan-400" />,
      title: "Custom Profile",
      description:
        "Create a personalized portfolio that reflects your unique style and showcases your best work.",
    },
    {
      icon: <ArrowRight size={28} className="text-cyan-400" />,
      title: "One-Click Publish",
      description:
        "Go live instantly with our streamlined publishing process. Share your portfolio with the world in seconds.",
    },
    {
      icon: <MessageSquare size={28} className="text-cyan-400" />,
      title: "Visitor Feedback",
      description:
        "Collect valuable insights and testimonials directly through your portfolio page.",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      {/* ...rest of the JSX code remains unchanged */}
      {/* {Navbar} */}
      <nav
        className={`fixed top-0 left-0 z-50 w-full border-b transition-all duration-300 ${
          isScrolled
            ? "border-cyan-800/40 bg-black/90 backdrop-blur-sm"
            : "border-white/20 bg-black"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="border-2 border-white bg-black px-4 py-1 text-lg font-bold text-white shadow-[4px_4px_0_0_rgba(6,182,212,0.7)] hover:shadow-[2px_2px_0_0_rgba(6,182,212,0.9)] transition-all duration-200">
            MyPortfolio
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="font-medium text-gray-300 hover:text-cyan-400 transition duration-200"
            >
              Features
            </a>
            <a
              href="#about"
              className="font-medium text-gray-300 hover:text-cyan-400 transition duration-200"
            >
              About
            </a>
            <a
              href="#team"
              className="font-medium text-gray-300 hover:text-cyan-400 transition duration-200"
            >
              Team
            </a>
            <button onClick={()=> navigate("/help")} className="font-medium text-white underline decoration-cyan-400 underline-offset-4 transition duration-200 hover:text-cyan-400">
              Help!
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white hover:text-cyan-400 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-sm border-b border-cyan-800/30 animate-fade-in">
            <div className="flex flex-col space-y-4 py-4 px-8">
              <a
                href="#features"
                className="font-medium text-gray-300 hover:text-cyan-400 transition py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#about"
                className="font-medium text-gray-300 hover:text-cyan-400 transition py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#team"
                className="font-medium text-gray-300 hover:text-cyan-400 transition py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Team
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                }}
                className="font-medium text-left text-white underline decoration-cyan-400 underline-offset-4 transition duration-200 hover:text-cyan-400 py-2"
              >
                Help!
              </button>
            </div>
          </div>
        )}
      </nav>

      <div className="mx-auto w-full max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl px-4 py-10 pt-24">
        {/* Hero Section */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-cyan-400">
            Your personal portfolio,
            <br />
            <span className="text-white text-2xl sm:text-3xl md:text-4xl mt-2 block">
              Created and curated in seconds.
            </span>
          </h1>
          <div className="mt-4 overflow-hidden">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent text-xl sm:text-2xl md:text-3xl font-bold inline-block">
              Build. Share. Shine.
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl font-medium leading-relaxed text-gray-300 mt-6 max-w-3xl mx-auto">
            Just add your info, click publish, and go live —
            <span className="text-cyan-300">
              {" "}
              your portfolio is ready to impress.
            </span>
          </h2>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-10">
            <button
              onClick={() => navigate("/login")}
              className="w-full sm:w-auto px-8 py-3 text-lg font-semibold border-2 border-cyan-800 text-cyan-400 rounded-md
                      hover:bg-gray-800 hover:text-white transition duration-300
                      shadow-[0_0_8px_1.5px_rgba(6,182,212,0.7)] hover:shadow-[0_0_15px_3px_rgba(6,182,212,0.9)]
                      focus:outline-none focus:ring-2 focus:ring-cyan-700 focus:ring-offset-2 focus:ring-offset-black"
            >
              Login
            </button>

            <button
              onClick={() => navigate("/signup")}
              className="w-full sm:w-auto px-8 py-3 text-lg font-semibold bg-cyan-700 text-white rounded-md
                      hover:bg-cyan-600 transition duration-300
                      shadow-[0_0_8px_1.5px_rgba(6,182,212,0.5)] hover:shadow-[0_0_15px_3px_rgba(6,182,212,0.7)]
                      focus:outline-none focus:ring-2 focus:ring-cyan-700 focus:ring-offset-2 focus:ring-offset-black"
            >
              Create Account
            </button>
          </div>
        </div>

        {/* Features Section */}
        <section id="features" className="mb-20 pt-10 scroll-mt-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-8 text-center">
            How We Help You!
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </section>

        {/* About Us Section with animated border */}
        <section id="about" className="mb-20  pt-10 scroll-mt-20">
          <div className="relative border border-cyan-800/50 rounded-lg p-8  bg-gradient-to-b from-gray-900/50 to-black overflow-hidden group">
            <div className="absolute pb-10 inset-0 bg-gradient-to-r from-cyan-900/20 to-purple-900/20 opacity-50"></div>

            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
            <div className="absolute bottom-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
            <div className="absolute top-0 right-0 h-full w-[1px] bg-gradient-to-b from-transparent via-cyan-400 to-transparent"></div>
            <div className="absolute top-0 left-0 h-full w-[1px] bg-gradient-to-b from-transparent via-cyan-400 to-transparent"></div>

            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-4 text-center">
                About Us
              </h2>
              <p className="leading-relaxed text-base sm:text-xl text-gray-300 max-w-2xl mx-auto text-center">
                MyPortfolio is developed by a dedicated team passionate about
                design and development. We believe everyone deserves an online
                presence to tell their story, and we're here to make that as
                seamless as possible.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="mb-20 pt-10 scroll-mt-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-8 text-center">
            Our Team
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-xl">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={index}
                profilePhoto={member.profilePhoto}
                name={member.name}
                role={member.role}
                delay={index * 0.1}
              />
            ))}
          </div>
        </section>

        {/* Feedback Section */}
        <section className="text-center mt-10 px-4 max-w-md mx-auto">
          <p className="text-lg font-medium mb-4 text-gray-200">
            Thank you for using our website!
            <br />
            <span className="text-cyan-400">Please give your feedback.</span>
          </p>
          <button
            onClick={() => navigate("/feedback") }
            className="w-full max-w-xs bg-white text-black px-8 py-3 rounded-md font-semibold
                     hover:bg-cyan-400 hover:text-white
                     transition duration-300 shadow-md hover:shadow-cyan-400/70"
          >
            Give Feedback
          </button>
        </section>

        {/* Footer */}
        <footer className="mt-20 border-t border-gray-800 pt-8 pb-10">
          <div className="text-center">
            <div className="border-2 border-white bg-black px-4 py-1 text-lg font-bold text-white shadow-[4px_4px_0_0_rgba(6,182,212,0.7)] inline-block mb-6">
              MyPortfolio
            </div>

            <div className="flex justify-center space-x-6 mb-6">
              <a
                href="#"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                Twitter
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                Instagram
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                GitHub
              </a>
            </div>

            <p className="text-gray-500 text-sm">
              © 2025 MyPortfolio. All rights reserved.
            </p>
          </div>
        </footer>
      </div>

      <FeedbackModal
        isOpen={feedbackModalOpen}
        onClose={() => setFeedbackModalOpen(false)}
      />
    </div>
  );
};

export default FrontPage;
