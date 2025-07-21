import React, { useEffect, useState } from 'react';
import { Download, Mail, Eye } from 'lucide-react';
import profileImg from '../assets/profile.png';
import ScrollDownArrow from './ScrollDownArrow';

interface HeroProps {
  onSectionChange: (section: string) => void;
}

const roles = [
  'DevOps Engineer',
  'Full Stack Developer',
  'Cloud Engineer',
  'AI Enthusiast',
];

// Generate random neon stars for the background
const NEON_COLORS = [
  'rgba(34,211,238,0.5)', // soft blue/cyan
  'rgba(163,230,53,0.5)', // soft green
  'rgba(236,72,153,0.5)', // soft magenta
  'rgba(139,92,246,0.5)', // soft purple
];
const STAR_COUNT = 60;
const stars = Array.from({ length: STAR_COUNT }).map(() => ({
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: 1.2 + Math.random() * 1.8, // smaller, more ambient stars
  color: NEON_COLORS[Math.floor(Math.random() * NEON_COLORS.length)],
  anim: Math.random() * 10,
}));

const Hero: React.FC<HeroProps> = ({ onSectionChange }) => {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [typing, setTyping] = useState(true);

  // Typewriter effect: letter by letter in, then out
  useEffect(() => {
    const role = roles[roleIdx];
    let current = 0;
    let reverse = false;
    let interval: ReturnType<typeof setTimeout>;

    function typeLetters() {
      if (!reverse) {
        if (current <= role.length) {
          setDisplayedText(role.slice(0, current));
          current++;
          interval = setTimeout(typeLetters, 80);
        } else {
          setTimeout(() => {
            reverse = true;
            typeLetters();
          }, 1200);
        }
      } else {
        if (current > 0) {
          current--;
          setDisplayedText(role.slice(0, current));
          interval = setTimeout(typeLetters, 40);
        } else {
          setTimeout(() => {
            setRoleIdx((prev) => (prev + 1) % roles.length);
            setTyping((t) => !t); // retrigger effect
          }, 400);
        }
      }
    }
    setDisplayedText('');
    setTyping(true);
    typeLetters();
    return () => clearTimeout(interval);
    // eslint-disable-next-line
  }, [roleIdx]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Neon animated stars background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg width="100%" height="100%" className="absolute inset-0 w-full h-full" style={{ display: 'block' }}>
          {stars.map((star, i) => (
            <g key={i}>
              <circle
                cx={`${star.x}%`}
                cy={`${star.y}%`}
                r={star.size}
                fill={star.color}
                style={{
                  filter: `blur(${star.size * 0.7}px) drop-shadow(0 0 2px ${star.color})`,
                  opacity: 0.7,
                  mixBlendMode: 'screen',
                }}
              >
                <animateTransform
                  attributeName="transform"
                  type="translate"
                  values={`0 0; 0 ${3 + star.size * 1.5}; 0 0`}
                  dur={`${4 + (star.anim % 4)}s`}
                  repeatCount="indefinite"
                  keyTimes="0;0.5;1"
                  begin={`${star.anim}s`}
                />
              </circle>
            </g>
          ))}
        </svg>
      </div>
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 order-2 lg:order-1 text-center lg:text-left">
            <h1 className="text-5xl md:text-7xl font-bold font-mono leading-tight relative">
              <span
                className="inline-block animate-flowing-neon bg-[linear-gradient(270deg,#22d3ee,#a3e635,#ec4899,#22d3ee)] bg-[length:200%_200%] bg-clip-text text-transparent"
                style={{
                  textShadow: '0 1px 4px rgba(34,211,238,0.18), 0 2px 8px rgba(163,230,53,0.13), 0 2px 8px rgba(236,72,153,0.13)'
                }}
              >
                Aakarshit Bargotra
              </span>
            </h1>
            <div className="h-10 min-h-[2.5rem] flex items-center justify-center lg:justify-start relative">
              <span
                className={
                  'text-xl md:text-2xl font-mono neon-role-text transition-all duration-500 absolute left-1/2 lg:left-0 transform lg:translate-x-0 -translate-x-1/2 opacity-100 translate-y-0'
                }
                key={roleIdx}
              >
                {displayedText}
              </span>
            </div>
            <p className="text-gray-300 text-lg font-mono leading-relaxed">
              Building beautiful, scalable, and intelligent solutions for the modern web and cloud.
            </p>
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <button
                onClick={() => onSectionChange('projects')}
                className="group relative overflow-hidden glow-button-cyan"
              >
                <Eye size={20} className="group-hover:animate-bounce" />
                <span>View Projects</span>
              </button>
              <a
                href="/resume.pdf"
                download
                className="group relative overflow-hidden glow-button-lime"
              >
                <Download size={20} className="group-hover:animate-bounce" />
                <span>Download Resume</span>
              </a>
              <button
                onClick={() => onSectionChange('contact')}
                className="group relative overflow-hidden glow-button-magenta"
              >
                <Mail size={20} className="group-hover:animate-bounce" />
                <span>Contact Me</span>
              </button>
            </div>
          </div>
          {/* Right Content - Profile Image */}
          <div className="flex justify-center order-1 lg:order-2">
            <div className="relative w-72 h-72 rounded-full bg-gray-900 flex items-center justify-center shadow-xl border-4 border-cyan-400 overflow-hidden">
              <img
                src={profileImg}
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>
        <ScrollDownArrow targetSection="about" onSectionChange={onSectionChange} />
      </div>
      <style>{`
        @keyframes flowing-neon {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
        .animate-flowing-neon {
          animation: flowing-neon 3s linear infinite alternate;
        }
        /* Remove heavy neon shadow, keep only a soft shadow for readability */
        .flowing-neon-shadow-soft {
          text-shadow: none;
        }
        .neon-role-text {
          color: #a3e635;
          text-shadow: 0 0 8px #a3e635, 0 0 16px #22d3ee, 0 0 24px #ec4899;
        }
        @keyframes star-float {
          0% { transform: translateY(0); }
          100% { transform: translateY(-16px); }
        }
      `}</style>
    </section>
  );
};

export default Hero;