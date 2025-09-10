import React, { useState, useEffect } from 'react';
import { Box } from '@/components/ui/box';
import Header from '@/components/page-components/header';
import ResponsiveSidebar from '@/components/page-components/landing-page/ResponsiveSidebar';
import ProductHuntBanner from '../ProductHuntBanner';

function WebsiteLayout({
  children,
}: {
  applyBgImage?: boolean;
  children: any;
}) {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const [showPHBanner, setShowPHBanner] = useState(true);
  useEffect(() => {
    if (isOpenSidebar) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpenSidebar]);

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (isOpenSidebar) {
        setIsOpenSidebar(false);
      }
    });
    return () => {
      window.removeEventListener('resize', () => {
        if (isOpenSidebar) {
          setIsOpenSidebar(false);
        }
      });
    };
  }, [isOpenSidebar]);
  return (
    <div
      className={` web:flex-${isOpenSidebar ? '1' : 'none'} w-screen h-dvh overflow-hidden overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] scrollbar-hide`}
      style={{
        height: '100dvh', // Fallback for browsers that don't support dvh
        minHeight: '-webkit-fill-available', // iOS Safari specific fix
      }}
    >
      <Header
        isOpenSidebar={isOpenSidebar}
        setIsOpenSidebar={setIsOpenSidebar}
      />
    
      {/* Remove this later */}
      <Box className={` ${isOpenSidebar ? 'opacity-0' : 'opacity-100'} `}>
        {children}
      </Box>
      {/* Responsive Sidebar */}
      {isOpenSidebar && (
        <ResponsiveSidebar
          isOpen={isOpenSidebar}
          setIsOpenSidebar={setIsOpenSidebar}
        />
      )}
    </div>
  );
}

export default WebsiteLayout;

// pt-40 md:pt-[140px]
