import React from "react";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black border border-cyan-800/30 rounded-lg p-6 hover:border-cyan-600/50 transition-all duration-300 group">
      <div className="flex flex-col items-center text-center">
        <div className="mb-4 bg-gray-900/80 p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-cyan-300 mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
