'use client';
import { Badge } from '@/components/web/badge';
import AppLaunchKitLogo from '@/public/icon/logo/app-launch-kit/dark-mode.svg';
import AppLaunchKitLogoDark from '@/public/icon/logo/app-launch-kit/light-mode.svg';
import StarterKitLogo from '@/public/icon/logo/gluestack/logo-dark.svg';
import StarterKitLogoDark from '@/public/icon/logo/gluestack/logo-light.svg';
import AppMarketLogo from '@/public/icon/logo/theappmarket/appmarket-logo.svg';
import RapidNativelogo from '@/public/icon/logo/rapidnative/logo.png';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useColorMode } from '@/app/provider';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const ProductDropdownOptions = [
  {
    href: 'https://pro.gluestack.io/?utm_source=gluestack.io&utm_medium=header&utm_campaign=site-navigation',
    logo: {
      light: StarterKitLogo,
      dark: StarterKitLogoDark,
    },
    title: 'gluestack-ui pro',
    description: "The only React Native template you'll ever need.",
    badge: {
      text: 'PAID',
      action: 'info',
    },
  },
  {
    href: 'https://rapidnative.com/?utm_source=gluestack.io&utm_medium=header&utm_campaign=brand-awareness',
    logo: {
      light: RapidNativelogo,
      dark: RapidNativelogo,
    },
    title: 'RapidNative',
    description: 'Generate native apps instantly with AI prompts.',
    badge: {
      text: 'PAID',
      action: 'info',
    },
  },
  {
    href: 'https://theappmarket.io',
    logo: {
      light: AppMarketLogo,
      dark: AppMarketLogo,
    },
    title: 'theappmarket',
    description:
      'Transform your app idea into reality with our production-ready, cross-platform free and premium React Native templates and UI kits, built with Expo, gluestack (NativeWind), and TypeScript.',
    badge: {
      text: 'PAID',
      action: 'info',
    },
  },
  {
    href: 'https://applaunchk.it/',
    logo: {
      light: AppLaunchKitLogo,
      dark: AppLaunchKitLogoDark,
    },
    title: 'AppLaunchKit',
    description: 'Fullstack Universal Template for Android, iOS and Web',
    badge: {
      text: 'PAID',
      action: 'info',
    },
  },
];

const ProductDropdown = () => {
  const { colorMode } = useColorMode();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative"
    >
      <button
        className="lg:flex hidden rounded-full px-3 py-1 hover:bg-primary/10 active:bg-primary/20 outline-none focus-visible:ring-2 focus-visible:ring-primary items-center"
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        <span className="leading-normal font-normal text-sm text-foreground/70">
          Products
        </span>
        {dropdownOpen ? (
          <ChevronUp className="ml-1 h-4 w-4 text-foreground/70 pointer-events-none" />
        ) : (
          <ChevronDown className="ml-1 h-4 w-4 text-foreground/70 pointer-events-none" />
        )}
      </button>

      {dropdownOpen && (
        <div className="absolute top-full left-0 min-w-[350px]">
          <div className="mt-2.5 p-1 bg-background shadow-lg border border-border rounded-md max-h-[300px] overflow-x-scroll">
            {ProductDropdownOptions.map((option) => (
              <a
                key={option.href}
                className="p-3 rounded flex flex-row min-w-[200px] hover:bg-primary/10 gap-2"
                target="_blank"
                rel="noopener noreferrer"
                href={option.href}
              >
                <div className="flex flex-row gap-3 justify-between w-full items-center">
                  <Image
                    alt="product logo"
                    className="w-6 h-6 mt-1"
                    src={
                      mounted && colorMode === 'dark'
                        ? option.logo.dark
                        : option.logo.light
                    }
                  />
                  <div className="flex flex-col flex-1">
                    <span className="leading-normal font-medium text-sm text-foreground/70 mb-1">
                      {option.title}
                    </span>
                    <span className="text-xs font-normal text-muted-foreground leading-normal">
                      {option.description}
                    </span>
                  </div>
                  <Badge className="h-fit w-fit text-xs" variant="secondary">
                    {option.badge.text}
                  </Badge>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDropdown;
