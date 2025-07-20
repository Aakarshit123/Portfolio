import React from 'react';
import ScrollDownArrow from './ScrollDownArrow';
import linuxLogo from '../assets/skills/linux.png';
import cssLogo from '../assets/skills/css.png';
import dockerLogo from '../assets/skills/docker.png';
import htmlLogo from '../assets/skills/html.png';
import jsLogo from '../assets/skills/js.png';
import jenkinsLogo from '../assets/skills/jenkins.png';
import kubernetesLogo from '../assets/skills/kubernetes.png';
import pythonLogo from '../assets/skills/python.png';

const skills = [
  { name: 'Linux', image: linuxLogo },
  { name: 'CSS', image: cssLogo },
  { name: 'Docker', image: dockerLogo },
  { name: 'HTML', image: htmlLogo },
  { name: 'JavaScript', image: jsLogo },
  { name: 'Jenkins', image: jenkinsLogo },
  { name: 'Kubernetes', image: kubernetesLogo },
  { name: 'Python', image: pythonLogo },
];

const Skills: React.FC<{ onSectionChange: (section: string) => void }> = ({ onSectionChange }) => {
  return (
    <section id="skills" className="py-20 px-6 bg-gray-900/30 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-20 w-40 h-40 border border-lime-400/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-20 w-32 h-32 border border-purple-400/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-magenta-400 rounded-full animate-ping delay-500"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold neon-text-cyan font-mono mb-4">
            Skills & Technologies
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 via-lime-400 to-magenta-400 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 font-mono max-w-2xl mx-auto">
            Specialized expertise in modern development and deployment technologies
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center bg-gray-900/60 border border-cyan-400/20 rounded-xl p-6 shadow-lg hover:scale-105 transition-transform duration-300 w-48"
            >
              <img
                src={skill.image}
                alt={skill.name}
                className="w-20 h-20 object-contain mb-4"
                loading="lazy"
              />
              <span className="text-xl font-bold text-white font-mono mt-2">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
      <ScrollDownArrow targetSection="projects" onSectionChange={onSectionChange} />
    </section>
  );
};

export default Skills;