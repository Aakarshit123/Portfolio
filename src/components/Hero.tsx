import React, { useState, useEffect } from 'react';
import { ChevronDown, Download, Mail, Eye, Sparkles, Code2, Zap } from 'lucide-react';
import profileImg from '../assets/profile.png';

interface HeroProps {
  onSectionChange: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onSectionChange }) => {
  const [typingText, setTypingText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const phrases = [
    'Dockerized Pipelines',
    'Kubernetes Apps',
    'AI Movie Bot',
    'Streamlit Tools'
  ];

  useEffect(() => {
    const currentPhrase = phrases[currentIndex];
    const typingSpeed = isDeleting ? 100 : 150;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setTypingText(currentPhrase.substring(0, typingText.length + 1));
        if (typingText === currentPhrase) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setTypingText(currentPhrase.substring(0, typingText.length - 1));
        if (typingText === '') {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [typingText, currentIndex, isDeleting]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-magenta-400 rounded-full animate-ping opacity-40"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-lime-400 rounded-full animate-pulse opacity-50"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-30"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 order-2 lg:order-1 text-center lg:text-left">
            {/* Greeting Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 text-sm font-mono animate-fadeInUp">
              <Sparkles size={16} className="animate-pulse" />
              Welcome to my digital space
            </div>

            <div className="space-y-6">
              <div className="relative">
                <h1 className="text-5xl md:text-7xl font-bold neon-text-cyan font-mono leading-tight">
                  Aakarshit
                  <br />
                  <span className="bg-gradient-to-r from-magenta-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                    Bargotra
                  </span>
                </h1>
                {/* Decorative Lines */}
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-cyan-400 to-transparent opacity-60"></div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 justify-center lg:justify-start">
                  <Code2 className="text-cyan-400" size={24} />
                  <p className="text-xl md:text-2xl text-gray-300 font-mono">
                    DevOps | Full Stack | AI Chatbot Developer
                  </p>
                </div>

                <div className="h-12 flex items-center justify-center lg:justify-start">
                  <div className="flex items-center gap-2">
                    <Zap className="text-lime-400 animate-pulse" size={20} />
                    <span className="text-lg md:text-xl text-lime-400 font-mono">Building: </span>
                  </div>
                  <div className="ml-2 relative">
                    <span className="neon-text-magenta font-mono text-lg md:text-xl">
                      {typingText}
                      <span className="animate-pulse text-cyan-400">|</span>
                    </span>
                    {/* Typing Background Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-magenta-400/20 to-transparent animate-pulse opacity-30"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <button
                onClick={() => onSectionChange('projects')}
                className="group relative overflow-hidden glow-button-cyan"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Eye size={20} className="group-hover:animate-bounce" />
                <span>View Projects</span>
              </button>
              
              <button className="group relative overflow-hidden glow-button-lime">
                <div className="absolute inset-0 bg-gradient-to-r from-lime-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Download size={20} className="group-hover:animate-bounce" />
                <span>Download Resume</span>
              </button>
              
              <button
                onClick={() => onSectionChange('contact')}
                className="group relative overflow-hidden glow-button-magenta"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-magenta-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Mail size={20} className="group-hover:animate-bounce" />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="text-center p-4 rounded-lg bg-cyan-400/5 border border-cyan-400/20">
                <div className="text-2xl font-bold text-cyan-400 font-mono">15+</div>
                <div className="text-xs text-gray-400 font-mono">Projects</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-lime-400/5 border border-lime-400/20">
                <div className="text-2xl font-bold text-lime-400 font-mono">3+</div>
                <div className="text-xs text-gray-400 font-mono">Years Coding</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-magenta-400/5 border border-magenta-400/20">
                <div className="text-2xl font-bold text-magenta-400 font-mono">∞</div>
                <div className="text-xs text-gray-400 font-mono">Learning</div>
              </div>
            </div>
          </div>

          {/* Right Content - Enhanced Profile */}
          <div className="flex justify-center order-1 lg:order-2">
            <div className="relative group">
              {/* Outer Rotating Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-magenta-400 to-lime-400 p-1 animate-spin-slow opacity-80">
                <div className="w-full h-full rounded-full bg-dark"></div>
              </div>
              
              {/* Main Profile Circle */}
              <div className="relative w-72 h-72 rounded-full bg-gradient-to-br from-cyan-400/20 via-magenta-400/20 to-purple-400/20 p-1 group-hover:scale-105 transition-transform duration-500">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-transparent to-magenta-400"></div>
                  </div>
                  
                  {/* Profile Content */}
                  <div className="relative z-10 text-center">
                    <img
                      src={profileImg}
                      alt="Profile"
                      className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover mx-auto mb-2 border-4 border-cyan-400/40 shadow-lg group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="text-sm text-gray-400 font-mono">
                      Developer
                    </div>
                  </div>
                  
                  {/* Floating Icons */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-cyan-400/20 rounded-full flex items-center justify-center animate-pulse">
                    <Code2 size={16} className="text-cyan-400" />
                  </div>
                  <div className="absolute bottom-4 left-4 w-8 h-8 bg-magenta-400/20 rounded-full flex items-center justify-center animate-pulse delay-1000">
                    <Zap size={16} className="text-magenta-400" />
                  </div>
                </div>
              </div>
              
              {/* Orbiting Elements */}
              <div className="absolute inset-0 animate-spin-reverse">
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-lime-400 rounded-full opacity-60"></div>
                <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 w-3 h-3 bg-purple-400 rounded-full opacity-60"></div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-400 rounded-full opacity-60"></div>
                <div className="absolute top-1/2 -left-2 transform -translate-y-1/2 w-3 h-3 bg-magenta-400 rounded-full opacity-60"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Down Arrow */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={() => onSectionChange('about')}
            className="group flex flex-col items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors animate-bounce"
          >
            <span className="text-sm font-mono opacity-70 group-hover:opacity-100">Scroll Down</span>
            <div className="relative">
              <ChevronDown size={32} className="group-hover:animate-pulse" />
              <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;