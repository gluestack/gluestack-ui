import React, { useState, useEffect } from 'react';
import { Box } from '@/components/ui';
import Header from '@/components/page-components/header';
function WebsiteLayout({
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
    <div
      className={` web:flex-${isOpenSidebar ? '1' : 'none'} w-screen h-screen overflow-hidden overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]`}
    >
      <Header
        // @ts-ignore
        isOpenSidebar={isOpenSidebar}
        setIsOpenSidebar={setIsOpenSidebar}
      />
      <Box className={` ${isOpenSidebar ? 'opacity-0' : 'opacity-100'} `}>
        {children}
      </Box>
    </div>
  );
}

export default WebsiteLayout;

// pt-40 md:pt-[140px]
