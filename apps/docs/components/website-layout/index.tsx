import React, { useState, useEffect } from 'react';
import { Box } from '@/components/ui';
import Header from '@/components/custom/header';

function WebsiteLayout({
  applyBgImage,
  children,
}: {
  applyBgImage?: boolean;
  children: any;
}) {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
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
    <Box className={` web:flex-${isOpenSidebar ? '1' : 'none'} w-screen`}>
      <Header
        // @ts-ignore
        isOpenSidebar={isOpenSidebar}
        setIsOpenSidebar={setIsOpenSidebar}
      />

      {applyBgImage && (
        <Box className="web:block absolute top-0 left-0 right-0 -z-1">
          {/* <BgImage /> */}
        </Box>
      )}

      <Box className={`${isOpenSidebar ? 'opacity-0' : 'opacity-100'} `}>
        {children}
      </Box>
    </Box>
  );
}

export default WebsiteLayout;

// pt-40 md:pt-[140px]