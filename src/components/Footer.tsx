import React from 'react';
import { Github, Linkedin, Mail, Heart, MapPin, Terminal } from 'lucide-react';

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/04amanrajj',
      icon: <Github className="h-4.5 w-4.5" />,
      color: 'hover:bg-gray-800 hover:text-white dark:hover:bg-gray-800 dark:hover:text-white',
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/aman-raj-226875339/',
      icon: <Linkedin className="h-4.5 w-4.5" />,
      color: 'hover:bg-[#0077B5] hover:text-white',
    },
    {
      name: 'Email',
      href: 'mailto:04.aman.raj@gmail.com',
      icon: <Mail className="h-4.5 w-4.5" />,
      color: 'hover:bg-primary hover:text-white',
    },
  ];

  return (
    <footer className="relative border-t border-gray-100 dark:border-gray-900 bg-white dark:bg-gray-950 overflow-hidden">
      {/* Subtle decorative background gradient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 pt-16 pb-28 md:pb-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 items-start pb-12">
          
          {/* Brand/Identity Column */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-primary to-blue-600 flex items-center justify-center text-white shadow-md shadow-primary/20">
                <Terminal className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-primary to-blue-600 dark:from-white dark:via-blue-400 dark:to-primary bg-clip-text text-transparent">
                Aman Raj
              </span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 max-w-xs leading-relaxed">
              Fullstack Software Engineer building scalable software solutions and exceptional user experiences.
            </p>
            <div className="inline-flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500 font-medium">
              <MapPin className="h-3.5 w-3.5 text-red-400" />
              <span>Rajasthan, India</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="flex flex-col items-center justify-center space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">
              Quick Links
            </h4>
            <ul className="flex flex-wrap md:flex-row gap-x-6 gap-y-2 justify-center items-center">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-sm text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-white font-medium transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Connections Column */}
          <div className="flex flex-col items-center md:items-end space-y-4 text-center md:text-right">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">
              Get in Touch
            </h4>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Let's create something remarkable together.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center h-10 w-10 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 text-gray-500 dark:text-gray-400 transition-all duration-300 hover:scale-110 hover:-translate-y-0.5 hover:shadow-sm ${social.color}`}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Thin Translucent Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent" />

        {/* Bottom Row */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
          <p>&copy; {year} Aman Raj. All rights reserved.</p>
          <div className="flex items-center gap-1.5 font-medium">
            <span>Crafted with</span>
            <Heart className="h-3.5 w-3.5 text-red-500 animate-pulse fill-red-500" />
            <span>by Aman Raj</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
