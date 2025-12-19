'use client';
import React, { useMemo, useEffect, useContext } from 'react';
import { Box } from '@/components/ui/box';
import { VStack } from '@/components/ui/vstack';
import { HStack } from '@/components/ui/hstack';
import { Heading } from '@/components/ui/heading';
import { Icon } from '@/components/ui/icon';
import { Link, LinkText } from '@/components/ui/link';
import { Pressable } from '@/components/ui/pressable';
import { Text } from '@/components/ui/text';
import NextImage from 'next/image';
import { Resizable } from 're-resizable';
import { Expand } from '../Expand';
import QRCode from '@/public/assets/ui-example-nativewind-qr-code.png';
import { ExternalLink } from 'lucide-react-native';
import { ThemeContext } from '@/utils/context/theme-context';

// Function to detect if the user is on a web browser
function checkPlatform(colorMode: string) {
  if (/android/i.test(navigator.userAgent)) {
    window.location.href = `exp://u.expo.dev/update/${kitchensink.updateIds.android}`;
  } else if (/iPad|iPhone|iPod/i.test(navigator.userAgent)) {
    window.location.href = `exp://u.expo.dev/update/${kitchensink.updateIds.ios}`;
  } else if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    window.open(
      `https://ui-example-nativewind.vercel.app/?iframeMode=${colorMode}`
    );
  }
}

const kitchensink = {
  updateIds: {
    android: '32fe7e6c-3f69-438e-999e-e9c1e9e76c5c',
    ios: '89435e24-fa85-4d61-ac98-35168b4df84d',
  },
};

const Example = () => {
  const { colorMode } = useContext(ThemeContext);
  const resizableRef = React.useRef<any>(null);
  const [isMobile, setIsMobile] = React.useState(false);
  const iframeTheme = colorMode === 'light' ? 'dark' : 'light';
  const iframeSrc = useMemo(
    () => `https://ui-example-nativewind.vercel.app/?iframeMode=${iframeTheme}`,
    [iframeTheme]
  );

  useEffect(() => {
    const checkWidth = () => {
      if (resizableRef.current?.resizable) {
        setIsMobile(resizableRef.current.resizable.offsetWidth < 400);
      }
    };

    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  return (
    <VStack className="gap-10 md:gap-20 w-full mt-[120px]">
      <VStack className="gap-3 w-full">
        <Heading size="2xl" className="text-3xl md:text-4xl font-bold">
          Same code for Next.js and Expo
        </Heading>
        <Text className="text-lg font-normal leading-[30px] w-full md:w-[75%]">
          Build universal apps with consistent code across Next.js and Expo
          projects. Boost productivity, ensure code consistency, and simplify
          maintenance for both web and mobile platforms using a powerful React
          Native component library.
        </Text>
        <Link
          className="w-fit inline-block"
          aria-label="installation link"
          href="/ui/docs/home/getting-started/installation"
        >
          <LinkText className="text-lg font-bold underline underline-offset-4 group-hover/link:underline">
            Learn more
          </LinkText>
        </Link>
      </VStack>

      <Box className="w-full h-[592px] flex-row gap-6">
        {/* Mobile iframe */}
        <Box className="w-fit h-full flex justify-center">
          <iframe
            key={iframeSrc}
            className="w-[325px] h-[150%] overflow-hidden rounded-2xl shadow-[0px_0px_30px_0px_rgba(38,38,38,0.10)]"
            src={iframeSrc}
            title="NativeBase v3 Dashboard Example"
            style={{
              transformOrigin: '0px 0px',
              // transform: "",
            }}
            loading="lazy"
          />
        </Box>

        {/* Desktop resizable iframe */}
        <Box className="hidden xl:w-3/4 lg:w-2/3 md:w-1/2 h-full min-[900px]:block">
          <Resizable
            onResize={() => {
              if (resizableRef.current?.resizable) {
                setIsMobile(resizableRef.current.resizable.offsetWidth < 400);
              }
            }}
            ref={resizableRef}
            defaultSize={{
              width: '100%',
              height: '100%',
            }}
            style={{
              boxShadow: '0px 0px 30px 0px rgba(38, 38, 38, 0.10)',
              borderRadius: 16,
              height: '100%',
            }}
            bounds="parent"
            handleClasses={{
              right: 'right-handler',
            }}
            handleStyles={{
              right: {
                right: 0,
                width: 20,
                height: '10px',
                top: 'calc(45%+5px)',
                bottom: '50%',
              },
            }}
            handleComponent={{
              right: (
                <Box className="hidden md:flex">
                  <Expand />
                </Box>
              ),
            }}
            minWidth={400}
            maxWidth="100%"
            enable={{
              top: false,
              right: true,
              bottom: false,
              left: false,
              topRight: false,
              bottomRight: false,
              bottomLeft: false,
              topLeft: false,
            }}
          >
            <Box
              className={`${
                colorMode === 'light' ? 'bg-background-900' : 'bg-[#404040]'
              } rounded-t-2xl py-1.5 overflow-hidden flex flex-row`}
            >
              <NextImage
                src="/images/menu.svg"
                alt="menu-options"
                width={40}
                height={10}
                style={{
                  marginRight: 20,
                  marginLeft: 27,
                }}
              />
              {['Homestay', 'File', 'Edit', 'View'].map((item, index) => (
                <Text
                  className="mr-5 text-xs font-normal text-white"
                  key={item + index}
                >
                  {item}
                </Text>
              ))}
            </Box>
            <iframe
              className="h-[708px] w-full rounded-none"
              src={iframeSrc}
              title="NativeBase v3 Dashboard Example"
              style={{
                transformOrigin: '0px 0px',
                transform: 'scale(0.8)',
                width: '125%',
                border: 'none',
                borderBottomLeftRadius: 16,
                borderBottomRightRadius: 16,
              }}
              loading="lazy"
            />
          </Resizable>
        </Box>
      </Box>

      <Box className="mt-4 rounded-lg border border-outline-100 p-4 w-auto self-start md:flex-row">
        <Box>
          <Text className="text-typography-800 text-xl font-bold ">
            Give it a shot!
          </Text>

          <Box className="hidden md:flex">
            <Text className="text-base font-normal text-typography-800 leading-6">
              Try it in your browser or scan the QR code with the{' '}
            </Text>
            <HStack className="items-center">
              <NextImage
                src="/icon/expo-icon.svg"
                alt="expo-icon"
                width={18}
                height={24}
                style={{
                  verticalAlign: 'middle',
                }}
              />
              <Text> Expo app on your phone.</Text>
            </HStack>
          </Box>

          <Text className="flex md:hidden">
            Try on Expo app. It&apos;s the perfect way to dive right in and
            explore.
          </Text>
          <HStack className="items-center">
            <Text className="text-typography-800">
              The source code is available on{' '}
            </Text>
            <Link
              href="https://github.com/gluestack/ui-example-nativewind"
              isExternal
            >
              <LinkText>GitHub</LinkText>
            </Link>
          </HStack>
          <Pressable
            className="hidden py-1 px-3 mt-5 rounded-sm border border-typography-700 bg-transparent flex-row items-center w-fit md:flex"
            onPress={() => {
              checkPlatform(colorMode);
            }}
          >
            <Icon as={ExternalLink} className="h-4 w-4 text-typography-700" />
            <Text className="ml-2.5 text-sm font-normal leading-[22px]">
              Open in new tab
            </Text>
          </Pressable>

          <Pressable className="flex py-1 px-3 mt-5 rounded-sm border bg-transparent flex-row items-center w-auto md:hidden">
            <NextImage
              src="/icon/expo-icon.svg"
              alt="expo-icon"
              width={17}
              height={16}
            />
            <Text className="ml-2.5 text-sm font-normal leading-[22px]">
              Open in Expo
            </Text>
          </Pressable>
        </Box>

        <Box className="hidden md:flex items-center justify-center mt-4 md:mt-0 md:ml-10">
          <NextImage alt="qr_code" className="w-28 h-28" src={QRCode} />
        </Box>
      </Box>
    </VStack>
  );
};

export default Example;
