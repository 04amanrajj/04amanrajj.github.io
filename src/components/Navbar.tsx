
import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, Mail, Linkedin, Menu, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useIsMobile } from '@/hooks/use-mobile';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="text-xl font-bold text-primary">
              Aman Raj
            </a>
          </div>
          
          {isMobile ? (
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-center mb-8">
                    <h3 className="text-lg font-medium">Menu</h3>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <X className="h-5 w-5" />
                    </Button>
                  </div>
                  <nav className="flex flex-col space-y-4">
                    {navLinks.map((link) => (
                      <Button 
                        key={link.name} 
                        variant="ghost" 
                        className="justify-start text-lg"
                        onClick={() => scrollToSection(link.href)}
                      >
                        {link.name}
                      </Button>
                    ))}
                  </nav>
                  <div className="mt-auto">
                    <div className="flex space-x-2 mt-6">
                      <Button size="icon" variant="outline" asChild>
                        <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">
                          <Github className="h-5 w-5" />
                        </a>
                      </Button>
                      <Button size="icon" variant="outline" asChild>
                        <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">
                          <Linkedin className="h-5 w-5" />
                        </a>
                      </Button>
                      <Button size="icon" variant="outline" asChild>
                        <a href="mailto:04.aman.raj@gmail.com">
                          <Mail className="h-5 w-5" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          ) : (
            <>
              <nav className="hidden md:flex items-center space-x-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-sm font-medium hover:text-primary transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
              <div className="hidden md:flex items-center space-x-2">
                <Button size="icon" variant="ghost" asChild>
                  <a href="https://github.com/04amanrajj" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button size="icon" variant="ghost" asChild>
                  <a href="https://www.linkedin.com/in/aman-raj-226875339" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button size="icon" variant="ghost" asChild>
                  <a href="mailto:04.aman.raj@gmail.com">
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
