import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import NavbarDesktop from './NavbarDesktop';
import NavbarMobile from './NavbarMobile';
import BottomNav from './BottomNav';

const Navbar: React.FC = () => {
  const isMobile = useIsMobile();
  return isMobile ? (
    <>
      <NavbarMobile />
      <BottomNav />
    </>
  ) : (
    <NavbarDesktop />
  );
};

export default Navbar;
