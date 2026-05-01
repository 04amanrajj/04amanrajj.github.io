
import React from 'react';
import Navbar from '@/components/Navbar';
import BottomNav from '@/components/BottomNav';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import GoToTop from '@/components/GoToTop';
import CertificatesSection from '@/components/CertificatesSection';

const Index = () => {
  React.useEffect(() => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animated-section').forEach((section) => {
      observer.observe(section);
    });

    return () => {
      document.querySelectorAll('.animated-section').forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <>
      <Navbar />
      {/* Extra bottom padding on mobile for BottomNav */}
      <main className="main-with-bottom-nav md:pb-0">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <CertificatesSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
      <GoToTop />
      <BottomNav />
    </>
  );
};

export default Index;
