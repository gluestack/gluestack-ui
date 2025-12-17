import { Button } from '@/components/web/button';
import { ArrowUpRight, Terminal } from 'lucide-react';
import AwardBadge from '../AwardBadge';
import CopySnippetButton from '../copy-snippet-button';

const HeroSection = () => {
  return (
    <div className="w-full h-full">
      <div className="flex flex-col md:w-1/2 md:pl-[120px] h-[calc(100vh-80px-56px)] justify-center gap-5">
        <div>
          <AwardBadge />
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl font-bold tracking-[0.2px] leading-[120%]">
            React & React Native UI Components & Patterns
          </h1>
          <p className="font-sans text-sm text-muted-foreground">
            Comprehensive React and React Native component library for building
            modern, high-performance web and mobile apps. Copy-paste UI
            components library & patterns crafted with Tailwind CSS (NativeWind)
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
  );
};

export default HeroSection;
