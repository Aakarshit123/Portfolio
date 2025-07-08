import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send, CheckCircle, MapPin, Phone, Clock, MessageSquare, User, Briefcase } from 'lucide-react';
import ScrollDownArrow from './ScrollDownArrow';

const Contact: React.FC<{ onSectionChange: (section: string) => void }> = ({ onSectionChange }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setShowSuccess(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
    
    setTimeout(() => setShowSuccess(false), 4000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Github,
      title: 'GitHub',
      subtitle: 'Aakarshit123',
      description: 'Explore my repositories and open source contributions',
      link: 'https://github.com/Aakarshit123',
      color: 'cyan',
      align: 'left'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      subtitle: 'Aakarshit Bargotra',
      description: 'Connect with me for professional opportunities',
      link: 'https://linkedin.com/in/aakarshit-bargotra',
      color: 'magenta',
      align: 'right'
    },
    {
      icon: Mail,
      title: 'Email',
      subtitle: 'aakarshit.cse@gmail.com',
      description: 'Send me a direct message for collaborations',
      link: 'mailto:aakarshit.cse@gmail.com',
      color: 'lime',
      align: 'left'
    }
  ];

  const quickInfo = [
    { icon: MapPin, label: 'Location', value: 'India', color: 'cyan' },
    { icon: Clock, label: 'Timezone', value: 'IST (UTC+5:30)', color: 'lime' },
    { icon: Phone, label: 'Response Time', value: '< 24 hours', color: 'magenta' }
  ];

  const subjects = [
    'General Inquiry',
    'Project Collaboration',
    'Job Opportunity',
    'Technical Discussion',
    'Freelance Work',
    'Other'
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-gray-900/30 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-16 left-16 w-56 h-56 border border-cyan-400/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-24 right-16 w-40 h-40 border border-magenta-400/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-lime-400 rounded-full animate-ping opacity-40"></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-purple-400 rounded-full animate-ping delay-500 opacity-40"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold neon-text-cyan font-mono mb-4">
            Get In Touch
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 via-magenta-400 to-lime-400 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 font-mono max-w-2xl mx-auto">
            Let's discuss your next project or explore opportunities for collaboration
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info & Quick Details */}
          <div className="space-y-8">
            {/* Intro Card */}
            <div className="bg-gray-900/60 backdrop-blur-sm rounded-xl border border-cyan-400/20 p-8 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex items-center mb-6">
                <div className="p-4 rounded-full bg-cyan-400/10 border border-cyan-400/20 mr-4">
                  <MessageSquare className="text-cyan-400" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold neon-text-cyan font-mono">Let's Connect</h3>
                  <div className="w-16 h-0.5 bg-cyan-400 mt-2"></div>
                </div>
              </div>
              <p className="text-gray-300 text-lg font-mono leading-relaxed">
                I'm always open to discussing new opportunities, 
                collaborating on exciting projects, or sharing insights 
                about technology and innovation.
              </p>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-1 gap-4">
              {quickInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div
                    key={index}
                    className={`flex items-center p-6 rounded-xl bg-${info.color}-400/5 border border-${info.color}-400/20 hover:bg-${info.color}-400/10 transition-all duration-300 hover:transform hover:scale-105 group`}
                  >
                    <div className={`p-3 rounded-full bg-${info.color}-400/10 border border-${info.color}-400/20 mr-4`}>
                      <IconComponent 
                        className={`text-${info.color}-400 group-hover:animate-pulse`} 
                        size={24} 
                      />
                    </div>
                    <div>
                      <p className={`text-${info.color}-400 font-mono font-semibold mb-1`}>{info.label}</p>
                      <p className="text-gray-300 font-mono">{info.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Contact Methods - Enhanced Layout */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div
                    key={index}
                    className={`group relative overflow-hidden rounded-xl border border-${info.color}-400/20 bg-${info.color}-400/5 hover:bg-${info.color}-400/10 transition-all duration-300 hover:transform hover:scale-105 ${
                      info.align === 'right' ? 'contact-item-right lg:flex-row-reverse lg:text-right' : 'contact-item-left'
                    }`}
                  >
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-${info.align === 'right' ? 'l' : 'r'} from-${info.color}-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                    
                    <div className={`relative z-10 flex items-center p-8 ${info.align === 'right' ? 'lg:flex-row-reverse' : ''}`}>
                      <div className={`p-4 rounded-full bg-${info.color}-400/10 border border-${info.color}-400/20 group-hover:animate-pulse ${
                        info.align === 'right' ? 'ml-6 lg:ml-0 lg:mr-6' : 'mr-6'
                      }`}>
                        <IconComponent 
                          className={`text-${info.color}-400`} 
                          size={32} 
                        />
                      </div>
                      <div className={info.align === 'right' ? 'lg:text-right' : ''}>
                        <h4 className={`font-bold text-${info.color}-400 font-mono text-xl mb-2`}>
                          {info.title}
                        </h4>
                        <a
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-cyan-400 transition-colors font-mono text-lg block mb-2 font-semibold"
                        >
                          {info.subtitle}
                        </a>
                        <p className="text-gray-400 font-mono">{info.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <div className="bg-gray-900/60 backdrop-blur-sm rounded-xl border border-cyan-400/20 p-8 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105 relative group">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-magenta-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center mb-8">
                <div className="p-4 rounded-full bg-cyan-400/10 border border-cyan-400/20 mr-4">
                  <Send className="text-cyan-400" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold neon-text-cyan font-mono">Send Message</h3>
                  <div className="w-16 h-0.5 bg-cyan-400 mt-2"></div>
                </div>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="flex items-center gap-2 text-cyan-400 font-mono text-sm mb-3 font-semibold">
                      <User size={16} />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="neon-input"
                    />
                  </div>
                  <div>
                    <label className="flex items-center gap-2 text-cyan-400 font-mono text-sm mb-3 font-semibold">
                      <Mail size={16} />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="neon-input"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="flex items-center gap-2 text-cyan-400 font-mono text-sm mb-3 font-semibold">
                    <Briefcase size={16} />
                    Subject *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="neon-input"
                  >
                    <option value="">Select a subject</option>
                    {subjects.map((subject, index) => (
                      <option key={index} value={subject} className="bg-gray-900 text-white">
                        {subject}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="flex items-center gap-2 text-cyan-400 font-mono text-sm mb-3 font-semibold">
                    <MessageSquare size={16} />
                    Message *
                  </label>
                  <textarea
                    name="message"
                    placeholder="Tell me about your project or just say hello..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="neon-textarea"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full glow-button-cyan group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-cyan-400"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} className="group-hover:animate-bounce" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Enhanced Success Toast */}
            {showSuccess && (
              <div className="absolute top-4 right-4 z-50 animate-fadeInUp">
                <div className="success-toast">
                  <div className="flex items-center gap-3">
                    <CheckCircle size={24} className="text-lime-400" />
                    <div>
                      <p className="font-mono font-semibold">Message sent successfully!</p>
                      <p className="font-mono text-sm opacity-80">I'll get back to you soon.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <ScrollDownArrow targetSection="home" onSectionChange={onSectionChange} />
    </section>
  );
};

export default Contact;