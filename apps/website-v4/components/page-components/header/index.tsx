'use client';
import { Box } from '@/components/ui/box';
import { Button, ButtonText } from '@/components/ui/button';
import { HStack } from '@/components/ui/hstack';
import { VStack } from '@/components/ui/vstack';
import { Link } from '@/components/ui/link';
import GluestackLogo from '@/public/logo/products/gluestack/gluestack-logo.svg';
import GluestackLogoDark from '@/public/logo/products/gluestack/gluestack-logo-dark.svg';
import { Nav } from '@expo/html-elements';
import Image from 'next/image';
import ToggleThemeButton from '@/components/custom/toggle-theme-button';
import { useState } from 'react';
import { useMode } from '@/utils/theme-context';
import { Icon, MenuIcon, CloseIcon } from '@/components/ui/icon';
import {
  Drawer,
  DrawerBackdrop,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerCloseButton,
} from '@/components/ui/drawer';

interface HeaderProps {
  isScrolled?: boolean;
  showPromoBanner?: boolean;
}

const Header = ({
  isScrolled = false,
  showPromoBanner = false,
}: HeaderProps) => {
  const { colorMode } = useMode();
  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <Box
      className="h-[80px] w-full sticky z-10 justify-center transition-all duration-300 bg-white/80 dark:bg-background-0/80 backdrop-blur-md
      "
    >
      {/* @ts-ignore */}
      <Nav className="items-center max-w-[1760px] md:px-[120px] px-8  w-full mx-auto py-6">
        <Box className="flex-row justify-between items-center  w-full">
          <Link href="/" className="no-underline z-1 inherit ml-2">
            <Image
              alt="gluestack-ui logo"
              className={'h-[20px] w-auto'}
              src={colorMode === 'dark' ? GluestackLogoDark : GluestackLogo}
              priority
            />
          </Link>
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

            {/* Desktop: Show Docs and Demo buttons */}
            <HStack className="hidden md:flex gap-4 items-center">
              <Link href="/demo">
                <Button variant="link">
                  <ButtonText className="data-[hover=true]:no-underline data-[active=true]:no-underline text-typography-950 dark:text-typography-400 data-[hover=true]:text-typography-500 data-[active=true]:text-typography-600">
                    Demo
                  </ButtonText>
                </Button>
              </Link>
              <Link href="/docs">
                <Button variant="link">
                  <ButtonText className="data-[hover=true]:no-underline data-[active=true]:no-underline text-typography-950 dark:text-typography-400 data-[hover=true]:text-typography-500 data-[active=true]:text-typography-600">
                    Docs
                  </ButtonText>
                </Button>
              </Link>
              {/* <GradientCtaButton
                buttonClassName="scale-75"
                variant="gradient"
                buttonTextClassName="text-lg font-bold"
                onPress={() =>
                  window.open(
                    "https://theappmarket.io/buy/gluestack-pro/gluestack-pro?utm_source=gluestack-pro-website&utm_medium=referral&utm_campaign=header",
                    "_blank"
                  )
                }
              >
                Buy Now
              </GradientCtaButton> */}
            </HStack>
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
