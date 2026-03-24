import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { Heading } from '@/components/ui/heading';

import { Newsletter } from './Newsletter';
import Footer from './Footer';
import Inspiration from './Inspiration';
import PowerOfTailwind from './PowerOfTailwind';
import Example from './Example';
import Fold3 from './Fold3';
import Fold1 from './Fold1';
import Fold2 from './Fold2';
import BadgeComponent from './BadgeComponent';
import { developersData } from './Newsletter/data';
import AwardBadge from './AwardBadge';
import { SocialMediaGridTestimonial } from './Testimonials';
import WebsiteLayout from './WebsiteLayout';
import Kitchensink from './Kitchensink';
import VadimStream from './VadimStream';
import MCPServer from './MCPServer';
import HireTeam from './HireTeam';
import ThemeToggleFab from './ThemeToggleFab';
import SentryErrorHandler from './SentryErrorHandler';
import RapidNativeBanner from './RapidNativeBanner';
import HeroButtons from './HeroButtons';

const App = ({ referrer }: { referrer: string }) => {
  return (
    <>
      <SentryErrorHandler />
      <WebsiteLayout>
        <Box className="items-center justify-center">
          <VStack className="w-[85%] max-w-[1440px] justify-center self-center">
            <RapidNativeBanner />
            <VStack className="mx-auto max-w-[900px] pt-[80px] sm:pt-[120px] w-full my-0 items-center justify-center self-center">
              <Box className="flex w-full items-start sm:items-center mt-[50px] sm:mt-0">
                <AwardBadge />
              </Box>

              <Heading
                size="4xl"
                className="text-left leading-[54px] sm:text-center text-typography-950 md:text-[54px] font-plus-jakarta md:leading-[1.3em] -tracking-[0.02em] font-bold items-center max-w-[800px]"
              >
                React & React Native Components Library & Patterns
              </Heading>
              <Text className="text-left sm:text-center text-typography-950 md:text-lg text-lg font-normal mt-4 ">
                Comprehensive React and React Native component library for
                building modern, high-performance web and mobile apps.
                <Heading
                  size="2xl"
                  className="text-typography-950 md:text-lg text-lg font-normal inline"
                >
                  {' '}
                  Copy-paste UI components library & patterns crafted with
                  Tailwind CSS (NativeWind)
                </Heading>
              </Text>
            </VStack>

            <VStack className="mx-auto max-w-[950px] pt-8 w-full my-0 sm:items-center justify-center ">
              <HeroButtons />
            </VStack>

            <Fold1 />
            <Fold2 />
            <Example />
            <Fold3 />
            <PowerOfTailwind />
            <Kitchensink />
            <MCPServer />
            <VadimStream />
            <SocialMediaGridTestimonial />
            <Inspiration />
            <Newsletter newsletterAvatarData={developersData} />
            <HireTeam />
          </VStack>
          {/* GeekyAnts Hire Team Banner */}
        </Box>

        <Footer />
        <BadgeComponent />
        <ThemeToggleFab />
      </WebsiteLayout>
    </>
  );
};
export default App;
