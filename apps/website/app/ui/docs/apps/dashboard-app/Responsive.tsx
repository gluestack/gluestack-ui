import React, { useRef, useState } from 'react';
import NextImage from 'next/image';
import { Expand } from '../../apps/dashboard-app/Expand';
import { Resizable } from 're-resizable';
import { Text } from '@/components/ui/text';
import { Image } from '@/components/ui/image';
import { Box } from '@/components/ui/box';
import { Pressable } from '@/components/ui/pressable';

//function to detect if the user is on a web browser
function checkPlatform({
  android,
  ios,
  uri,
}: {
  android: string;
  ios: string;
  uri: string;
}) {
  if (/android/i.test(navigator.userAgent)) {
    window.location.href = `exp://u.expo.dev/update/${android}`;
  } else if (/iPad|iPhone|iPod/i.test(navigator.userAgent)) {
    window.location.href = `exp://u.expo.dev/update/${ios}`;
  } else if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    window.open(uri);
  }
}

function Responsiveness({
  iframeUri,
  qrCodeUri,
  updateIds,
  showMenuItems = false,
}: {
  iframeUri: string;
  qrCodeUri: string;
  updateIds: {
    android: string;
    ios: string;
  };
  showMenuItems?: boolean;
}) {
  const resizableRef = useRef<any>(null);
  const [isMobile, setIsMobile] = useState(true);

  return (
    <Box className="min-w-[70vw]">
      <Resizable
        onResize={() =>
          setIsMobile(
            resizableRef.current?.resizable?.offsetWidth &&
              resizableRef.current?.resizable?.offsetWidth < 400
          )
        }
        ref={resizableRef}
        defaultSize={{
          width: 200,
          height: 680,
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
            top: '40%',
            bottom: '50%',
          },
        }}
        handleComponent={{
          right: (
            <Box
              className="hidden md:flex"
            >
              <Expand />
            </Box>
          ),
        }}
        minWidth="300px"
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
          className="flex-row items-center bg-backgroundDark950 py-1.5 border-top-left-radius-2xl border-top-right-radius-2xl hidden md:flex"
         
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
          {showMenuItems && (
            <Box  className="flex-row">
              <Text className="mr-5 text-xs font-normal">
                Homestay
              </Text>

              <Text className="mr-5 text-xs font-normal">
                File
              </Text>

              <Text className="mr-5 text-xs font-normal">
                Edit
              </Text>

              <Text className="mr-5 text-xs font-normal">
                View
              </Text>
            </Box>
          )}
        </Box>

        <Box
          className="flex flex-row justify-between items-center border-top-left-radius-2xl border-top-right-radius-2xl bg-backgroundDark950 py-1.5 "
          
          sx={{
            '@sm': {
              display: isMobile ? 'flex' : 'none',
            },
          }}
        
        >
          <Text className="ml-5 text-xs font-bold text-trueGray400">
            8:15
          </Text>

          <NextImage
            src="/images/statusicons.svg"
            alt="menu-options"
            width={56}
            height={15}
            style={{
              marginRight: 24,
            }}
          />
        </Box>

        <Box className="h-full w-full overflow-hidden">
          <iframe
            src={iframeUri}
            title="NativeBase v3 Dashboard Example"
            style={{
              transformOrigin: '0px 0px',
              transform: 'scale(0.8)',
              width: '125%',
              height: '125%',
              border: 'none',
              borderBottomLeftRadius: 16,
              borderBottomRightRadius: 16,
            }}
          />
        </Box>
      </Resizable>

      <Box
        className="mt-[-12px] mb-6 rounded-lg border border-outline-900  p-4 w-auto self-start md:flex-row"
      >
        <Box className="">
          <Text className="text-typography-900 font-bold font-Inter" size="xl">
            Give it a shot!
          </Text>

          <Box className="hidden md:flex">
            <Text
              className="text-typography-600 font-Inter mt-2 md:max-w-[319px]"
              size="md"
            >
              Try it in your browser or scan the QR code with the&nbsp;
              <NextImage
                src="/icon/expo-icon.svg"
                alt="expo-icon"
                width={18}
                height={24}
                style={{
                  verticalAlign: 'middle',
                }}
                className="inline"
              />
              &nbsp;Expo app on your phone.
            </Text>
          </Box>

          <Text className="flex text-typography-600 font-Inter mt-2 md:hidden md:max-w-[319px]">
            Try on Expo app. It&apos;s the perfect way to dive right in and
            explore.
          </Text>

          <Pressable
            className=" hidden md:flex py-1 px-3 mt-5 border-outline-900 rounded-sm border-1 bg-transparent flex-row items-center w-auto self-start"
            // sx={{
            //   '_web': {
            //     ':focus': {
            //       boxShadow: '#004282 0px 0px 0px 2px',
            //       _dark: {
            //         boxShadow: '#004282 0px 0px 0px 2px',
            //       },
            //     },
            //   },
           
            // }}
            onPress={() =>
              checkPlatform({
                android: updateIds?.android,
                ios: updateIds?.ios,
                uri: iframeUri,
              })
            }
          >
            {/* <OpenInNewIcon /> */}
            <Text className="text-typography-950 ml-2.5" size="sm">
              Open in new tab
            </Text>
          </Pressable>

          <Pressable
            className="flex py-1 px-3 mt-5 border-outline-900 rounded-sm border-1 bg-transparent flex-row items-center w-auto self-start "

            // borderWidth={1}
            // bg="transparent"
            // flexDirection="row"
            // alignItems="center"
            // width="auto"
            // // alignSelf="flex-start"
            // sx={{
            //   '_web': {
            //     ':focus': {
            //       boxShadow: '#004282 0px 0px 0px 2px',
            //       _dark: {
            //         boxShadow: '#004282 0px 0px 0px 2px',
            //       },
            //     },
            //   },
            //   '@md': {
            //     display: 'none',
            //   },
            // }}
            onPress={() => {
              checkPlatform({
                android: updateIds?.android,
                ios: updateIds?.ios,
                uri: iframeUri,
              });
            }}
          >
            <NextImage
              src="/icon/expo-icon.svg"
              alt="expo-icon"
              width={17}
              height={16}
            />
            <Text className="text-typography-950 ml-2.5" size="sm">
              Open in Expo
            </Text>
          </Pressable>
        </Box>
        <Box
          className="ml-10 hidden md:flex flex-row justify-center items-center "
        >
          <Image
            alt="qr-code"
            className="w-24 h-24"
            source={qrCodeUri}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Responsiveness;
