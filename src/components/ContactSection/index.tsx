import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import ContactDesktop from './ContactDesktop';
import ContactMobile from './ContactMobile';

const ContactSection: React.FC = () => {
  const isMobile = useIsMobile();
  return isMobile ? <ContactMobile /> : <ContactDesktop />;
};

export default ContactSection;
