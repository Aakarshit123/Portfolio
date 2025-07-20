import React, { useState, useRef, useEffect } from 'react';
import ScrollDownArrow from './ScrollDownArrow';
import linuxLogo from '../assets/skills/linux.png';
import cssLogo from '../assets/skills/css.png';
import dockerLogo from '../assets/skills/docker.png';
import htmlLogo from '../assets/skills/html.png';
import jsLogo from '../assets/skills/js.png';
import jenkinsLogo from '../assets/skills/jenkins.png';
import kubernetesLogo from '../assets/skills/kubernetes.png';
import pythonLogo from '../assets/skills/python.png';
import { ExternalLink } from 'lucide-react';

const skills = [
  { name: 'Linux', image: linuxLogo, project: { name: 'Docker Automation with Jenkins', link: '#jenkins-docker', desc: 'Automated CI/CD pipeline with Jenkins and Docker on Linux.' }, proficiency: 80, level: 'Advanced' },
  { name: 'CSS', image: cssLogo, project: { name: 'Portfolio Website', link: '#portfolio', desc: 'Modern React portfolio with responsive, animated CSS.' }, proficiency: 85, level: 'Advanced' },
  { name: 'Docker', image: dockerLogo, project: { name: 'Docker Menu', link: '#docker-menu', desc: 'Menu-driven tool for managing Docker containers.' }, proficiency: 80, level: 'Advanced' },
  { name: 'HTML', image: htmlLogo, project: { name: 'Portfolio Website', link: '#portfolio', desc: 'Semantic, accessible HTML for portfolio and apps.' }, proficiency: 90, level: 'Expert' },
  { name: 'JavaScript', image: jsLogo, project: { name: 'Portfolio Website', link: '#portfolio', desc: 'Interactive UI and logic for web projects.' }, proficiency: 85, level: 'Advanced' },
  { name: 'Jenkins', image: jenkinsLogo, project: { name: 'Docker Automation with Jenkins', link: '#jenkins-docker', desc: 'CI/CD automation using Jenkins pipelines.' }, proficiency: 75, level: 'Intermediate' },
  { name: 'Kubernetes', image: kubernetesLogo, project: { name: 'Docker Automation with Jenkins', link: '#jenkins-docker', desc: 'Container orchestration and deployment.' }, proficiency: 70, level: 'Intermediate' },
  { name: 'Python', image: pythonLogo, project: { name: 'Portfolio Website', link: '#portfolio', desc: 'Backend scripting and automation in Python.' }, proficiency: 90, level: 'Expert' },
];

const getLevelColor = (level: string) => {
  switch (level) {
    case 'Expert': return 'lime';
    case 'Advanced': return 'cyan';
    case 'Intermediate': return 'magenta';
    default: return 'purple';
  }
};

const Skills: React.FC<{ onSectionChange: (section: string) => void }> = ({ onSectionChange }) => {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  const [animated, setAnimated] = useState<{ [key: string]: boolean }>({});
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Animate skill bars when in view
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillName = entry.target.getAttribute('data-skill');
            setAnimated((prev) => ({ ...prev, [skillName!]: true }));
          }
        });
      },
      { threshold: 0.3 }
    );
    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    return () => observer.disconnect();
  }, []);

  // Hide tooltip when clicking outside
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest('.skill-card')) {
        setActiveSkill(null);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  // Keyboard navigation for accessibility
  const handleKeyDown = (e: React.KeyboardEvent, skillName: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      setActiveSkill(skillName);
    }
    if (e.key === 'Escape') {
      setActiveSkill(null);
    }
  };

  return (
    <section id="skills" className="py-20 px-6 bg-gray-900/30 relative">
      {/* Subtle animated background gradient */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden animate-gradient-x bg-gradient-to-r from-cyan-900/10 via-magenta-900/10 to-lime-900/10"></div>
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
              ref={el => (cardRefs.current[idx] = el)}
              data-skill={skill.name}
              className={`skill-card relative flex flex-col items-center bg-white/10 backdrop-blur-md border border-cyan-400/10 rounded-2xl p-5 shadow-2xl focus:outline-none focus:ring-2 focus:ring-cyan-400 hover:scale-105 hover:-rotate-2 hover:border-lime-400 transition-all duration-300 w-44 sm:w-52 cursor-pointer group ${activeSkill === skill.name ? 'ring-2 ring-lime-400' : ''}`}
              tabIndex={0}
              aria-label={`Skill: ${skill.name}`}
              onClick={() => setActiveSkill(skill.name)}
              onKeyDown={e => handleKeyDown(e, skill.name)}
            >
              <div className="relative mb-4 flex flex-col items-center">
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="w-20 h-20 object-contain mx-auto group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 drop-shadow-xl"
                  loading="lazy"
                />
              </div>
              <span className="text-xl font-bold text-white font-mono mb-2 text-center">{skill.name}</span>
              {/* Skill Bar with shimmer */}
              <div className="w-full mb-2">
                <div className="h-3 bg-gray-800 rounded-full overflow-hidden relative">
                  <div
                    className={`h-full bg-gradient-to-r from-cyan-400 to-lime-400 rounded-full transition-all duration-1000 ease-out ${animated[skill.name] ? '' : 'w-0'}`}
                    style={{ width: animated[skill.name] ? `${skill.proficiency}%` : '0%' }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer pointer-events-none" />
                  </div>
                </div>
                <div className="text-right text-xs text-cyan-300 font-mono mt-1">{skill.proficiency}%</div>
              </div>
              {/* Tooltip Overlay */}
              {activeSkill === skill.name && (
                <div className="absolute -top-40 left-1/2 transform -translate-x-1/2 z-20 w-72 bg-cyan-900/95 border border-cyan-400/40 rounded-lg shadow-xl px-6 py-4 text-center animate-fadeInUp">
                  <div className="text-lg font-bold text-cyan-400 mb-2">Proficiency</div>
                  <div className="text-gray-200 font-mono mb-1">1 year experience</div>
                  <div className="mt-2 flex flex-col items-center gap-1">
                    <span className="text-cyan-300 font-semibold">Project:</span>
                    <a
                      href={skill.project.link}
                      className="inline-flex items-center gap-2 text-lime-400 underline font-mono hover:text-lime-300 transition-colors"
                      onClick={e => { e.stopPropagation(); }}
                      tabIndex={-1}
                      aria-label={`Project: ${skill.project.name}`}
                    >
                      <ExternalLink size={16} />
                      {skill.project.name}
                    </a>
                    <span className="text-xs text-gray-400 mt-1">{skill.project.desc}</span>
                  </div>
                  <div className="w-4 h-4 bg-cyan-900 border-l border-b border-cyan-400/40 absolute left-1/2 transform -translate-x-1/2 rotate-45 -bottom-2"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <ScrollDownArrow targetSection="projects" onSectionChange={onSectionChange} />
      <style>{`
        @keyframes shimmer {
          0% { background-position: -200px 0; }
          100% { background-position: 200px 0; }
        }
        .animate-shimmer {
          background-image: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
          background-size: 200px 100%;
          animation: shimmer 1.5s infinite linear;
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 8s ease-in-out infinite;
        }
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </section>
  );
};

export default Skills;