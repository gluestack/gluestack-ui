import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { Heading } from '@/components/ui/heading';
import { Button } from '@/components/web/button';
import { ArrowUpRight, Terminal } from 'lucide-react';
import Footer from './Footer';
import CopySnippetButton from './copy-snippet-button';
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
        <div className=" h-full max-w-[1440px] w-[85%] my-0 mx-auto">
          <div className="flex flex-col md:w-1/2   h-[calc(100vh-80px-56px)] justify-center gap-5">
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
              <Button className="rounded-full h-14 px-8">
                Get Started
                <ArrowUpRight className="text-primary-foreground" />
              </Button>
              <div className="flex flex-row gap-3 border border-border rounded-full items-center py-3 px-6">
                <Terminal className="text-muted-foreground" />
                <span className="font-mono">npm create gluestack@latest</span>
                <CopySnippetButton />
              </div>
            </div>
          </div>
          <div className="hidden md:block md:w-1/2"></div>
        </div>

        <Footer />
        <BadgeComponent />
        <ThemeToggleFab />
      </WebsiteLayout>
    </>
  );
};
export default App;
