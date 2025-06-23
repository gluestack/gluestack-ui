'use client';
import { Box } from '@/components/ui/box';
import WebsiteLayout from '@/components/page-components/landing-page/WebsiteLayout';
import BadgeComponent from '@/components/page-components/landing-page/BadgeComponent';
import Footer from '@/components/page-components/landing-page/Footer';

export default function ExpertLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <WebsiteLayout applyBgImage={true}>
      <Box className="justify-center self-center mx-auto max-w-[1440px] w-[85%]">
        <Box className="">{children}</Box>
      </Box>
      <BadgeComponent />
      <Footer />
    </WebsiteLayout>
  );
}
