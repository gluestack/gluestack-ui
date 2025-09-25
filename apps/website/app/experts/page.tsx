'use client';
import { useContext } from 'react';
import { ThemeContext } from '@/utils/context/theme-context';
import { Widget } from '@typeform/embed-react';
import { Box } from '@/components/ui/box';
import WebsiteLayout from '@/components/page-components/landing-page/WebsiteLayout';
import BadgeComponent from '@/components/page-components/landing-page/BadgeComponent';
import Footer from '@/components/page-components/landing-page/Footer';

export default function Expert() {
  const { colorMode } = useContext(ThemeContext);

  return (
    <WebsiteLayout applyBgImage={true}>
      <Box className="justify-center self-center mx-auto max-w-[1440px] w-[85%]">
        <Box className="">
          <Widget
            id={colorMode === 'light' ? 'aRuH9GIE' : 's2VB1ZKy'}
            disableScroll
            inlineOnMobile
            className="bg-background-0 pt-[48px] lg:pt-[53px] w-full h-[100vh]"
          />
        </Box>
      </Box>
      <BadgeComponent />
      <Footer />
    </WebsiteLayout>
  );
}
