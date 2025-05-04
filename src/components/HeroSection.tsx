import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, ChevronDown } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col space-y-6 animate-fadeIn">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Hi, I'm <span className="text-primary">Aman Raj</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700">
              MERN-Stack Developer | API Development | Database Management
            </p>
            <p className="text-lg text-gray-600 max-w-lg">
              I build exceptional software solutions, integrating APIs, databases, and creating user experiences. Proficient in modern design, microservices, and testing <a href="https://github.com/04amanrajj/linux-setup/releases/tag/release">tools</a>.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <a href="#contact">Get in touch</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#projects">View projects</a>
              </Button>
              <Button variant="ghost" className="gap-2" asChild>
                <a href="https://drive.google.com/file/d/1ulgsHynUamUKVP8vN-FigiztH0DsHL29/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  <Download className="h-4 w-4" />
                  Download CV
                </a>
              </Button>
            </div>
          </div>
          <div className="hidden md:flex justify-center">
            <div className="relative h-[350px] w-[350px]">
              <div className="absolute inset-4 bg-primary rounded-full opacity-10 animate-pulse"></div>
              <div className="absolute inset-[15px] overflow-hidden rounded-full border-0 border-primary/50">
                <img 
                  src="/aman.png" 
                  alt="Aman Raj" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button 
          variant="ghost" 
          size="icon" 
          className="rounded-full"
          onClick={scrollToAbout}
        >
          <ChevronDown className="h-6 w-6" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
