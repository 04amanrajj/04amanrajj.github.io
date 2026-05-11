import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import CertificatesDesktop from './CertificatesDesktop';
import CertificatesMobile from './CertificatesMobile';

const CertificatesSection: React.FC = () => {
  const isMobile = useIsMobile();
  return isMobile ? <CertificatesMobile /> : <CertificatesDesktop />;
};

export default CertificatesSection;
