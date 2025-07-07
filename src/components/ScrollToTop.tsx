import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

interface ScrollToTopProps {
  onSectionChange: (section: string) => void;
}

const ScrollToTop: React.FC<ScrollToTopProps> = ({ onSectionChange }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    onSectionChange('home');
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-cyan-400/20 border border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/30 hover:scale-110 transition-all duration-300 animate-pulse"
          style={{
            boxShadow: '0 0 20px rgba(0, 255, 255, 0.3)'
          }}
        >
          <ChevronUp size={24} />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;