import React, { useState, useEffect } from 'react';
import { Home, FolderOpen, Layers, Mail, Award } from 'lucide-react';

const navItems = [
  { label: 'Home',       href: '#hero',        Icon: Home },
  { label: 'Projects',  href: '#projects',    Icon: FolderOpen },
  { label: 'Skills',    href: '#skills',      Icon: Layers },
  { label: 'Certs',     href: '#certificate', Icon: Award },
  { label: 'Contact',   href: '#contact',     Icon: Mail },
];

const BottomNav: React.FC = () => {
  const [active, setActive] = useState('#hero');

  useEffect(() => {
    const sections = navItems.map(n => document.querySelector(n.href)).filter(Boolean) as Element[];
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach(s => observer.observe(s));
    return () => sections.forEach(s => observer.unobserve(s));
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setActive(href);
  };

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-t border-gray-200 dark:border-gray-700 bottom-nav-height mobile-safe-bottom">
      <div className="flex items-center justify-around h-16">
        {navItems.map(({ label, href, Icon }) => {
          const isActive = active === href;
          return (
            <button
              key={href}
              onClick={() => scrollTo(href)}
              className={`flex flex-col items-center justify-center gap-0.5 px-3 py-2 rounded-xl transition-all duration-200 min-w-[56px] ${
                isActive
                  ? 'text-primary scale-105'
                  : 'text-gray-400 dark:text-gray-500 active:scale-95'
              }`}
              aria-label={label}
            >
              <Icon className={`transition-all duration-200 ${isActive ? 'w-6 h-6' : 'w-5 h-5'}`} />
              <span className={`text-[10px] font-medium transition-all duration-200 ${isActive ? 'opacity-100' : 'opacity-70'}`}>
                {label}
              </span>
              {isActive && (
                <span className="absolute bottom-0 w-8 h-0.5 rounded-full bg-primary" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
