import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import ProjectsDesktop from './ProjectsDesktop';
import ProjectsMobile from './ProjectsMobile';

const ProjectsSection: React.FC = () => {
  const isMobile = useIsMobile();
  return isMobile ? <ProjectsMobile /> : <ProjectsDesktop />;
};

export default ProjectsSection;
