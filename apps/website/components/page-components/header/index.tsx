"use client";

import React, { useContext, useState } from "react";
import {
  Box,
  HStack,
  Icon,
  Link,
  Pressable,
  Text,
  ChevronUpIcon,
  ChevronDownIcon,
  Divider,
  VStack,
  Badge,
  BadgeText,
} from "@/components/ui";
import Image from "next/image";
import GluestackLogo from "@/public/svg/gluestack_logo.svg";
import GluestackLogoDark from "@/public/svg/gluestack_logo_dark.svg";
import { MenuIcon, MoonIcon, SunIcon, X } from "lucide-react-native";

import AppLaunchKitLogo from "@/public/icon/logo/app-launch-kit/dark-mode.svg";
import AppLaunchKitLogoDark from "@/public/icon/logo/app-launch-kit/light-mode.svg";
import StarterKitLogo from "@/public/icon/logo/gluestack/logo-dark.svg";
import StarterKitLogoDark from "@/public/icon/logo/gluestack/logo-light.svg";
import AppMarketLogo from "@/public/icon/logo/theappmarket/appmarket-logo.svg";

import NextLink from "next/link";
import ResponsiveSidebar from "../landing-page/ResponsiveSidebar";
import DocsSidebar from "../sidebar/DocsSidebar";
import { Nav } from "@expo/html-elements";
import { ThemeContext } from "@/utils/context/theme-context";
import { usePathname } from "next/navigation";

// Updated Header component with internal state management
const Header = () => {
  const { colorMode, setColorMode }: any = useContext(ThemeContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isOpenSidebar, setIsOpenSidebar] = useState(false); // Manage state internally
  const pathname = usePathname();

  // Check if current route is documentation
  const isDocsRoute = pathname?.includes("/ui/docs/");

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  const handleSidebarToggle = () => {
    setIsOpenSidebar(!isOpenSidebar);
  };

  const dropdownOptions = [
    {
      href: "https://applaunchk.it/",
      logo: {
        light: AppLaunchKitLogo,
        dark: AppLaunchKitLogoDark,
      },
      title: "AppLaunchKit",
      description: "Fullstack Universal Template for Android, iOS and Web",
      badge: {
        text: "PAID",
        action: "info",
      },
    },
    {
      href: "https://github.com/gluestack/gluestack-ui-starter-kits/",
      logo: {
        light: StarterKitLogo,
        dark: StarterKitLogoDark,
      },
      title: "Starter Kit",
      description:
        "Helping you kickstart your application development with React and React Native.",
      badge: {
        text: "FREE",
        action: "success",
      },
    },
    {
      href: "https://theappmarket.io",
      logo: {
        light: AppMarketLogo,
        dark: AppMarketLogo,
      },
      title: "theappmarket",
      description:
        "Transform your app idea into reality with our production-ready, cross-platform free and premium React Native templates and UI kits, built with Expo, gluestack (NativeWind), and TypeScript.",
      badge: {
        text: "PAID",
        action: "info",
      },
    },
  ];

  return (
    <Box className="w-full bg-white dark:bg-background-0/60 bg-opacity-60 sticky top-0 z-10 border-outline-100 border-b">
      <Nav className="py-3 items-center backdrop-blur">
        <Box
          className={`flex-row items-center justify-between w-[85%] lg:mx-[180px] mx-5 ${
            pathname?.includes("/ui/docs/") ? "w-[100%] px-5" : "max-w-[1440px]"
          }`}
        >
          <HStack className="items-center md:gap-3 gap-4">
            <HStack className="gap-1.5 items-center">
              <Link href="/" className="no-underline z-1 inherit">
                {colorMode === "dark" ? (
                  <Image
                    alt="gluestack-ui logo"
                    className={"w-44 h-[28px] "}
                    src={GluestackLogoDark}
                    priority
                  />
                ) : (
                  <Image
                    alt="gluestack-ui logo"
                    className={"w-44 h-[28px] "}
                    src={GluestackLogo}
                    priority
                  />
                )}
              </Link>
              <Divider
                orientation="vertical"
                className="h-[20px] hidden sm:flex lg:hidden xl:flex"
              />
              <Text className="text-sm text-typography-700 hidden sm:flex lg:hidden xl:flex">
                Formerly NativeBase
              </Text>
            </HStack>
          </HStack>

          <Box className="items-center web:select-none">
            <HStack className="sm:gap-4 lg:gap-6 gap-2.5 items-center">
              <HStack className="gap-1.5 ld:gap-4">
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
                                    colorMode === "dark"
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
                  href="https://www.figma.com/community/file/1358053104938234615/gluestack-ui-v2-0-design-kit"
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

              {/* Other social links... */}

              <Pressable
                role="button"
                onPress={() => {
                  setColorMode(colorMode === "dark" ? "light" : "dark");
                }}
                className="web:focus:shadow-none lg:flex hidden "
              >
                <Box className={`rounded-full items-center justify-center `}>
                  {colorMode === "dark" ? (
                    <Icon
                      as={MoonIcon}
                      className={"sm:w-6 sm:h-6 h-5 w-5 text-typography-900 "}
                    />
                  ) : (
                    <Icon
                      as={SunIcon}
                      className={"sm:w-6 sm:h-6 h-5 w-5 text-typography-900 "}
                    />
                  )}
                </Box>
              </Pressable>

              <Link
                href="https://geekyants.com/hire?utm_source=gluestack.io&utm_medium=referral&utm_campaign=partner_site"
                className="bg-primary-500 px-4 py-1.5 lg:flex hidden rounded"
              >
                <Text className="text-sm text-typography-0">
                  Hire React Native Experts
                </Text>
              </Link>

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

      {/* Conditional Sidebar Rendering */}
      {isOpenSidebar && (
        <>
          {isDocsRoute ? (
            <DocsSidebar
              isOpen={isOpenSidebar}
              setIsOpenSidebar={setIsOpenSidebar}
            />
          ) : (
            <ResponsiveSidebar
              isOpen={isOpenSidebar}
              setIsOpenSidebar={setIsOpenSidebar}
            />
          )}
        </>
      )}
    </Box>
  );
};

export default Header;
