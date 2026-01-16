'use client';

import React, { useContext, useState } from 'react';
import { Badge, BadgeText } from '@/components/ui/badge';
import { HStack } from '@/components/ui/hstack';
import { Icon, ChevronUpIcon, ChevronDownIcon } from '@/components/ui/icon';
import { Link } from '@/components/ui/link';
import { Pressable } from '@/components/ui/pressable';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { Box } from '@/components/ui/box';
import { Menu, MenuItem } from '@/components/ui/menu';
import Image from 'next/image';
import GluestackLogo from '@/public/svg/gluestack_logo.svg';
import GluestackLogoDark from '@/public/svg/gluestack_logo_dark.svg';
import { MenuIcon, MoonIcon, SunIcon, X } from 'lucide-react-native';

import NewsletterModal from './NewsLetterModal';
import AppLaunchKitLogo from '@/public/icon/logo/app-launch-kit/dark-mode.svg';
import GluestackProLogo from '@/public/icon/logo/gluestack-pro/logo.svg';
import AppLaunchKitLogoDark from '@/public/icon/logo/app-launch-kit/light-mode.svg';
import StarterKitLogo from '@/public/icon/logo/gluestack/logo-dark.svg';
import StarterKitLogoDark from '@/public/icon/logo/gluestack/logo-light.svg';
import AppMarketLogo from '@/public/icon/logo/theappmarket/appmarket-logo.svg';
import RapidNativelogo from '@/public/icon/logo/rapidnative/logo.png';
import AppLighterLogo from '@/public/icon/logo/applighter/logo.png';
import FlyDashLogo from '@/public/icon/logo/flydash/logo.png';
import { useColorMode } from '@/app/provider';
import NextLink from 'next/link';
import { Nav } from '@expo/html-elements';
import { usePathname } from 'next/navigation';
import { UiDocSearch } from './Docsearch';
import { LayoutContext } from '@/components/custom/layout/LayoutContext';

// Updated Header component with internal state management
const Header = ({
  isOpenSidebar: propsIsOpenSidebar,
  setIsOpenSidebar: propsSetIsOpenSidebar,
}: {
  isOpenSidebar?: boolean;
  setIsOpenSidebar?: (value: boolean) => void;
} = {}) => {
  // Use props if available, otherwise fall back to context
  const context = useContext(LayoutContext);
  const isOpenSidebar = propsIsOpenSidebar ?? context.isOpenSidebar;
  const setIsOpenSidebar = propsSetIsOpenSidebar ?? context.setIsOpenSidebar;

  const { colorMode, setColorMode }: any = useColorMode();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

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

  const [showModal, setShowModal] = React.useState(false);

  const dropdownOptions = [
    {
      href: 'https://rapidnative.com/?utm_source=gluestack.io&utm_medium=header&utm_campaign=brand-awareness',
      logo: {
        light: RapidNativelogo,
        dark: RapidNativelogo,
      },
      title: 'RapidNative',
      description: 'Generate native apps instantly with AI prompts.',
      badge: {
        text: 'Partner',
        action: 'info',
      },
    },
    {
      href: 'https://www.applighter.com/?utm_source=gluestack.io&utm_medium=header&utm_campaign=brand-awareness',
      logo: {
        light: AppLighterLogo,
        dark: AppLighterLogo,
      },
      title: 'AppLighter',
      description: 'AI-Ready Full-Stack Expo Starter Kit.',
      badge: {
        text: 'Partner',
        action: 'info',
      },
    },
    {
      href: 'https://flydash.io/?utm_source=gluestack.io&utm_medium=header&utm_campaign=brand-awareness',
      logo: {
        light: FlyDashLogo,
        dark: FlyDashLogo,
      },
      title: 'FlyDash',
      description: 'AI-Powered Internal Tools & Dashboard Builder.',
      badge: {
        text: 'Partner',
        action: 'info',
      },
    },
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

  return (
    <Box className="w-full bg-white/60 dark:bg-background-0/60 sticky top-0 z-10 border-outline-200 border-b h-[53px] md:h-[60px]">
      {/* @ts-ignore */}
      <Nav className="py-2.5 items-center backdrop-blur h-full">
        <Box
          className={`flex-row items-center justify-between w-[85%] lg:mx-[180px] mx-5 h-full ${
            pathname?.includes('/ui/docs/') ? 'w-[100%] px-5' : 'max-w-[1440px]'
          }`}
        >
          <HStack className="items-center md:gap-3 gap-4">
            <HStack className="gap-1.5 items-center">
              <Link href="/" className="no-underline z-1 inherit ml-2">
                {colorMode === 'dark' ? (
                  <Image
                    alt="gluestack-ui logo"
                    className={'h-[20px] w-auto'}
                    src={GluestackLogoDark}
                    priority
                  />
                ) : (
                  <Image
                    alt="gluestack-ui logo"
                    className={'h-[20px] w-auto'}
                    src={GluestackLogo}
                    priority
                  />
                )}
              </Link>
              <Menu
                placement="bottom"
                offset={18}
                trigger={({ ...triggerProps }) => {
                  return (
                    <Pressable
                      {...triggerProps}
                      className="flex-row items-center pb-0.5"
                    >
                      <Text className="font-geist-sans font-bold text-typography-800 text-sm">
                        v3
                      </Text>
                      <Icon as={ChevronDownIcon} className="w-3 h-3 ml-1" />
                    </Pressable>
                  );
                }}
              >
                <MenuItem className="min-w-fit px-5 py-2">v3</MenuItem>
                <MenuItem
                  className="min-w-fit px-5 py-2"
                  onPress={() => {
                    window.open('https://v2.gluestack.io', '_blank');
                  }}
                >
                  v2
                </MenuItem>
              </Menu>
            </HStack>
          </HStack>

          <Box className="items-center web:select-none">
            <HStack className="sm:gap-4 lg:gap-6 gap-2.5 items-center">
              <HStack className="gap-1.5 ld:gap-4">
                {isDocsRoute ? (
                  <Box className="sm:mr-6 mr-4">
                    <UiDocSearch />
                  </Box>
                ) : (
                  <>
                    <Pressable focusable={false} tabIndex={-1}>
                      <NextLink
                        className="web:focus:shadow-none lg:flex hidden rounded-full px-3 py-1 hover:bg-primary-50/10 active:bg-primary-50/20 outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
                        href="/ui/docs/mcp-server/mcp-server"
                      >
                        <Box className="rounded-full items-center justify-center">
                          <Text className="leading-normal font-normal text-sm text-typography-700">
                            MCP Server
                          </Text>
                        </Box>
                      </NextLink>
                    </Pressable>
                    <Pressable focusable={false} tabIndex={-1}>
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
                              <Pressable
                                focusable={false}
                                tabIndex={-1}
                                key={option.href}
                              >
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
                    <Pressable focusable={false} tabIndex={-1}>
                      <NextLink
                        className="web:focus:shadow-none lg:flex hidden rounded-full px-3 py-1 hover:bg-primary-50/10 active:bg-primary-50/20 outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
                        href="/blogs/"
                      >
                        <Box className="rounded-full items-center justify-center">
                          <Text className="leading-normal font-normal text-sm text-typography-700">
                            Blogs
                          </Text>
                        </Box>
                      </NextLink>
                    </Pressable>
                  </>
                )}
              </HStack>

              {/* Social Links */}
              <Pressable
                focusable={false}
                tabIndex={-1}
                className="web:focus:shadow-none lg:flex hidden"
              >
                <Link
                  className="rounded-full"
                  aria-label="figma link"
                  href="https://www.figma.com/community/file/1577667149474894602"
                  isExternal
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.66694 9.417C8.32774 9.417 7.99185 9.48381 7.67847 9.61362C7.36509 9.74343 7.08034 9.93369 6.84048 10.1735C6.60063 10.4134 6.41037 10.6981 6.28056 11.0115C6.15075 11.3249 6.08394 11.6608 6.08394 12C6.08394 12.3392 6.15075 12.6751 6.28056 12.9885C6.41037 13.3019 6.60063 13.5866 6.84048 13.8265C7.08034 14.0663 7.36509 14.2566 7.67847 14.3864C7.99185 14.5162 8.32774 14.583 8.66694 14.583H11.2499V12.052C11.2495 12.0173 11.2495 11.9827 11.2499 11.948V9.417H8.66694ZM11.2499 7.917H8.66694C7.98175 7.917 7.32463 7.64481 6.84013 7.16031C6.35563 6.67581 6.08344 6.01869 6.08344 5.3335C6.08344 4.64831 6.35563 3.99119 6.84013 3.50669C7.32463 3.02219 7.98175 2.75 8.66694 2.75H11.2499V7.917ZM12.7499 2.75V7.917H15.3329C16.0093 7.90369 16.6535 7.62565 17.1272 7.1426C17.6008 6.65955 17.8661 6.01002 17.8661 5.3335C17.8661 4.65698 17.6008 4.00745 17.1272 3.5244C16.6535 3.04135 16.0093 2.76331 15.3329 2.75H12.7499ZM15.3329 9.416C14.6549 9.41592 14.0041 9.68242 13.5208 10.158C13.0376 10.6336 12.7607 11.2801 12.7499 11.958V12.041C12.7582 12.55 12.9167 13.0452 13.2055 13.4644C13.4943 13.8836 13.9006 14.2081 14.3732 14.3972C14.8459 14.5863 15.3639 14.6315 15.8621 14.5271C16.3604 14.4228 16.8167 14.1735 17.1737 13.8107C17.5308 13.4478 17.7726 12.9875 17.869 12.4877C17.9653 11.9878 17.9117 11.4706 17.715 11.0011C17.5184 10.5315 17.1873 10.1306 16.7635 9.84857C16.3397 9.56656 15.842 9.41607 15.3329 9.416ZM8.66694 16.083C8.15583 16.0828 7.65614 16.2342 7.23107 16.518C6.80601 16.8018 6.47465 17.2053 6.27892 17.6775C6.08319 18.1496 6.03188 18.6692 6.13147 19.1705C6.23106 19.6718 6.47708 20.1323 6.83842 20.4938C7.19976 20.8553 7.66019 21.1015 8.16146 21.2013C8.66273 21.3011 9.18234 21.2499 9.65456 21.0544C10.1268 20.8589 10.5304 20.5277 10.8144 20.1027C11.0984 19.6777 11.2499 19.1781 11.2499 18.667V16.083H8.66694Z"
                      className="fill-[currentColor]"
                    />
                  </svg>
                </Link>
              </Pressable>

              <Pressable
                focusable={false}
                tabIndex={-1}
                className="web:focus:shadow-none lg:flex hidden"
              >
                <Link
                  className="rounded-full"
                  aria-label="discord link"
                  href="https://discord.com/invite/V5SU7HZSAQ"
                  isExternal
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="16"
                    viewBox="0 0 22 16"
                    fill="none"
                  >
                    <path
                      d="M18.27 1.33005C16.94 0.710046 15.5 0.260046 14 4.59982e-05C13.9868 -0.000374605 13.9738 0.00209348 13.9617 0.00727676C13.9496 0.01246 13.9388 0.0202326 13.93 0.0300462C13.75 0.360046 13.54 0.790046 13.4 1.12005C11.809 0.880046 10.191 0.880046 8.6 1.12005C8.46 0.780046 8.25 0.360046 8.06 0.0300462C8.05 0.0100462 8.02 4.59982e-05 7.99 4.59982e-05C6.49 0.260046 5.06 0.710046 3.72 1.33005C3.71 1.33005 3.7 1.34005 3.69 1.35005C0.969995 5.42005 0.219995 9.38004 0.589995 13.3C0.589995 13.32 0.599995 13.34 0.619995 13.35C2.42 14.67 4.15 15.47 5.86 16C5.89 16.01 5.91999 16 5.93 15.98C6.33 15.43 6.69 14.85 7 14.24C7.02 14.2 7 14.16 6.96 14.15C6.39 13.93 5.85 13.67 5.32 13.37C5.28 13.35 5.27999 13.29 5.31 13.26C5.42 13.18 5.52999 13.09 5.64 13.01C5.66 12.99 5.69 12.99 5.71 13C9.15 14.57 12.86 14.57 16.26 13C16.28 12.99 16.31 12.99 16.33 13.01C16.44 13.1 16.55 13.18 16.66 13.27C16.7 13.3 16.7 13.36 16.65 13.38C16.13 13.69 15.58 13.94 15.01 14.16C14.97 14.17 14.96 14.22 14.97 14.25C15.29 14.86 15.65 15.44 16.04 15.99C16.07 16 16.1 16.01 16.13 16C17.85 15.47 19.58 14.67 21.38 13.35C21.4 13.34 21.41 13.32 21.41 13.3C21.85 8.77004 20.68 4.84005 18.31 1.35005C18.3 1.34005 18.29 1.33005 18.27 1.33005ZM7.52 10.91C6.49 10.91 5.63 9.96005 5.63 8.79005C5.63 7.62005 6.47 6.67005 7.52 6.67005C8.58 6.67005 9.42 7.63005 9.41 8.79005C9.41 9.96005 8.57 10.91 7.52 10.91ZM14.49 10.91C13.46 10.91 12.6 9.96005 12.6 8.79005C12.6 7.62005 13.44 6.67005 14.49 6.67005C15.55 6.67005 16.39 7.63005 16.38 8.79005C16.38 9.96005 15.55 10.91 14.49 10.91Z"
                      className="fill-[currentColor]"
                    />
                  </svg>
                </Link>
              </Pressable>

              <Pressable
                focusable={false}
                tabIndex={-1}
                className="web:focus:shadow-none lg:flex hidden"
              >
                <Link
                  className="rounded-full"
                  aria-label="github link"
                  href="https://github.com/gluestack/gluestack-ui"
                  isExternal
                >
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
                    <path
                      d="M12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 16.42 4.87 20.17 8.84 21.5C9.34 21.58 9.5 21.27 9.5 21V19.31C6.73 19.91 6.14 17.97 6.14 17.97C5.68 16.81 5.03 16.5 5.03 16.5C4.12 15.88 5.1 15.9 5.1 15.9C6.1 15.97 6.63 16.93 6.63 16.93C7.5 18.45 8.97 18 9.54 17.76C9.63 17.11 9.89 16.67 10.17 16.42C7.95 16.17 5.62 15.31 5.62 11.5C5.62 10.39 6 9.5 6.65 8.79C6.55 8.54 6.2 7.5 6.75 6.15C6.75 6.15 7.59 5.88 9.5 7.17C10.29 6.95 11.15 6.84 12 6.84C12.85 6.84 13.71 6.95 14.5 7.17C16.41 5.88 17.25 6.15 17.25 6.15C17.8 7.5 17.45 8.54 17.35 8.79C18 9.5 18.38 10.39 18.38 11.5C18.38 15.32 16.04 16.16 13.81 16.41C14.17 16.72 14.5 17.33 14.5 18.26V21C14.5 21.27 14.66 21.59 15.17 21.5C19.14 20.16 22 16.42 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2Z"
                      className="fill-[currentColor]"
                    />
                  </svg>
                </Link>
              </Pressable>

              <Pressable
                focusable={false}
                tabIndex={-1}
                className="web:focus:shadow-none lg:flex hidden"
              >
                <Link
                  className="rounded-full"
                  aria-label="discord-faq-link"
                  href="https://gluestack.forumify.io/"
                  isExternal
                >
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.5 3a7.5 7.5 0 0 0-6.797 10.675 68.094 68.094 0 0 0-.681 3.142.996.996 0 0 0 1.153 1.17c.623-.11 1.978-.36 3.236-.65A7.5 7.5 0 1 0 9.5 3Zm-.038 16a7.473 7.473 0 0 0 5.1 2c1.1 0 2.145-.237 3.088-.663 1.043.244 2.186.488 2.913.64a1.244 1.244 0 0 0 1.467-1.5c-.162-.703-.418-1.795-.671-2.803A7.503 7.503 0 0 0 17.015 6.41a8.44 8.44 0 0 1 .8 2.048 5.995 5.995 0 0 1 2.747 5.042c0 .992-.24 1.925-.665 2.747l-.13.253.07.276c.228.895.467 1.9.642 2.65-.774-.163-1.818-.39-2.74-.61l-.264-.062-.243.121c-.804.4-1.71.625-2.67.625a5.974 5.974 0 0 1-2.92-.756 8.517 8.517 0 0 1-2.18.256Z"
                      className="fill-[currentColor]"
                    />
                  </svg>
                </Link>
              </Pressable>

              {/* social links end */}

              <Pressable
                role="button"
                onPress={() => {
                  setColorMode(colorMode === 'dark' ? 'light' : 'dark');
                }}
                className="web:focus:shadow-none lg:flex hidden "
              >
                <Box className={`rounded-full items-center justify-center `}>
                  {colorMode === 'dark' ? (
                    <Icon
                      as={MoonIcon}
                      className={'sm:w-6 sm:h-6 h-5 w-5 text-typography-900 '}
                    />
                  ) : (
                    <Icon
                      as={SunIcon}
                      className={'sm:w-6 sm:h-6 h-5 w-5 text-typography-900 '}
                    />
                  )}
                </Box>
              </Pressable>
              {!pathname.includes('/docs') && (
                <Link
                  href="https://pro.gluestack.io/?utm_source=gluestack.io&utm_medium=banner_docs&utm_campaign=brand-awareness"
                  className="border border-outline-200 px-4 py-1.5 xl:flex hidden rounded"
                >
                  <Text className="text-sm text-typography-900">
                    gluestack-ui pro
                  </Text>
                </Link>
              )}
              {!pathname.includes('/docs') ? (
                <Link
                  href="/ui/docs"
                  className="bg-primary-500 px-4 py-1.5 xl:flex hidden rounded"
                >
                  <Text className="text-sm text-typography-0">Get Started</Text>
                </Link>
              ) : (
                <HStack className="gap-3">
                  <Link
                    onPress={() => setShowModal(true)}
                    className="border border-outline-200 px-4 py-1.5 xl:flex hidden rounded"
                  >
                    <Text className="text-sm text-typography-900">
                      Get Updates
                    </Text>
                  </Link>
                  <NewsletterModal
                    showModal={showModal}
                    setShowModal={setShowModal}
                  />
                  <Link
                    href="https://rapidnative.com/?utm_source=gluestack.io&utm_medium=banner_docs&utm_campaign=brand-awareness"
                    className="bg-primary-500 px-4 py-1.5 xl:flex hidden rounded"
                  >
                    <Text className="text-sm text-typography-0">
                      Prompt to React Native UI
                    </Text>
                  </Link>
                </HStack>
              )}

              {/* Mobile Menu Button */}
              <Pressable
                onPress={handleSidebarToggle}
                className="flex web:focus:shadow-none web:focus:outline-0 lg:hidden"
              >
                {isOpenSidebar ? (
                  <Icon
                    className="sm:w-6 sm:h-6 h-5 w-5 text-background-800"
                    as={X}
                  />
                ) : (
                  <Icon
                    className="sm:w-6 sm:h-6 h-5 w-5 text-background-800"
                    as={MenuIcon}
                  />
                )}
              </Pressable>
            </HStack>
          </Box>
        </Box>
      </Nav>
    </Box>
  );
};

export default Header;
