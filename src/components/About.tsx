import React from 'react';
import { GraduationCap, Briefcase, Code, Coffee, MapPin, Calendar, Award, Target } from 'lucide-react';
import ScrollDownArrow from './ScrollDownArrow';

const About: React.FC<{ onSectionChange: (section: string) => void }> = ({ onSectionChange }) => {
  const achievements = [
    { icon: Award, label: 'DevOps Certified', color: 'cyan' },
    { icon: Code, label: 'Full Stack', color: 'lime' },
    { icon: Target, label: 'Problem Solver', color: 'magenta' }
  ];

  return (
    <section id="about" className="py-20 px-6 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 right-10 w-32 h-32 border border-cyan-400/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 border border-magenta-400/10 rounded-full animate-pulse delay-1000"></div>
      </div>
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold neon-text-cyan font-mono mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-magenta-400 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 font-mono max-w-2xl mx-auto">
            Passionate about building scalable solutions and automating complex workflows
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side - Education & Experience Timeline */}
          <div className="space-y-8">
            {/* Education Card */}
            <div className="bg-gray-900/60 backdrop-blur-sm rounded-xl border border-cyan-400/20 p-8 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex items-center mb-6">
                <div className="p-4 rounded-full bg-cyan-400/10 border border-cyan-400/20 mr-4">
                  <GraduationCap className="text-cyan-400" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-cyan-400 font-mono">Education</h3>
                  <div className="w-16 h-0.5 bg-cyan-400 mt-2"></div>
                </div>
              </div>
              <div className="relative pl-8">
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-transparent"></div>
                <div className="relative bg-gray-800/40 p-6 rounded-lg border border-cyan-400/10 hover:border-cyan-400/30 transition-colors">
                  <div className="absolute -left-2 top-6 w-4 h-4 bg-cyan-400 rounded-full border-2 border-gray-900"></div>
                  <div className="flex items-start gap-3">
                    <MapPin className="text-cyan-400 mt-1 flex-shrink-0" size={18} />
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2 leading-tight">
                        Model Institute of Engineering and Technology
                      </h4>
                      <p className="text-cyan-400 font-mono mb-3 text-lg">Bachelor's in Computer Science</p>
                      <div className="flex items-center gap-2 text-gray-400">
                        <Calendar size={16} />
                        <span className="font-mono">2023 - 2027</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Experience Card */}
            <div className="bg-gray-900/60 backdrop-blur-sm rounded-xl border border-magenta-400/20 p-8 hover:border-magenta-400/40 transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex items-center mb-6">
                <div className="p-4 rounded-full bg-magenta-400/10 border border-magenta-400/20 mr-4">
                  <Briefcase className="text-magenta-400" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-magenta-400 font-mono">Experience</h3>
                  <div className="w-16 h-0.5 bg-magenta-400 mt-2"></div>
                </div>
              </div>
              <div className="relative pl-8">
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-magenta-400 to-transparent"></div>
                <div className="relative bg-gray-800/40 p-6 rounded-lg border border-magenta-400/10 hover:border-magenta-400/30 transition-colors">
                  <div className="absolute -left-2 top-6 w-4 h-4 bg-magenta-400 rounded-full border-2 border-gray-900"></div>
                  <div className="flex items-start gap-3">
                    <Briefcase className="text-magenta-400 mt-1 flex-shrink-0" size={18} />
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">DevOps Intern</h4>
                      <p className="text-magenta-400 font-mono mb-2 text-lg">LinuxWorld Pvt. LTD.</p>
                      <p className="text-gray-300 mb-4 leading-relaxed">CI/CD Pipeline Development & DevOps Automation</p>
                      <div className="flex flex-wrap gap-2">
                        {['Docker', 'Jenkins', 'Kubernetes'].map((tech, index) => (
                          <span key={index} className="px-3 py-1 text-sm bg-magenta-400/10 text-magenta-400 rounded-full border border-magenta-400/20 font-mono hover:bg-magenta-400/20 transition-colors">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Achievements */}
            <div className="grid grid-cols-3 gap-4">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <div key={index} className={`text-center p-6 rounded-lg bg-${achievement.color}-400/5 border border-${achievement.color}-400/20 hover:bg-${achievement.color}-400/10 transition-all duration-300 hover:transform hover:scale-105 group`}>
                    <IconComponent className={`text-${achievement.color}-400 mx-auto mb-3 group-hover:animate-pulse`} size={28} />
                    <p className={`text-${achievement.color}-400 text-sm font-mono font-semibold`}>{achievement.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
          {/* Right Side - Bio & Tech Stack */}
          <div className="space-y-8">
            {/* Bio Card */}
            <div className="bg-gray-900/60 backdrop-blur-sm rounded-xl border border-lime-400/20 p-8 hover:border-lime-400/40 transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex items-center mb-6">
                <div className="p-4 rounded-full bg-lime-400/10 border border-lime-400/20 mr-4">
                  <Code className="text-lime-400" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-lime-400 font-mono">About</h3>
                  <div className="w-16 h-0.5 bg-lime-400 mt-2"></div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-lime-400 to-transparent opacity-30"></div>
                <p className="text-gray-300 leading-relaxed text-lg font-mono mb-6">
                  I'm a developer who builds <span className="text-lime-400 font-semibold">scalable full-stack</span> and 
                  <span className="text-cyan-400 font-semibold"> DevOps solutions</span> using automation and modern technologies. 
                  I'm passionate about creating <span className="text-magenta-400 font-semibold">efficient systems</span> that 
                  solve real-world problems.
                </p>
                <div className="p-6 bg-gray-800/30 rounded-lg border border-lime-400/10">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 bg-lime-400 rounded-full animate-pulse"></div>
                    <p className="text-lime-400 font-mono text-sm font-semibold">Current Focus:</p>
                  </div>
                  <p className="text-gray-300 font-mono leading-relaxed">
                    Building containerized applications and implementing CI/CD pipelines for seamless deployment workflows
                  </p>
                </div>
              </div>
            </div>
            {/* Enhanced Tech Stack */}
            <div className="bg-gray-900/60 backdrop-blur-sm rounded-xl border border-purple-400/20 p-8 hover:border-purple-400/40 transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex items-center mb-6">
                <div className="p-4 rounded-full bg-purple-400/10 border border-purple-400/20 mr-4">
                  <Coffee className="text-purple-400" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-purple-400 font-mono">Tech Stack</h3>
                  <div className="w-16 h-0.5 bg-purple-400 mt-2"></div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="p-6 bg-cyan-400/5 rounded-lg border border-cyan-400/20 hover:border-cyan-400/40 transition-colors">
                    <h4 className="text-cyan-400 font-semibold text-lg mb-4 font-mono">DevOps</h4>
                    <div className="space-y-3">
                      {['Docker Services', 'Jenkins', 'Kubernetes'].map((tech, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                          <span className="text-gray-300 font-mono">{tech}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="p-6 bg-lime-400/5 rounded-lg border border-lime-400/20 hover:border-lime-400/40 transition-colors">
                    <h4 className="text-lime-400 font-semibold text-lg mb-4 font-mono">Backend</h4>
                    <div className="space-y-3">
                      {['Python'].map((tech, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
                          <span className="text-gray-300 font-mono">{tech}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="p-6 bg-magenta-400/5 rounded-lg border border-magenta-400/20 hover:border-magenta-400/40 transition-colors">
                    <h4 className="text-magenta-400 font-semibold text-lg mb-4 font-mono">Frontend</h4>
                    <div className="space-y-3">
                      {['HTML', 'CSS', 'JavaScript'].map((tech, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-magenta-400 rounded-full"></div>
                          <span className="text-gray-300 font-mono">{tech}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ScrollDownArrow targetSection="skills" onSectionChange={onSectionChange} />
    </section>
  );
};

export default About;