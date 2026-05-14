import React from 'react';
import AboutDesktop from './AboutDesktop';
import AboutMobile from './AboutMobile';

const AboutSection: React.FC = () => {
  return (
    <>
      <div className="md:hidden">
        <AboutMobile />
      </div>
      <div className="hidden md:block">
        <AboutDesktop />
      </div>
    </>
  );
};

export default AboutSection;
