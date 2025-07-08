import React from 'react';
import { ChevronDown } from 'lucide-react';

interface ScrollDownArrowProps {
  targetSection: string;
  onSectionChange: (section: string) => void;
}

const ScrollDownArrow: React.FC<ScrollDownArrowProps> = ({ targetSection, onSectionChange }) => (
  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
    <button
      onClick={() => onSectionChange(targetSection)}
      className="group flex flex-col items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors animate-bounce"
    >
      <span className="text-sm font-mono opacity-70 group-hover:opacity-100">Scroll Down</span>
      <div className="relative">
        <ChevronDown size={32} className="group-hover:animate-pulse" />
        <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>
    </button>
  </div>
);

export default ScrollDownArrow; 