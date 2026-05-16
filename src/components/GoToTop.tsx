import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const GoToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

  // Monitor scroll behavior for visibility and progress circle
  const handleScroll = () => {
    const scrollY = window.scrollY;
    
    // Toggle button visibility
    if (scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }

    // Calculate scroll progress percentage
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight > 0) {
      setScrollProgress((scrollY / totalHeight) * 100);
    }
  };

  // Scroll smoothly to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    // Trigger a temporary bounce animation on the arrow when clicked
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 1000);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    // Initial call in case page is already loaded at a scrolled position
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // SVG Circle parameters for progress ring
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <>
      <button
        onClick={scrollToTop}
        className={`fixed z-50 flex items-center justify-center rounded-full bg-white/70 dark:bg-gray-950/70 backdrop-blur-md border border-gray-200/50 dark:border-gray-800/50 text-gray-800 dark:text-gray-200 shadow-xl transition-all duration-500 ease-out hover:scale-110 active:scale-95 group focus:outline-none cursor-pointer
          bottom-24 right-5 md:bottom-8 md:right-8 w-12 h-12
          ${isVisible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'}`}
        aria-label="Scroll to top"
      >
        {/* Scroll Progress Ring SVG */}
        <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 48 48">
          {/* Background circle track */}
          <circle
            cx="24"
            cy="24"
            r={radius}
            className="stroke-gray-200/30 dark:stroke-gray-800/30"
            strokeWidth="2.5"
            fill="transparent"
          />
          {/* Active progress indicator (dynamic primary color stroke) */}
          <circle
            cx="24"
            cy="24"
            r={radius}
            className="stroke-primary transition-all duration-75"
            strokeWidth="2.5"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
          />
        </svg>

        {/* Dynamic Premium Icon with hover lift */}
        <ArrowUp className={`h-5 w-5 text-primary transition-transform duration-300 ease-out 
          ${isClicked ? 'animate-bounce' : 'group-hover:-translate-y-1'}`} 
        />
      </button>
    </>
  );
};

export default GoToTop;