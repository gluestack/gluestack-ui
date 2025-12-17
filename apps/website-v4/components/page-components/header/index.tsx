'use client';
import ToggleThemeButton from '@/components/custom/toggle-theme-button';
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
import { CloseIcon, Icon, MenuIcon } from '@/components/ui/icon';
import { Link } from '@/components/ui/link';
import { Pressable } from '@/components/ui/pressable';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import GluestackLogoDark from '@/public/logo/products/gluestack/gluestack-logo-dark.svg';
import GluestackLogo from '@/public/logo/products/gluestack/gluestack-logo.svg';
import { LayoutContext } from '@/utils/layout-context';
import { useMode } from '@/utils/theme-context';
import { Nav } from '@expo/html-elements';
import Image from 'next/image';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import { useContext, useState } from 'react';
import { UiDocSearch } from './DocSearch';
import ProductDropdown from './ProductDropdown';

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
  const isOpenSidebar = propsIsOpenSidebar ?? context.isOpenSidebar;
  const setIsOpenSidebar = propsSetIsOpenSidebar ?? context.setIsOpenSidebar;

  // Check if current route is documentation
  const isDocsRoute = pathname?.includes('/ui/docs/');

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
                  <ProductDropdown />
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
