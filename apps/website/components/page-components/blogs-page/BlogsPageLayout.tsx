'use client';
import React from 'react';
import Footer from '@/components/page-components/landing-page/Footer';
import WebsiteLayout from '@/components/page-components/landing-page/WebsiteLayout';
import BadgeComponent from '@/components/page-components/landing-page/BadgeComponent';
import { Box } from '@/components/ui/box';
import { usePathname } from 'next/navigation';

export default function BlogsPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <WebsiteLayout>
      <Box className="flex-1 mt-5 flex-row w-[85%] max-w-[1440px] mx-auto pt-40 md:pt-[140px]">
        <Box className="flex-1 w-full h-full">{children}</Box>
      </Box>
      <BadgeComponent />
      <Box className={pathname === '/blogs' ? 'w-full' : 'xl:w-[70%]'}>
        <BadgeComponent />
      </Box>
      <Footer />
    </WebsiteLayout>
  );
}
