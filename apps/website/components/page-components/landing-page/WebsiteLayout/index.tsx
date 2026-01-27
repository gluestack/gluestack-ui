import React from 'react';
import { Box } from '@/components/ui/box';
import HeaderWithSidebar from './HeaderWithSidebar';
import GluestackV4Banner from '../Gluestack-v4-banner';

function WebsiteLayout({
  children,
}: {
  applyBgImage?: boolean;
  children: any;
}) {
  return (
    <div
      className="w-screen h-dvh overflow-hidden overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] scrollbar-hide"
      style={{
        height: '100dvh', // Fallback for browsers that don't support dvh
        minHeight: '-webkit-fill-available', // iOS Safari specific fix
      }}
    >
      <HeaderWithSidebar />
      <Box>{children}</Box>
      <GluestackV4Banner />
    </div>
  );
}

export default WebsiteLayout;
