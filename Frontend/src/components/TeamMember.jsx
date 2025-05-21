import { useState } from "react";

const TeamMember = ({ profilePhoto, name, role, delay }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="text-center group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        animationDelay: `${delay}s`,
      }}
    >
      <div className="relative overflow-hidden rounded-lg mb-3">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/0 to-cyan-500/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 z-10">
          <span className="text-white font-medium">{role}</span>
        </div>
        <img 
          src={profilePhoto} 
          alt={name} 
          className={`w-full h-auto aspect-square object-cover transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
      </div>
      <p className="font-semibold text-sm sm:text-base">{name}</p>
      <div className="h-0.5 w-0 bg-cyan-400 mx-auto group-hover:w-1/2 transition-all duration-300"></div>
    </div>
  );
};

export default TeamMember;
