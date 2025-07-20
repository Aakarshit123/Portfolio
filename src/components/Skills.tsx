import React, { useState } from 'react';
import { 
  Code, 
  Server, 
  Star,
  TrendingUp,
  Award,
  Target
} from 'lucide-react';
import ScrollDownArrow from './ScrollDownArrow';
import jenkinsSkill from '../assets/jenkins-skill.png';

const Skills: React.FC<{ onSectionChange: (section: string) => void }> = ({ onSectionChange }) => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      title: 'DevOps Engineering',
      icon: Server,
      color: 'cyan',
      description: 'Container orchestration and automation',
      skills: [
        { name: 'Docker', level: 88, experience: '2+ years', description: 'Container deployment & management', image: null },
        { name: 'Jenkins', level: 82, experience: '1+ year', description: 'CI/CD pipeline automation', image: jenkinsSkill },
        { name: 'Kubernetes', level: 75, experience: '1+ year', description: 'Container orchestration', image: null },
        { name: 'Linux', level: 80, experience: '2+ years', description: 'Server management & scripting', image: null }
      ]
    },
    {
      title: 'Full Stack Development',
      icon: Code,
      color: 'lime',
      description: 'End-to-end application development',
      skills: [
        { name: 'Python', level: 90, experience: '3+ years', description: 'Backend development & scripting', image: null },
        { name: 'JavaScript', level: 85, experience: '2+ years', description: 'Frontend interactivity', image: null },
        { name: 'HTML', level: 95, experience: '3+ years', description: 'Semantic markup & structure', image: null },
        { name: 'CSS', level: 90, experience: '3+ years', description: 'Responsive design & styling', image: null }
      ]
    },
    {
      title: 'AI & Automation',
      icon: Star,
      color: 'magenta',
      description: 'Machine learning, bots, and automation scripts',
      skills: [
        { name: 'Machine Learning', level: 80, experience: '1+ year', description: 'AI-powered solutions and data analysis', image: null },
        { name: 'NLP', level: 75, experience: '1+ year', description: 'Natural Language Processing for chatbots', image: null },
        { name: 'OpenCV', level: 70, experience: '1+ year', description: 'Computer vision and image processing', image: null },
        { name: 'Automation', level: 85, experience: '2+ years', description: 'Task automation and scripting', image: null }
      ]
    }
  ];

  const getSkillLevelColor = (level: number) => {
    if (level >= 90) return 'lime';
    if (level >= 80) return 'cyan';
    if (level >= 70) return 'magenta';
    return 'purple';
  };

  const getSkillStars = (level: number) => {
    return Math.ceil(level / 20);
  };

  const getSkillLevel = (level: number) => {
    if (level >= 90) return 'Expert';
    if (level >= 80) return 'Advanced';
    if (level >= 70) return 'Intermediate';
    return 'Beginner';
  };

  return (
    <>
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

        <div className="space-y-12 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className={`bg-gray-900/60 backdrop-blur-sm rounded-xl border border-${category.color}-400/20 p-8 hover:border-${category.color}-400/40 transition-all duration-300 hover:transform hover:scale-105 relative overflow-hidden group`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br from-${category.color}-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-8">
                    <div className={`p-4 rounded-full bg-${category.color}-400/10 border border-${category.color}-400/20 mr-4 group-hover:animate-pulse`}>
                      <IconComponent 
                        className={`text-${category.color}-400`} 
                        size={32} 
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-2xl font-bold text-${category.color}-400 font-mono mb-1`}>
                        {category.title}
                      </h3>
                      <p className="text-gray-400 font-mono text-sm">{category.description}</p>
                      <div className={`w-16 h-0.5 bg-${category.color}-400 mt-2`}></div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="relative group/skill cursor-pointer p-6 rounded-lg bg-gray-800/30 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:transform hover:scale-105"
                        onMouseEnter={() => setHoveredSkill(`${category.title}-${skill.name}`)}
                        onMouseLeave={() => setHoveredSkill(null)}
                      >
                        {/* Skill Image */}
                        {skill.image && (
                          <div className="flex justify-center mb-4">
                            <img 
                              src={skill.image} 
                              alt={skill.name}
                              className="w-16 h-16 object-contain filter brightness-0 invert opacity-80 group-hover/skill:opacity-100 transition-opacity duration-300"
                            />
                          </div>
                        )}
                        
                        <div className="text-center mb-4">
                          <span className="text-white font-mono text-lg font-semibold block mb-2">{skill.name}</span>
                          <p className="text-gray-400 font-mono text-sm">{skill.description}</p>
                        </div>
                        
                        <div className="flex items-center justify-center mb-4">
                          <span className={`text-${getSkillLevelColor(skill.level)}-400 font-mono text-sm font-semibold mr-3`}>
                            {getSkillLevel(skill.level)}
                          </span>
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, starIndex) => (
                              <Star
                                key={starIndex}
                                size={14}
                                className={`${
                                  starIndex < getSkillStars(skill.level)
                                    ? `text-${getSkillLevelColor(skill.level)}-400 fill-current`
                                    : 'text-gray-600'
                                } transition-colors duration-200`}
                              />
                            ))}
                          </div>
                        </div>
                        
                        {/* Skill Progress Bar */}
                        <div className="relative h-3 bg-gray-800 rounded-full overflow-hidden mb-4">
                          <div
                            className={`h-full bg-gradient-to-r from-${getSkillLevelColor(skill.level)}-400 to-${getSkillLevelColor(skill.level)}-300 rounded-full transition-all duration-1000 ease-out relative`}
                            style={{ 
                              width: `${skill.level}%`,
                              animationDelay: `${index * 0.1 + skillIndex * 0.05}s`
                            }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                          </div>
                        </div>
                        
                        {/* Skill Level Indicator */}
                        <div className="text-center">
                          <span className={`text-${getSkillLevelColor(skill.level)}-400 font-mono text-sm font-semibold block mb-1`}>
                            {skill.level}% Proficiency
                          </span>
                          <div className="flex items-center justify-center gap-2">
                            <TrendingUp size={14} className={`text-${getSkillLevelColor(skill.level)}-400`} />
                            <span className="text-gray-500 font-mono text-sm">{skill.experience}</span>
                          </div>
                        </div>
                        
                        {/* Hover Tooltip */}
                        {hoveredSkill === `${category.title}-${skill.name}` && (
                          <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 z-20">
                            <div className={`px-4 py-3 bg-${getSkillLevelColor(skill.level)}-400/20 border border-${getSkillLevelColor(skill.level)}-400/40 rounded-lg text-sm font-mono text-${getSkillLevelColor(skill.level)}-400 whitespace-nowrap animate-fadeInUp backdrop-blur-sm`}>
                              <div className="font-semibold">{skill.experience} experience</div>
                              <div className="text-xs opacity-80">{getSkillLevel(skill.level)} level</div>
                              <div className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-${getSkillLevelColor(skill.level)}-400/20 border-r border-b border-${getSkillLevelColor(skill.level)}-400/40 rotate-45`}></div>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Skills Summary */}
        <div className="mt-16 grid md:grid-cols-4 gap-6">
          <div className="text-center p-6 rounded-xl bg-cyan-400/5 border border-cyan-400/20 hover:bg-cyan-400/10 transition-all duration-300 hover:transform hover:scale-105">
            <div className="flex items-center justify-center mb-3">
              <Award className="text-cyan-400 mr-2" size={24} />
              <div className="text-3xl font-bold text-cyan-400 font-mono">3</div>
            </div>
            <div className="text-gray-400 font-mono text-sm">Specializations</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-lime-400/5 border border-lime-400/20 hover:bg-lime-400/10 transition-all duration-300 hover:transform hover:scale-105">
            <div className="flex items-center justify-center mb-3">
              <Target className="text-lime-400 mr-2" size={24} />
              <div className="text-3xl font-bold text-lime-400 font-mono">12</div>
            </div>
            <div className="text-gray-400 font-mono text-sm">Technologies</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-magenta-400/5 border border-magenta-400/20 hover:bg-magenta-400/10 transition-all duration-300 hover:transform hover:scale-105">
            <div className="flex items-center justify-center mb-3">
              <TrendingUp className="text-magenta-400 mr-2" size={24} />
              <div className="text-3xl font-bold text-magenta-400 font-mono">85%</div>
            </div>
            <div className="text-gray-400 font-mono text-sm">Avg Proficiency</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-purple-400/5 border border-purple-400/20 hover:bg-purple-400/10 transition-all duration-300 hover:transform hover:scale-105">
            <div className="flex items-center justify-center mb-3">
              <Star className="text-purple-400 mr-2 fill-current" size={24} />
              <div className="text-3xl font-bold text-purple-400 font-mono">∞</div>
            </div>
            <div className="text-gray-400 font-mono text-sm">Learning</div>
          </div>
        </div>
      </div>
    </section>
      <ScrollDownArrow targetSection="projects" onSectionChange={onSectionChange} />
    </>
  );
};

export default Skills;