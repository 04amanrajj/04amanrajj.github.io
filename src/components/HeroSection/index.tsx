import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import HeroDesktop from './HeroDesktop';
import HeroMobile from './HeroMobile';

const HeroSection: React.FC = () => {
  const isMobile = useIsMobile();
  return isMobile ? <HeroMobile /> : <HeroDesktop />;
};

export default HeroSection;
