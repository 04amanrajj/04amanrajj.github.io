import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import SkillsDesktop from './SkillsDesktop';
import SkillsMobile from './SkillsMobile';

const SkillsSection: React.FC = () => {
  const isMobile = useIsMobile();
  return isMobile ? <SkillsMobile /> : <SkillsDesktop />;
};

export default SkillsSection;
