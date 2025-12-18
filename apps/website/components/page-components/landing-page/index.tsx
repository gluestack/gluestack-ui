import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import { Icon, ArrowRightIcon } from '@/components/ui/icon';
import { Divider } from '@/components/ui/divider';

import MeetCreators from './MeetCreators';
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
import NextLink from 'next/link';
import { SocialMediaGridTestimonial } from './Testimonials';
import WebsiteLayout from './WebsiteLayout';
import AnimatedStars from '@/components/page-components/landing-page/AnimatedGithubCount';
import Kitchensink from './Kitchensink';
import VadimStream from './VadimStream';
import MCPServer from './MCPServer';
import HireTeam from './HireTeam';
import Link from 'next/link';
import ClientWrapper from './ClientWrapper';
import ThemeToggleFab from './ThemeToggleFab';

const RapidNativeBanner = () => {
  return (
    <Link
      href="https://rapidnative.com/?utm_source=gluestack.io&utm_medium=banner&utm_campaign=brand-awareness"
      target="_blank"
      className="absolute top-5 left-1/2 -translate-x-1/2 z-10 w-full max-w-[620px]"
    >
      <HStack className="bg-primary-500/90 backdrop-blur-sm rounded-full px-4 sm:px-8 py-2.5 sm:py-3.5 items-center justify-center gap-2 sm:gap-3 hover:bg-primary-600/95 transition-all duration-200 shadow-sm mx-auto">
        <Text className="text-sm sm:text-base font-medium text-typography-0 text-center">
          🎉 Prompt to React Native UI available now!
        </Text>
        <Icon
          as={ArrowRightIcon}
          className="h-4 w-4 sm:h-5 sm:w-5 text-typography-0 flex-shrink-0"
        />
      </HStack>
    </Link>
  );
};

const App = ({ referrer }: { referrer: string }) => {
  return (
    <ClientWrapper>
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
              <VStack space="xl" className="sm:flex-row">
                <NextLink
                  className="items-center web:focus:shadow-none bg-primary-500 px-6 py-2 rounded hover:bg-primary-600 active:bg-primary-600 outline-none focus-visible:ring-2 focus-visible:ring-primary-200"
                  href="/ui/docs"
                >
                  <HStack
                    space="sm"
                    className="rounded-full items-center justify-center"
                  >
                    <Text className="leading-normal font-normal text-lg text-typography-0">
                      Get Started
                    </Text>
                    <Icon
                      as={ArrowRightIcon}
                      className="text-typography-0"
                    ></Icon>
                    {/* <Icon></Icon> */}
                  </HStack>
                </NextLink>
                <NextLink
                  aria-label="github link"
                  href="https://github.com/gluestack/gluestack-ui"
                  className="web:focus:shadow-none border border-outline-300 px-6 py-2 rounded hover:bg-secondary-50 active:bg-secondary-50 focus-visible:ring-2 focus-visible:ring-primary-200"
                  style={{
                    //@ts-ignore
                    outline: 'none',
                  }}
                  target="_blank"
                >
                  <HStack className="rounded-full items-center justify-center">
                    <HStack space="sm" className="items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 16.42 4.87 20.17 8.84 21.5C9.34 21.58 9.5 21.27 9.5 21V19.31C6.73 19.91 6.14 17.97 6.14 17.97C5.68 16.81 5.03 16.5 5.03 16.5C4.12 15.88 5.1 15.9 5.1 15.9C6.1 15.97 6.63 16.93 6.63 16.93C7.5 18.45 8.97 18 9.54 17.76C9.63 17.11 9.89 16.67 10.17 16.42C7.95 16.17 5.62 15.31 5.62 11.5C5.62 10.39 6 9.5 6.65 8.79C6.55 8.54 6.2 7.5 6.75 6.15C6.75 6.15 7.59 5.88 9.5 7.17C10.29 6.95 11.15 6.84 12 6.84C12.85 6.84 13.71 6.95 14.5 7.17C16.41 5.88 17.25 6.15 17.25 6.15C17.8 7.5 17.45 8.54 17.35 8.79C18 9.5 18.38 10.39 18.38 11.5C18.38 15.32 16.04 16.16 13.81 16.41C14.17 16.72 14.5 17.33 14.5 18.26V21C14.5 21.27 14.66 21.59 15.17 21.5C19.14 20.16 22 16.42 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2Z"
                          className="fill-[currentColor]"
                        />
                      </svg>
                      <Text className="text-md text-typography-900">Stars</Text>
                    </HStack>
                    <Divider orientation="vertical" className="mx-3 h-6" />
                    <AnimatedStars />
                  </HStack>
                </NextLink>
              </VStack>
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
            <MeetCreators geekyantsLink="https://geekyants.com/hire-react-native-developers?utm_source=gluestack.io&utm_medium=referral&utm_campaign=partner_site" />
            <HireTeam />
          </VStack>
          {/* GeekyAnts Hire Team Banner */}
        </Box>

        <Footer />
        <BadgeComponent />
        <ThemeToggleFab />
      </WebsiteLayout>
    </ClientWrapper>
  );
};
export default App;
