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
import { UiDocSearch } from './DocSearch';
import ProductDropdown from './ProductDropdown';
import { useColorMode } from '@/app/provider';

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
  // const context = useContext(LayoutContext);
  // const isOpenSidebar = propsIsOpenSidebar ?? context.isOpenSidebar;
  // const setIsOpenSidebar = propsSetIsOpenSidebar ?? context.setIsOpenSidebar;

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
    <div className="h-[80px] w-full sticky top-0 z-10 flex justify-center bg-white/80 dark:bg-background/80 backdrop-blur-md">
      {/* @ts-ignore */}
      <Nav className="items-center md:px-[120px] px-8 w-full mx-auto py-6">
        <div className="flex flex-row justify-between items-center w-full">
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
              {/* {isDocsRoute ? (
                <div className="sm:mr-6 mr-4">
                  <UiDocSearch />
                </div>
              ) : ( */}
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
              {/* )} */}
            </div>
          </div>
          <div className="flex flex-row gap-3 items-center">
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

            <button
              role="button"
              onClick={() => {
                setColorMode(colorMode === 'dark' ? 'light' : 'dark');
              }}
              className="web:focus:shadow-none lg:flex hidden "
            >
              <div className={`rounded-full items-center justify-center `}>
                {colorMode === 'dark' ? (
                  <Moon className="absolute h-[18px] w-[18px] scale-0 rotate-90 transition-all text-muted-foreground dark:scale-100 dark:rotate-0" />
                ) : (
                  <Sun className="h-[18px] w-[18px] scale-100 rotate-0 transition-all text-muted-foreground dark:scale-0 dark:-rotate-90" />
                )}
              </div>
            </button>
            {/* Mobile: Show hamburger menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setShowDrawer(true)}
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
          <div className="pt-4">
            <UiDocSearch />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Header;
