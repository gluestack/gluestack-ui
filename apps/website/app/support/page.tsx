'use client';
import React from 'react';
import { Box } from '@/components/ui';
import BadgeComponent from '@/components/page-components/landing-page/BadgeComponent';
import Footer from '@/components/page-components/landing-page/Footer';
import SupportFormFold from './SupportFormFold';
import BackedByGeekyAnts from './BackedByGeekyAnts';
import Diversified from './Diversified';
import WebsiteLayout from '@/components/page-components/landing-page/WebsiteLayout';

const Support = () => {
  return (
    <WebsiteLayout applyBgImage={true}>
      <Box className="pb-20">
        <Box className="justify-center max-w-[1440px] w-[85%] my-0 mx-auto relative">
          <SupportFormFold />
        </Box>
      </Box>
      <Box className="justify-center max-w-[1440px] w-[85%] my-0 mx-auto relative mt-20 md:mt-[200px]">
        <BackedByGeekyAnts />
      </Box>
      <Box className="justify-center max-w-[1440px] w-[85%] my-0 mx-auto relative">
        <Box className="absolute top-[5%] -bottom-[36%] -left-[30%] right-[95%] md:flex" />
        <Diversified />
      </Box>
      <BadgeComponent />
      <Footer />
    </WebsiteLayout>
  );
};

export default Support;
