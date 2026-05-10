
import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, Mail, Linkedin, Menu, Sun, Moon } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useIsMobile } from '@/hooks/use-mobile';
import { useTheme } from '@/hooks/use-theme';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { theme, toggleTheme } = useTheme();

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificate', href: '#certificate' },
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
        scrolled
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-14 md:h-16 items-center justify-between">
          {/* Logo */}
          <a href="#hero" onClick={e => { e.preventDefault(); scrollToSection('#hero'); }}
            className="text-lg md:text-xl font-bold text-primary tracking-tight">
            Aman Raj
          </a>

          {/* Mobile: theme toggle only (bottom nav handles navigation) */}
          {isMobile ? (
            <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme"
              className="w-9 h-9">
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          ) : (
            <>
              {/* Desktop nav */}
              <nav className="hidden md:flex items-center space-x-6">
                {navLinks.map(link => (
                  <a key={link.name} href={link.href}
                    className="text-sm font-medium hover:text-primary transition-colors"
                    onClick={e => { e.preventDefault(); scrollToSection(link.href); }}>
                    {link.name}
                  </a>
                ))}
              </nav>
              <div className="hidden md:flex items-center space-x-2">
                <Button size="icon" variant="ghost" onClick={toggleTheme} aria-label="Toggle theme">
                  {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </Button>
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
