import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import ExperienceDesktop from './ExperienceDesktop';
import ExperienceMobile from './ExperienceMobile';

const ExperienceSection: React.FC = () => {
  const isMobile = useIsMobile();
  return isMobile ? <ExperienceMobile /> : <ExperienceDesktop />;
};

export default ExperienceSection;
