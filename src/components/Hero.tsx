import React from 'react';
import { Download, Mail, Eye } from 'lucide-react';
import profileImg from '../assets/profile.png';
import ScrollDownArrow from './ScrollDownArrow';

interface HeroProps {
  onSectionChange: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onSectionChange }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 order-2 lg:order-1 text-center lg:text-left">
            <h1 className="text-5xl md:text-7xl font-bold neon-text-cyan font-mono leading-tight">
              Aakarshit Bargotra
            </h1>
            <div className="flex items-center gap-3 justify-center lg:justify-start">
              <span className="text-xl md:text-2xl text-lime-400 font-mono">Full Stack Developer & DevOps Engineer</span>
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
    </section>
  );
};

export default Hero;