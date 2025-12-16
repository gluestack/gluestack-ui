'use client';
import ToggleThemeButton from '@/components/custom/toggle-theme-button';
import { Badge, BadgeText } from '@/components/ui/badge';
import { Box } from '@/components/ui/box';
import { Button, ButtonText } from '@/components/ui/button';
import {
  Drawer,
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
} from '@/components/ui/drawer';
import { HStack } from '@/components/ui/hstack';
import {
  ChevronDownIcon,
  ChevronUpIcon,
  CloseIcon,
  Icon,
  MenuIcon,
} from '@/components/ui/icon';
import { Link } from '@/components/ui/link';
import { Pressable } from '@/components/ui/pressable';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import AppLaunchKitLogo from '@/public/logo/products/app-launch-kit/dark-mode.svg';
import AppLaunchKitLogoDark from '@/public/logo/products/app-launch-kit/light-mode.svg';
import GluestackLogoDark from '@/public/logo/products/gluestack/gluestack-logo-dark.svg';
import GluestackLogo from '@/public/logo/products/gluestack/gluestack-logo.svg';
import StarterKitLogo from '@/public/logo/products/gluestack/logo-dark.svg';
import StarterKitLogoDark from '@/public/logo/products/gluestack/logo-light.svg';
import RapidNativelogo from '@/public/logo/products/rapidnative/logo.png';
import AppMarketLogo from '@/public/logo/products/theappmarket/appmarket-logo.svg';
import { LayoutContext } from '@/utils/layout-context';
import { useMode } from '@/utils/theme-context';
import { Nav } from '@expo/html-elements';
import Image from 'next/image';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import { useContext, useState } from 'react';
import { UiDocSearch } from './DocSearch';

interface HeaderProps {
  isScrolled?: boolean;
  showPromoBanner?: boolean;
}

const dropdownOptions = [
  {
    href: 'https://pro.gluestack.io/?utm_source=gluestack.io&utm_medium=header&utm_campaign=site-navigation',
    logo: {
      light: StarterKitLogo,
      dark: StarterKitLogoDark,
    },
    title: 'gluestack-ui pro',
    description: 'The only React Native templateyou’ll ever need.',
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
  {
    href: 'https://github.com/gluestack/gluestack-ui-starter-kits/',
    logo: {
      light: StarterKitLogo,
      dark: StarterKitLogoDark,
    },
    title: 'Starter Kit',
    description:
      'Helping you kickstart your application development with React and React Native.',
    badge: {
      text: 'FREE',
      action: 'success',
    },
  },
];

const Header = ({
  isOpenSidebar: propsIsOpenSidebar,
  setIsOpenSidebar: propsSetIsOpenSidebar,
}: {
  isOpenSidebar?: boolean;
  setIsOpenSidebar?: (value: boolean) => void;
} = {}) => {
  const { colorMode } = useMode();
  const [showDrawer, setShowDrawer] = useState(false);
  const pathname = usePathname();
  const context = useContext(LayoutContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const isOpenSidebar = propsIsOpenSidebar ?? context.isOpenSidebar;
  const setIsOpenSidebar = propsSetIsOpenSidebar ?? context.setIsOpenSidebar;

  // Check if current route is documentation
  const isDocsRoute = pathname?.includes('/ui/docs/');

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  const handleSidebarToggle = () => {
    setIsOpenSidebar(!isOpenSidebar);
  };

  return (
    <Box
      className="h-[80px] w-full sticky z-10 justify-center bg-white/80 dark:bg-background-0/80 backdrop-blur-md
      "
    >
      {/* @ts-ignore */}
      <Nav className="items-center max-w-[1760px] md:px-[120px] px-8  w-full mx-auto py-6">
        <Box className="flex-row justify-between items-center  w-full">
          <HStack className="gap-6 items-center">
            <Link href="/" className="no-underline z-1 inherit ml-2">
              <Image
                alt="gluestack-ui logo"
                className={'h-[20px] w-auto'}
                src={colorMode === 'dark' ? GluestackLogoDark : GluestackLogo}
                priority
              />
            </Link>
            {/* Desktop: Show Docs and Demo buttons */}
            <HStack className="hidden md:flex items-center gap-1.5 lg:gap-6">
              {isDocsRoute ? (
                <Box className="sm:mr-6 mr-4">
                  <UiDocSearch />
                </Box>
              ) : (
                <>
                  <Pressable focusable={false}>
                    <NextLink
                      className="web:focus:shadow-none lg:flex hidden rounded-full px-3 py-1 hover:bg-primary-50/10 active:bg-primary-50/20 outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
                      href="/ui/docs"
                    >
                      <Box className="rounded-full items-center justify-center">
                        <Text className="leading-normal font-normal text-sm text-typography-700">
                          Docs
                        </Text>
                      </Box>
                    </NextLink>
                  </Pressable>
                  <Pressable focusable={false}>
                    <NextLink
                      className="web:focus:shadow-none lg:flex hidden rounded-full px-3 py-1 hover:bg-primary-50/10 active:bg-primary-50/20 outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
                      href="/blogs/"
                    >
                      <Box className="rounded-full items-center justify-center">
                        <Text className="leading-normal font-normal text-sm text-typography-700">
                          Blog
                        </Text>
                      </Box>
                    </NextLink>
                  </Pressable>
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
                          {dropdownOptions.map((option) => (
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
                </>
              )}
            </HStack>
          </HStack>
          <HStack className="gap-6 items-center scale-75 sm:scale-100">
            <ToggleThemeButton />
            {/* Mobile: Show hamburger menu button */}
            <Button
              variant="link"
              className="md:hidden"
              onPress={() => setShowDrawer(true)}
            >
              <Icon
                as={MenuIcon}
                className="text-typography-950 dark:text-typography-400"
              />
            </Button>
          </HStack>
        </Box>
      </Nav>

      {/* Mobile Drawer */}
      <Drawer
        isOpen={showDrawer}
        size="lg"
        anchor="left"
        onClose={() => setShowDrawer(false)}
      >
        <DrawerBackdrop />
        <DrawerContent>
          <DrawerHeader>
            <Image
              alt="gluestack-ui logo"
              className={'sm:h-[28px] h-[20px] w-auto'}
              src={colorMode === 'dark' ? GluestackLogoDark : GluestackLogo}
              priority
            />
            <DrawerCloseButton>
              <Icon as={CloseIcon} />
            </DrawerCloseButton>
          </DrawerHeader>
          <DrawerBody>
            <div onClick={() => setShowDrawer(false)}>
              <VStack className="gap-2 pt-4">
                <Link href="/demo">
                  <Button variant="link" className="w-full justify-start">
                    <ButtonText className="data-[hover=true]:no-underline data-[active=true]:no-underline text-typography-950 dark:text-typography-400 data-[hover=true]:text-typography-500 data-[active=true]:text-typography-600">
                      Demo
                    </ButtonText>
                  </Button>
                </Link>
                <Link href="/docs">
                  <Button variant="link" className="w-full justify-start">
                    <ButtonText className="data-[hover=true]:no-underline data-[active=true]:no-underline text-typography-950 dark:text-typography-400 data-[hover=true]:text-typography-500 data-[active=true]:text-typography-600">
                      Docs
                    </ButtonText>
                  </Button>
                </Link>
              </VStack>
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Header;
