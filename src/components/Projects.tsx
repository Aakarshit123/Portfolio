import React, { useState } from 'react';
import { ExternalLink, Github, Code, Star, Users, GitBranch, Award, Target, Folder, Wrench, Bot } from 'lucide-react';
import ScrollDownArrow from './ScrollDownArrow';
// Import logos for WhatsApp and Instagram
import jenkinsLogo from '../assets/jenkins-logo.png';

const PYTHON_TASKS_REPO = 'https://github.com/Aakarshit123/Python_Tasks';
const pythonFiles = [
  { name: 'call.py', description: 'Automate phone call tasks using Python.' },
  { name: 'email.py', description: 'Send and manage emails programmatically.' },
  { name: 'facebook.py', description: 'Interact with Facebook using Python scripts.' },
  { name: 'instagram.py', description: 'Automate Instagram actions and data scraping.' },
  { name: 'linkedin.py', description: 'LinkedIn automation and data extraction.' },
  { name: 'menu.py', description: 'Main menu to access all Python tasks in the repo.' },
  { name: 'sms.py', description: 'Send and receive SMS using Python.' },
  { name: 'twitter.py', description: 'Automate Twitter tasks and data collection.' },
  { name: 'whatsapp.py', description: 'WhatsApp automation and messaging.' },
];

const projectCategories = [
  {
    title: 'DevOps Projects',
    icon: Wrench,
    color: 'cyan',
    description: 'Automation, CI/CD, and Infrastructure Solutions',
    projects: [
      {
        id: 'jenkins-docker',
        title: 'Docker Automation with Jenkins',
        description: 'Automated CI/CD pipeline with Jenkins and Docker containerization for seamless deployment and continuous integration workflows.',
        tech: ['Jenkins', 'Docker', 'Git', 'Linux'],
        github: 'https://github.com/Aakarshit123/project.git',
        image: jenkinsLogo,
        stats: { stars: 0, commits: 1, contributors: 1 },
        status: 'Production',
        featured: true
      },
      {
        id: 'docker-menu',
        title: 'Docker Menu',
        description: 'A menu-driven Python tool for managing Docker containers and images.',
        tech: ['Python', 'Docker'],
        github: 'https://github.com/Aakarshit123/unified_streamlit_app.git',
        demo: 'https://abargotra1.streamlit.app/',
        image: 'https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=800',
        stats: { stars: 0, commits: 1, contributors: 1 },
        status: 'Active',
        featured: false
      }
    ]
  },
  {
    title: 'Full Stack Projects',
    icon: Code,
    color: 'lime',
    description: 'Web Applications & Interactive Development Tools',
    projects: [
      {
        id: 'portfolio',
        title: 'Portfolio Website',
        description: 'Modern React portfolio with neon aesthetics, smooth animations, and responsive design showcasing my projects and skills.',
        tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
        github: 'https://github.com/Aakarshit123/Portfolio.git',
        demo: 'https://aakarshitcodes.netlify.app/',
        image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800',
        stats: { stars: 0, commits: 1, contributors: 1 },
        status: 'Production',
        featured: true
      },
      {
        id: 'html-interpreter',
        title: 'HTML Interpreter',
        description: 'Real-time HTML/CSS/JS editor with live preview functionality, syntax highlighting, and collaborative features for web development.',
        tech: ['Python'],
        github: 'https://github.com/Aakarshit123/html-interpreter.git',
        image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800',
        stats: { stars: 0, commits: 1, contributors: 1 },
        status: 'Production',
        featured: true
      },
      {
        id: 'webcam-app',
        title: 'Webcam App',
        description: 'Browser-based camera application with image capture, real-time filters, and advanced video processing capabilities.',
        tech: ['Python', 'OpenCV'],
        github: 'https://github.com/Aakarshit123/webcam-app.git',
        image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
        stats: { stars: 0, commits: 1, contributors: 1 },
        status: 'Beta',
        featured: false
      },
      {
        id: 'location-app',
        title: 'Location App',
        description: 'A location-based application for real-time tracking and geolocation services.',
        tech: ['Python', 'Geolocation'],
        github: 'https://github.com/Aakarshit123/location-app.git',
        image: 'https://images.pexels.com/photos/1181245/pexels-photo-1181245.jpeg?auto=compress&cs=tinysrgb&w=800',
        stats: { stars: 0, commits: 1, contributors: 1 },
        status: 'Active',
        featured: false
      }
    ]
  },
  {
    title: 'AI & Utility Projects',
    icon: Bot,
    color: 'magenta',
    description: 'Machine Learning & Intelligent System Solutions',
    projects: [
      {
        id: 'ai-chatbot-app',
        title: 'AI Chatbot App',
        description: 'Intelligent chatbot that recommends movies based on user preferences, viewing history, and advanced machine learning algorithms.',
        tech: ['Python', 'NLP', 'Machine Learning'],
        github: 'https://github.com/Aakarshit123/chatbot-app.git',
        image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=800',
        stats: { stars: 0, commits: 1, contributors: 1 },
        status: 'Production',
        featured: true,
        demo: 'https://abargotra1.streamlit.app/',
      }
    ]
  },
  {
    title: 'Python Automation Tasks',
    icon: Folder,
    color: 'cyan',
    description: 'A collection of Python scripts for automating daily tasks and social media.',
    projects: pythonFiles.map(file => ({
      id: file.name.replace('.py', ''),
      title: file.name === 'menu.py' ? 'All Tasks Menu' : file.name.replace('.py', '').replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
      description: file.description,
      tech: ['Python', 'Automation'],
      github: `${PYTHON_TASKS_REPO}/blob/main/${file.name}`,
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
      stats: { stars: 0, commits: 1, contributors: 1 },
      status: 'Active',
      featured: file.name === 'menu.py',
      demo: 'https://abargotra1.streamlit.app/',
    }))
  }
];

const Projects: React.FC<{ onSectionChange: (section: string) => void }> = ({ onSectionChange }) => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Production': return 'lime';
      case 'Active': return 'cyan';
      case 'Beta': return 'magenta';
      default: return 'purple';
    }
  };

  return (
    <section id="projects" className="py-20 px-6 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-32 right-16 w-48 h-48 border border-cyan-400/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 left-16 w-36 h-36 border border-magenta-400/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-lime-400 rounded-full animate-ping opacity-60"></div>
        <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-purple-400 rounded-full animate-ping delay-700 opacity-60"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold neon-text-cyan font-mono mb-4">
            Featured Projects
          </h2>
          <div className="w-40 h-1 bg-gradient-to-r from-cyan-400 via-lime-400 to-magenta-400 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 font-mono max-w-2xl mx-auto">
            A showcase of my work in DevOps automation, full-stack development, and AI-powered solutions
          </p>
        </div>

        <div className="space-y-20">
          {projectCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <div key={categoryIndex} className="space-y-8">
                {/* Category Header */}
                <div className="text-center">
                  <div className="inline-flex items-center gap-4 mb-6">
                    <div className={`p-4 rounded-full bg-${category.color}-400/10 border border-${category.color}-400/20`}>
                      <IconComponent className={`text-${category.color}-400`} size={36} />
                    </div>
                    <h3 className={`text-3xl font-bold font-mono text-${category.color}-400`}>{category.title}</h3>
                  </div>
                  <p className="text-gray-400 font-mono max-w-xl mx-auto">{category.description}</p>
                </div>
                {/* Projects Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                  {category.projects.map((project, projectIndex) => (
                    <div
                      key={project.id}
                      className={`group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-md border border-${category.color}-400/10 shadow-2xl hover:border-lime-400 hover:-rotate-2 hover:scale-105 transition-all duration-500 h-full flex flex-col`}
                      style={{ animationDelay: `${projectIndex * 0.2}s`, animationName: 'fadeInUp' }}
                      onMouseEnter={() => setHoveredProject(project.id)}
                      onMouseLeave={() => setHoveredProject(null)}
                      tabIndex={0}
                      aria-label={`Project: ${project.title}`}
                    >
                      {/* Featured Badge */}
                      {project.featured && (
                        <div className="absolute top-4 right-4 z-20">
                          <div className={`px-3 py-1 bg-gradient-to-r from-lime-400/80 to-cyan-400/80 border border-lime-400/60 rounded-full text-xs font-mono text-white font-bold shadow-lg flex items-center gap-1 animate-pulse`}> 
                            <Star size={12} className="fill-current text-yellow-300" />
                            Featured
                          </div>
                        </div>
                      )}

                      {/* Status Badge */}
                      <div className="absolute top-4 left-4 z-20">
                        <div className={`px-3 py-1 bg-${getStatusColor(project.status)}-400/20 border border-${getStatusColor(project.status)}-400/40 rounded-full text-xs font-mono text-${getStatusColor(project.status)}-400`}>
                          {project.status}
                        </div>
                      </div>

                      {/* Project Image */}
                      <div className="relative aspect-video overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 group-hover:brightness-90 transition-transform duration-500 rounded-xl shadow-lg"
                          style={{ minHeight: '180px', maxHeight: '260px' }}
                        />
                        <div className={`absolute inset-0 bg-gradient-to-t from-${category.color}-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                        
                        {/* Hover Overlay */}
                        {hoveredProject === project.id && (
                          <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm flex items-center justify-center animate-fadeInUp">
                            <div className="text-center space-y-4">
                              <div className="flex items-center justify-center gap-6">
                                <a
                                  href={project.github}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={`p-4 rounded-full bg-${category.color}-400/20 border border-${category.color}-400/40 text-${category.color}-400 hover:bg-${category.color}-400/30 transition-colors`}
                                >
                                  <Github size={28} />
                                </a>
                                {project.demo && (
                                  <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`p-4 rounded-full bg-${category.color}-400/20 border border-${category.color}-400/40 text-${category.color}-400 hover:bg-${category.color}-400/30 transition-colors`}
                                  >
                                    <ExternalLink size={28} />
                                  </a>
                                )}
                              </div>
                              <p className="text-gray-300 font-mono">Click to explore</p>
                            </div>
                          </div>
                        )}
                      </div>
                      
                      {/* Project Content */}
                      <div className="p-6 space-y-4 flex-1 flex flex-col">
                        <div className="flex items-start justify-between">
                          <h4 className="text-xl font-bold text-white font-mono group-hover:text-cyan-400 transition-colors">
                            {project.title}
                          </h4>
                        </div>
                        
                        <p className="text-gray-300 leading-relaxed font-mono flex-1">
                          {project.description}
                        </p>
                        
                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className={`px-3 py-1 text-sm rounded-full bg-${category.color}-400/10 text-${category.color}-400 border border-${category.color}-400/30 font-mono hover:bg-${category.color}-400/20 transition-colors`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        
                        {/* Project Stats */}
                        <div className="flex items-center justify-between pt-4 border-t border-gray-700/50 mt-auto">
                          <div className="flex items-center gap-4 text-sm font-mono text-gray-400">
                            <div className="flex items-center gap-1">
                              <Star size={14} />
                              <span>{project.stats.stars}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <GitBranch size={14} />
                              <span>{project.stats.commits}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Users size={14} />
                              <span>{project.stats.contributors}</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Action Buttons */}
                        <div className="flex gap-2 pt-4">
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-${category.color}-400/10 text-${category.color}-400 hover:bg-${category.color}-400/20 transition-colors border border-${category.color}-400/30 text-sm font-mono`}
                          >
                            <Github size={16} />
                            Code
                          </a>
                          {project.demo && (
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-lime-400/10 text-lime-400 hover:bg-lime-400/20 transition-colors border border-lime-400/30 text-sm font-mono font-bold`}
                            >
                              <ExternalLink size={16} />
                              Live Demo
                            </a>
                          )}
                        </div>
                      </div>

                      {/* Glow Effect */}
                      <div className={`absolute inset-0 rounded-xl bg-gradient-to-r from-${category.color}-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}></div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Projects Summary */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-8 p-8 rounded-xl bg-gray-900/60 backdrop-blur-sm border border-cyan-400/20">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Award className="text-cyan-400 mr-2" size={24} />
                <div className="text-2xl font-bold text-cyan-400 font-mono">15</div>
              </div>
              <div className="text-gray-400 font-mono text-sm">Projects</div>
            </div>
            <div className="w-px h-12 bg-gray-600"></div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Target className="text-lime-400 mr-2" size={24} />
                <div className="text-2xl font-bold text-lime-400 font-mono">3</div>
              </div>
              <div className="text-gray-400 font-mono text-sm">Categories</div>
            </div>
            <div className="w-px h-12 bg-gray-600"></div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Star className="text-magenta-400 mr-2 fill-current" size={24} />
                <div className="text-2xl font-bold text-magenta-400 font-mono">100+</div>
              </div>
              <div className="text-gray-400 font-mono text-sm">Stars</div>
            </div>
          </div>
        </div>
      </div>
      <ScrollDownArrow targetSection="contact" onSectionChange={onSectionChange} />
      <style>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Projects;