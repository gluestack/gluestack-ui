import { Button } from '@/components/web/button';
import { ArrowUpRight, Terminal } from 'lucide-react';
import NextLink from 'next/link';
import AwardBadge from './AwardBadge';
import BadgeComponent from './BadgeComponent';
import CopySnippetButton from './copy-snippet-button';
import Example from './Example';
import Fold1 from './Fold1';
import Fold2 from './Fold2';
import Fold3 from './Fold3';
import Footer from './Footer';
import HireTeam from './HireTeam';
import Kitchensink from './Kitchensink';
import MCPServer from './MCPServer';
import MeetCreators from './MeetCreators';
import { Newsletter } from './Newsletter';
import { developersData } from './Newsletter/data';
import SentryErrorHandler from './SentryErrorHandler';
import { SocialMediaGridTestimonial } from './Testimonials';
import ThemeToggleFab from './ThemeToggleFab';
import VadimStream from './VadimStream';
import WebsiteLayout from './WebsiteLayout';

import Inspiration from './Inspiration';
import PowerOfTailwind from './PowerOfTailwind';
import Image from 'next/image';
import { kitchensink } from '@/components/docs-components/apps/appConfig';
import { HStack } from '@/components/ui/hstack';
import { Box } from '@/components/ui/box';
import { VStack } from '@/components/ui/vstack';
import { Text } from '@/components/ui/text';
import { Divider } from '@/components/ui/divider';
import IOS from './Ios';
import Android from './Android';


const App = ({ referrer }: { referrer: string }) => {
  return (
    <>
      <SentryErrorHandler />
      <WebsiteLayout>
        <div className=" h-full flex flex-row my-0  mx-auto max-w-[1440px] w-[85%]">
          <div className="flex flex-col md:w-1/2  h-[calc(100vh-100px)] justify-center md:items-end gap-5">
            <div>
              <AwardBadge />
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="text-4xl font-bold tracking-[0.2px] leading-[120%] md:text-right">
                React & React Native <br /> UI Components & Patterns
              </h1>
              <p className="font-sans text-sm text-muted-foreground md:text-right xl:max-w-[560px]">
                Comprehensive React and React Native component library for
                building modern, high-performance web and mobile apps.
                Copy-paste UI components library & patterns crafted with
                Tailwind CSS (NativeWind)
              </p>
            </div>
            <div className="gap-4 flex flex-col lg:flex-row md:items-end lg:items-center">
              <NextLink href="/ui/docs/home/overview/quick-start">
                <Button className="rounded-full h-14 px-8">
                  Get Started
                  <ArrowUpRight className="text-primary-foreground" />
                </Button>
              </NextLink>
              <div className="flex w-fit flex-row gap-3 border border-border rounded-full items-center py-3 px-6">
                <Terminal className="text-muted-foreground" />
                <span className="font-geist-mono">npm create gluestack@alpha</span>
                <CopySnippetButton />
              </div>
            </div>

            {/* Kitchensink QR Code */}
            <HStack className="flex-1 gap-2 items-end">
              <Box className="flex-1 md:flex hidden">
                <Image
                  alt="kitchensink qrcode"
                  src={kitchensink.qrCodeUri}
                  height={256}
                  width={256}
                  unoptimized
                />
              </Box>
              <VStack className="flex-1 items-center">
                <Text className="text-lg font-normal leading-[30px]  text-center md:flex hidden">
                  Scan the QR code
                </Text>
                <Text className="text-xs font-normal leading-[30px]  text-muted-foreground text-center md:flex hidden">
                  Available in
                </Text>
                <VStack className="border border-border rounded-md items-center px-16 py-3 flex-1 gap-2 web:md:flex md:flex hidden web:hidden">
                  <HStack className="flex-1 items-center justify-center gap-2">
                    <IOS />
                    <Text className="text-md font-normal leading-[30px] flex-1">
                      ios
                    </Text>
                  </HStack>
                  <Divider />
                  <HStack className="flex-1 items-center justify-center gap-2">
                    <Android />
                    <Text className="text-md font-normal leading-[30px] flex-1">
                      Andriod
                    </Text>
                  </HStack>
                </VStack>
              </VStack>
            </HStack>
            {/* Kitchensink QR Code end*/}
          </div>
          <div className="hidden md:block md:w-1/2 items-start">
            <video
              poster="/videos/hero-poster.jpg"
              className="lg:-ml-10 xl:-ml-24 w-[full] h-[calc(100vh-53px)] lg:object-cover object-contain"
              autoPlay
              loop
              preload="none"
              playsInline
              muted
            >
              <source src="/videos/KitchenSink.webm" type="video/webm" />
            </video>
          </div>
        </div>
        <div className="max-w-[1440px] w-[85%] my-0 mx-auto">
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
        </div>
        <Footer />
        <BadgeComponent />
        <ThemeToggleFab />
      </WebsiteLayout>
    </>
  );
};
export default App;
