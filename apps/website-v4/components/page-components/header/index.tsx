'use client';
import ToggleThemeButton from '@/components/custom/toggle-theme-button';
import { Button } from '@/components/web/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/web/sheet';
import GluestackLogoDark from '@/public/logo/products/gluestack/gluestack-logo-dark.svg';
import GluestackLogo from '@/public/logo/products/gluestack/gluestack-logo.svg';
import { LayoutContext } from '@/utils/layout-context';
import { useTheme } from 'next-themes';
import { Nav } from '@expo/html-elements';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';
import { UiDocSearch } from './DocSearch';
import ProductDropdown from './ProductDropdown';

const Header = ({
  isOpenSidebar: propsIsOpenSidebar,
  setIsOpenSidebar: propsSetIsOpenSidebar,
}: {
  isOpenSidebar?: boolean;
  setIsOpenSidebar?: (value: boolean) => void;
} = {}) => {
  const { resolvedTheme } = useTheme();
  const [showDrawer, setShowDrawer] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const context = useContext(LayoutContext);
  const isOpenSidebar = propsIsOpenSidebar ?? context.isOpenSidebar;
  const setIsOpenSidebar = propsSetIsOpenSidebar ?? context.setIsOpenSidebar;

  useEffect(() => {
    setMounted(true);
  }, []);

  // Check if current route is documentation
  const isDocsRoute = pathname?.includes('/ui/docs/');

  // Use a default logo during SSR to avoid hydration mismatch
  const logoSrc = mounted
    ? resolvedTheme === 'dark'
      ? GluestackLogoDark
      : GluestackLogo
    : GluestackLogo;

  return (
    <div className="h-[80px] w-full sticky z-10 flex justify-center bg-white/80 dark:bg-background/80 backdrop-blur-md">
      {/* @ts-ignore */}
      <Nav className="items-center md:px-[120px] px-8 w-full mx-auto py-6">
        <div className="flex flex-row justify-between items-center w-full">
          <div className="flex flex-row gap-6 items-center">
            <NextLink href="/" className="no-underline z-1 ml-2 flex flex-row gap-1 items-center">
              <Image
                alt="gluestack-ui logo"
                className="h-[20px] w-auto"
                src={logoSrc}
                priority
              />
              <span className='text-xs font-semibold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/50'>preview</span>
            </NextLink>
            {/* Desktop: Show Docs and Demo buttons */}
            <div className="hidden md:flex items-center gap-1.5 lg:gap-6">
              {isDocsRoute ? (
                <div className="sm:mr-6 mr-4">
                  <UiDocSearch />
                </div>
              ) : (
                <>
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
                </>
              )}
            </div>
          </div>
          <div className="flex flex-row gap-6 items-center scale-75 sm:scale-100">
            <ToggleThemeButton />
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

      {/* Mobile Sheet (Drawer) */}
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
    </div>
  );
};

export default Header;
