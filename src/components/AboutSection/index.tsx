import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import AboutDesktop from './AboutDesktop';
import AboutMobile from './AboutMobile';

const AboutSection: React.FC = () => {
  const isMobile = useIsMobile();
  return isMobile ? <AboutMobile /> : <AboutDesktop />;
};

export default AboutSection;
