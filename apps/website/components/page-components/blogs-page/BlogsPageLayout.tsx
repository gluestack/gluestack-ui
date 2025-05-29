'use client';
import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { Blog } from '@/components/page-components/blogs-page/mdx-components';
import Footer from '@/components/page-components/landing-page/Footer';
import WebsiteLayout from '@/components/page-components/landing-page/WebsiteLayout';
import BadgeComponent from '@/components/page-components/landing-page/BadgeComponent';
import { Box } from '@/components/ui';
import { usePathname } from 'next/navigation';

export default function BlogsPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <WebsiteLayout applyBgImage={true}>
      <Blog MDXProvider={MDXProvider}>{children}</Blog>
      <BadgeComponent />
      <Box className={pathname === '/blogs' ? 'w-full' : 'xl:w-[70%]'}>
        <BadgeComponent />
        <Footer />
      </Box>
    </WebsiteLayout>
  );
}
