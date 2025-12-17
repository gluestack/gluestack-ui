'use client';
import { Badge, BadgeText } from '@/components/ui/badge';
import { Box } from '@/components/ui/box';
import { HStack } from '@/components/ui/hstack';
import { ChevronDownIcon, ChevronUpIcon, Icon } from '@/components/ui/icon';
import { Link } from '@/components/ui/link';
import { Pressable } from '@/components/ui/pressable';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import AppLaunchKitLogo from '@/public/logo/products/app-launch-kit/dark-mode.svg';
import AppLaunchKitLogoDark from '@/public/logo/products/app-launch-kit/light-mode.svg';
import StarterKitLogo from '@/public/logo/products/gluestack/logo-dark.svg';
import StarterKitLogoDark from '@/public/logo/products/gluestack/logo-light.svg';
import RapidNativelogo from '@/public/logo/products/rapidnative/logo.png';
import AppMarketLogo from '@/public/logo/products/theappmarket/appmarket-logo.svg';
import { useMode } from '@/utils/theme-context';
import Image from 'next/image';
import { useState } from 'react';

const ProductDropdownOptions = [
  {
    href: 'https://pro.gluestack.io/?utm_source=gluestack.io&utm_medium=header&utm_campaign=site-navigation',
    logo: {
      light: StarterKitLogo,
      dark: StarterKitLogoDark,
    },
    title: 'gluestack-ui pro',
    description: "The only React Native templateyou'll ever need.",
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
  const { colorMode } = useMode();
  const [dropdownOpen, setDropdownOpen] = useState(false);

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
      <Pressable
        className="web:focus:shadow-none lg:flex hidden rounded-full px-3 py-1 hover:bg-primary-50/10 active:bg-primary-50/20 outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
        onPress={() => setDropdownOpen(!dropdownOpen)}
      >
        <Box className="rounded-full items-center justify-center flex-row">
          <Text className="leading-normal font-normal text-sm text-typography-700">
            Products
          </Text>
          {dropdownOpen ? (
            <Icon
              as={ChevronUpIcon}
              className="ml-1  h-4 w-4  text-typography-700 pointer-events-none"
            />
          ) : (
            <Icon
              as={ChevronDownIcon}
              className="ml-1  h-4 w-4  text-typography-700 pointer-events-none"
            />
          )}
        </Box>
      </Pressable>

      {dropdownOpen && (
        <Box className="absolute top-full left-0 min-w-[350px] ">
          <Box className="mt-2.5 p-1 bg-background-0 shadow-hard-5 border border-outline-100 rounded-md max-h-[300px] overflow-x-scroll">
            {ProductDropdownOptions.map((option) => (
              <Pressable focusable={false} key={option.href}>
                <Link
                  className="p-3 rounded flex-row min-w-[200px] hover:bg-primary-50/10 gap-2"
                  isExternal
                  href={option.href}
                >
                  <HStack className="gap-3 justify-between w-full flex items-center">
                    <Image
                      alt="product logo"
                      className="w-6 h-6 mt-1"
                      src={
                        colorMode === 'dark'
                          ? option.logo.dark
                          : option.logo.light
                      }
                    />
                    <VStack>
                      <Text className="leading-normal font-medium text-sm text-typography-700 mb-1">
                        {option.title}
                      </Text>
                      <Text className="text-xs font-normal text-typography-500 leading-normal">
                        {option.description}
                      </Text>
                    </VStack>
                    <Badge
                      className="h-fit w-fit"
                      variant="solid"
                      action={option.badge.action as any}
                    >
                      <BadgeText className="text-xs font-roboto">
                        {option.badge.text}
                      </BadgeText>
                    </Badge>
                  </HStack>
                </Link>
              </Pressable>
            ))}
          </Box>
        </Box>
      )}
    </div>
  );
};

export default ProductDropdown;
