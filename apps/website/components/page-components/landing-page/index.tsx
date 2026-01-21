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


const App = ({ referrer }: { referrer: string }) => {
  return (
    <>
      <SentryErrorHandler />
      <WebsiteLayout>
        <div className=" h-full flex flex-row my-0  mx-auto md:pl-[120px] 2xl:pl-[calc((100vw-1440px)/2)] w-[85%] md:w-full">
          <div className="flex flex-col md:w-1/2 pr-5   h-[calc(100vh-100px)] justify-center gap-5">
            <div>
              <AwardBadge />
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="text-4xl font-bold tracking-[0.2px] leading-[120%]">
                React & React Native UI Components & Patterns
              </h1>
              <p className="font-sans text-sm text-muted-foreground">
                Comprehensive React and React Native component library for
                building modern, high-performance web and mobile apps.
                Copy-paste UI components library & patterns crafted with
                Tailwind CSS (NativeWind)
              </p>
            </div>
            <div className="gap-4 flex flex-col lg:flex-row">
              <NextLink href="/ui/docs/home/overview/quick-start">
                <Button className="rounded-full h-14 px-8">
                  Get Started
                  <ArrowUpRight className="text-primary-foreground" />
                </Button>
              </NextLink>
              <div className="flex w-fit flex-row gap-3 border border-border rounded-full items-center py-3 px-6">
                <Terminal className="text-muted-foreground" />
                <span className="font-mono">npm create gluestack@alpha</span>
                <CopySnippetButton />
              </div>
            </div>
          </div>
          <div className="hidden md:block md:w-1/2">
            <video
  poster="/videos/hero-poster.jpg"
  className="w-[50vw] h-[calc(100vh-53px)] object-cover"
  autoPlay
  loop
  preload="none"
  playsInline
  muted
>
  <source src="/videos/KitchenSink.mp4" type="video/mp4" />
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
