import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/Aakarshit123',
      color: 'cyan'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/aakarshit-bargotra',
      color: 'magenta'
    },
    {
      icon: Mail,
      href: 'mailto:aakarshit.cse@gmail.com',
      color: 'lime'
    }
  ];

  return (
    <footer className="py-8 px-6 border-t border-cyan-400/30 bg-dark/50">
      <div className="container mx-auto">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full bg-${link.color}-400/10 border border-${link.color}-400/30 text-${link.color}-400 hover:bg-${link.color}-400/20 hover:scale-110 transition-all duration-300 group`}
                  style={{
                    boxShadow: `0 0 20px rgba(${
                      link.color === 'cyan' ? '0, 255, 255' :
                      link.color === 'magenta' ? '255, 0, 255' :
                      '57, 255, 20'
                    }, 0.3)`
                  }}
                >
                  <IconComponent 
                    size={24} 
                    className="group-hover:animate-pulse" 
                  />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="text-center space-y-2">
            <p className="text-gray-400 flex items-center justify-center gap-2 font-mono">
              Made with <Heart className="text-red-500 animate-pulse" size={16} /> by
              <span className="neon-text-cyan">Aakarshit Bargotra</span>
            </p>
            <p className="text-gray-500 text-sm font-mono">
              © 2025 Aakarshit Bargotra. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;