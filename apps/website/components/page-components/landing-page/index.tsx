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

import { kitchensink } from '@/components/docs-components/apps/appConfig';
import { HStack } from '@/components/ui/hstack';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import Image from 'next/image';
import Inspiration from './Inspiration';
import PowerOfTailwind from './PowerOfTailwind';
import RapidNativeBanner from './RapidNativeBanner';


const App = ({ referrer }: { referrer: string }) => {
  return (
    <>
      <SentryErrorHandler />
      <WebsiteLayout>
        <div className=" h-full flex flex-row my-0  mx-auto max-w-[1440px] w-[85%]">
          <div className="hidden md:block md:w-1/2 h-[100vh-53px] mt-[53px]">
            <video
              poster="/videos/hero-poster.jpg"
              className="lg:-mr-20 xl:-mr-24 h-[calc(100vh-110px)] xl:object-cover"
              autoPlay
              loop
              preload="auto"
              playsInline
              muted
            >
              <source src="/videos/KitchenSink.webm" type="video/webm" />
            </video>
          </div>
          <RapidNativeBanner />
          <div className="flex flex-col md:w-1/2  h-[calc(100vh-100px)] justify-center md:items-start gap-5 md:-ml-20 mt-[53px]">
            <AwardBadge />
            <div className="flex flex-col gap-3">
              <h1 className="text-4xl font-bold tracking-[0.2px] leading-[120%] md:text-left">
                React & React Native <br /> UI Components & Patterns
              </h1>
              <p className="font-sans text-sm text-muted-foreground md:text-left xl:max-w-[560px]">
                Comprehensive React and React Native component library for
                building modern, high-performance web and mobile apps.
                Copy-paste UI components library & patterns crafted with
                Tailwind CSS (NativeWind)
              </p>
            </div>
            <div className="gap-4 flex flex-col lg:flex-row md:items-end lg:items-center">
              <NextLink href="/ui/docs/home/overview/quick-start">
                <Button className="rounded-full h-12 px-8">
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
            <HStack className="gap-2 items-center mt-10 border border-border rounded-md p-4 lg:flex hidden">
              <Image
                alt="kitchensink qrcode"
                src={kitchensink.qrCodeUri}
                height={156}
                width={156}
                unoptimized
              />
              <VStack className="max-w-[300px] items-center">
                <Text className="text-base lg:text-lg font-semibold text-center">
                  Kitchensink App
                </Text>
                <Text className='text-sm text-muted-foreground text-center max-w-[250px]'>a Comprehensive demo app showcasing all the gluestack-ui components in action</Text>
              </VStack>
            </HStack>
            {/* Kitchensink QR Code end*/}
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
