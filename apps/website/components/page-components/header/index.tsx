'use client';
// import ToggleThemeButton from '@/components/custom/toggle-theme-button';
import { Button } from '@/components/web/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/web/sheet';
import GluestackLogoDark from '@/public/svg/gluestack_logo_dark.svg';
import GluestackLogo from '@/public/svg/gluestack_logo.svg';
import { Nav } from '@expo/html-elements';
import { Moon, Sun, Menu, Search } from 'lucide-react';
import Image from 'next/image';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';
import { UiDocSearch } from './Docsearch';
import ProductDropdown from './ProductDropdown';
import { useColorMode } from '@/app/provider';
import ResourcesDropdown from './ResourcesDropdown';
import AnimatedGithubCount from '../landing-page/AnimatedGithubCount';
const Header = ({
  isOpenSidebar: propsIsOpenSidebar,
  setIsOpenSidebar: propsSetIsOpenSidebar,
}: {
  isOpenSidebar?: boolean;
  setIsOpenSidebar?: (value: boolean) => void;
} = {}) => {
  const [showDrawer, setShowDrawer] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { colorMode, setColorMode } = useColorMode();
async function fetchGitHubStars() {
  const owner = 'gluestack';
  const repo = 'gluestack-ui';
  const url = `https://api.github.com/repos/${owner}/${repo}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      return 0;
    }
    const data = await response.json();
    const stars = data.stargazers_count;
    return stars.toLocaleString();
  } catch (error) {
    return 0;
  }
}
  useEffect(() => {
    setMounted(true);
  }, []);

  // Check if current route is documentation
  const isDocsRoute = pathname?.includes('/ui/docs/');

  // Use a default logo during SSR to avoid hydration mismatch
  const logoSrc = mounted
    ? colorMode === 'dark'
      ? GluestackLogoDark
      : GluestackLogo
    : GluestackLogo;

  return (
    <div className="h-[53px] w-full sticky top-0 z-10 flex justify-center bg-white/80 dark:bg-background/80 backdrop-blur-md">
      {/* @ts-ignore */}
      <Nav className="items-center justify-center w-full mx-auto py-6">
        <div
          className={`flex flex-row justify-between items-center  ${
            pathname?.includes('/ui/docs/')
              ? 'w-[100%] px-5'
              : 'w-[85%] max-w-[1440px]'
          }`}
        >
          <div className="flex flex-row gap-6 items-center">
            <NextLink
              href="/"
              className="no-underline z-1 ml-2 flex flex-row gap-1 items-center"
            >
              <Image
                alt="gluestack-ui logo"
                className="h-[20px] w-auto"
                src={logoSrc}
                priority
              />
              <span className="text-xs font-semibold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/50">
                preview
              </span>
            </NextLink>
            {/* Desktop: Show Docs and Demo buttons */}
            <div className="hidden md:flex items-center gap-1.5 lg:gap-6">
              <NextLink
                className="lg:flex hidden rounded-full px-3 py-1 hover:bg-primary/10 active:bg-primary/20 outline-none focus-visible:ring-2 focus-visible:ring-primary"
                href="/ui/docs"
              >
                <div className="rounded-full flex items-center justify-center">
                  <span className="leading-normal font-normal text-sm text-foreground/70">
                    Docs
                  </span>
                </div>
              </NextLink>
              <NextLink
                className="lg:flex hidden rounded-full px-3 py-1 hover:bg-primary/10 active:bg-primary/20 outline-none focus-visible:ring-2 focus-visible:ring-primary"
                href="/blogs/"
              >
                <div className="rounded-full flex items-center justify-center">
                  <span className="leading-normal font-normal text-sm text-foreground/70">
                    Blog
                  </span>
                </div>
              </NextLink>
              <ProductDropdown />
              <ResourcesDropdown />
              {/* )} */}
            </div>
          </div>
          <div className="flex flex-row gap-10 items-center">
            {/* Desktop: Show full search */}
            <div className="hidden md:block">
              <UiDocSearch />
            </div>

            {/* Mobile: Show search icon */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setShowMobileSearch(true)}
            >
              <Search className="h-5 w-5 text-foreground" />
            </Button>

            <NextLink
              className="rounded-full"
              aria-label="github link"
              href="https://github.com/gluestack/gluestack-ui"
            >
              <div className='flex flex-row items-center gap-1'>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className='h-[16px] w-[16px]'
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
              <AnimatedGithubCount />
              </div>
            </NextLink>

            <button
              role="button"
              onClick={() => {
                setColorMode(colorMode === 'dark' ? 'light' : 'dark');
              }}
              className="web:focus:shadow-none lg:flex hidden"
            >
              <div className="relative rounded-full items-center justify-center w-[18px] h-[18px]">
                <Sun className="absolute inset-0 h-[18px] w-[18px] rotate-0 scale-100 transition-all duration-300 text-foreground dark:-rotate-180 dark:scale-0" />
                <Moon className="absolute inset-0 h-[18px] w-[18px] rotate-180 scale-0 transition-all duration-300 text-foreground dark:rotate-0 dark:scale-100" />
              </div>
            </button>

            <Button className='rounded-full'>
              Get Started
            </Button>
            {/* Mobile: Show hamburger menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => {
                if (isDocsRoute && propsSetIsOpenSidebar) {
                  propsSetIsOpenSidebar(true);
                } else {
                  setShowDrawer(true);
                }
              }}
            >
              <Menu className="h-5 w-5 text-foreground" />
            </Button>
          </div>
        </div>
      </Nav>

      {/* Mobile Menu Sheet (Drawer) */}
      <Sheet open={showDrawer} onOpenChange={setShowDrawer}>
        <SheetContent side="left" className="w-[300px]">
          <SheetHeader>
            <SheetTitle>
              <Image
                alt="gluestack-ui logo"
                className="sm:h-[28px] h-[20px] w-auto"
                src={logoSrc}
                priority
              />
            </SheetTitle>
          </SheetHeader>
          <div onClick={() => setShowDrawer(false)}>
            <div className="flex flex-col gap-2 pt-4">
              <NextLink href="/demo">
                <Button variant="ghost" className="w-full justify-start">
                  Demo
                </Button>
              </NextLink>
              <NextLink href="/docs">
                <Button variant="ghost" className="w-full justify-start">
                  Docs
                </Button>
              </NextLink>
            </div>
          </div>
        </SheetContent>
      </Sheet>

      {/* Mobile Search Sheet */}
      <Sheet open={showMobileSearch} onOpenChange={setShowMobileSearch}>
        <SheetContent side="top" className="h-[200px]">
          <SheetHeader>
            <SheetTitle className="sr-only">Search Documentation</SheetTitle>
          </SheetHeader>
          {/* <div className="pt-4">
            <UiDocSearch />
          </div> */}
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Header;
