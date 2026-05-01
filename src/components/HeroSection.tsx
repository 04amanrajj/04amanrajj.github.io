import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden dark:bg-gray-950 pt-14">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-white dark:from-gray-900 dark:via-gray-950 dark:to-gray-950" />

      <div className="relative z-10 w-full max-w-lg mx-auto px-5 flex flex-col items-center text-center gap-5">

        {/* Profile photo — prominent on mobile */}
        <div className="relative mt-4 md:hidden">
          <div className="w-28 h-28 rounded-full ring-4 ring-primary/30 ring-offset-4 ring-offset-white dark:ring-offset-gray-950 overflow-hidden shadow-xl">
            <img src="/aman.jpg" alt="Aman Raj"
              className="w-full h-full object-cover object-top scale-110" />
          </div>
          <span className="absolute -bottom-1 -right-1 bg-green-500 w-4 h-4 rounded-full border-2 border-white dark:border-gray-950" />
        </div>

        {/* Badge */}
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary ring-1 ring-primary/20">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          Open to opportunities
        </span>

        {/* Heading */}
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-1 tracking-widest uppercase">Hi, I'm</p>
          <h1 className="text-3xl md:text-6xl font-bold tracking-tight">
            <span className="text-primary">Aman Raj</span>
          </h1>
          <p className="text-base md:text-xl text-gray-600 dark:text-gray-300 mt-2 font-medium">
            MERN-Stack Developer
          </p>
        </div>

        {/* Short bio */}
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-xs md:max-w-md">
          Building scalable web apps with React, Node.js &amp; modern cloud storage. API-first, mobile-ready.
        </p>

        {/* Social links — horizontal pill row on mobile */}
        <div className="flex items-center gap-3">
          <a href="https://github.com/04amanrajj" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-medium px-3 py-2 rounded-full bg-gray-900 dark:bg-gray-700 text-white active:scale-95 transition-transform">
            <Github className="h-3.5 w-3.5" /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/aman-raj-226875339" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-medium px-3 py-2 rounded-full bg-[#0077B5] text-white active:scale-95 transition-transform">
            <Linkedin className="h-3.5 w-3.5" /> LinkedIn
          </a>
          <a href="mailto:04.aman.raj@gmail.com"
            className="flex items-center gap-1.5 text-xs font-medium px-3 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 active:scale-95 transition-transform">
            <Mail className="h-3.5 w-3.5" /> Email
          </a>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-3 w-full max-w-xs">
          <Button asChild className="flex-1 h-11 text-sm font-semibold rounded-xl shadow-md shadow-primary/20">
            <a href="#contact" onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
              Get in touch
            </a>
          </Button>
          <Button variant="outline" asChild className="flex-1 h-11 text-sm font-semibold rounded-xl">
            <a href="https://drive.google.com/file/d/1ulgsHynUamUKVP8vN-FigiztH0DsHL29/view?usp=sharing"
              target="_blank" rel="noopener noreferrer">
              <Download className="h-4 w-4 mr-1.5" /> Download CV
            </a>
          </Button>
        </div>

        {/* Desktop profile image */}
        <div className="hidden md:block mt-4">
          <div className="w-48 h-48 rounded-full ring-4 ring-primary/20 ring-offset-4 overflow-hidden shadow-2xl">
            <img src="/aman.jpg" alt="Aman Raj" className="w-full h-full object-cover object-top scale-110" />
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <button onClick={scrollToAbout}
        className="absolute bottom-24 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-400 dark:text-gray-600 animate-bounce">
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <ChevronDown className="h-4 w-4" />
      </button>
    </section>
  );
};

export default HeroSection;
