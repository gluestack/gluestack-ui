'use client';

import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';
import { Pressable } from '@/components/ui/pressable';
import React, { useRef, useState } from 'react';
import NextImage from 'next/image';
import { Expand } from '@/docs-components/apps/dashboard-app/Expand';
import { Resizable } from 're-resizable';
import { Text as NText } from '@/components/ui';
import { Image as NImage } from '@/components/ui';

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
            <Box className="hidden md:flex">
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
        {/* Desktop header bar */}
        <Box
          className={`flex-row items-center bg-gray-950 py-1.5 rounded-t-2xl ${
            isMobile ? 'hidden' : 'hidden sm:flex'
          }`}
        >
          <NextImage
            src="/images/menu.svg"
            alt="menu-options"
            width={40}
            height={10}
            className="mr-5 ml-7"
          />
          {showMenuItems && (
            <Box className="flex flex-row">
              <Text className="mr-5 text-xs font-normal text-white">
                Homestay
              </Text>
              <Text className="mr-5 text-xs font-normal text-white">File</Text>
              <Text className="mr-5 text-xs font-normal text-white">Edit</Text>
              <Text className="mr-5 text-xs font-normal text-white">View</Text>
            </Box>
          )}
        </Box>

        {/* Mobile header bar */}
        <Box
          className={`${
            isMobile ? 'flex' : 'flex sm:hidden'
          } flex-row justify-between items-center rounded-t-2xl bg-gray-950 py-1.5`}
        >
          <Text className="ml-5 text-xs font-bold text-gray-400">8:15</Text>
          <NextImage
            src="/images/statusicons.svg"
            alt="menu-options"
            width={56}
            height={15}
            className="mr-6"
          />
        </Box>

        {/* Iframe container */}
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

      {/* Bottom info section */}
      <Box className="flex flex-col md:flex-row -mt-12 mb-6 rounded-lg border border-outline-400 bg-background-0 p-4 w-auto self-start">
        <Box className="flex-1">
          <NText className="text-typography-950 font-bold font-Inter text-xl">
            Give it a shot!
          </NText>

          {/* Desktop description */}
          <Box className="hidden md:flex">
            <NText className="text-typography-400 font-Inter mt-2 md:max-w-[319px] text-base">
              Try it in your browser or scan the QR code with the&nbsp;
              <NextImage
                src="/icon/expo-icon.svg"
                alt="expo-icon"
                width={18}
                height={24}
                className="inline align-middle"
              />
              &nbsp;Expo app on your phone.
            </NText>
          </Box>

          {/* Mobile description */}
          <NText className="flex text-typography-600 font-Inter mt-2 md:hidden md:max-w-[319px]">
            Try on Expo app. It&apos;s the perfect way to dive right in and
            explore.
          </NText>

          {/* Desktop button */}
          <Pressable
            className="hidden md:flex py-1 px-3 mt-5 border border-outline-400 rounded-sm bg-transparent flex-row items-center w-auto self-start transition-all duration-200 hover:border-outline-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onPress={() =>
              checkPlatform({
                android: updateIds?.android,
                ios: updateIds?.ios,
                uri: iframeUri,
              })
            }
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-typography-950"
            >
              <path
                d="M4.49999 3C3.67157 3 3 3.67157 3 4.5V11.5C3 12.3284 3.67157 13 4.49999 13H11.5C12.3284 13 12.9999 12.3284 12.9999 11.5V9.26923C12.9999 8.99309 13.2238 8.76923 13.4999 8.76923C13.7761 8.76923 13.9999 8.99309 13.9999 9.26923V11.5C13.9999 12.8807 12.8807 14 11.5 14H4.49999C3.11928 14 2 12.8807 2 11.5V4.5C2 3.11929 3.11928 2 4.49999 2H6.73075C7.00689 2 7.23074 2.22386 7.23074 2.5C7.23074 2.77614 7.00689 3 6.73075 3H4.49999ZM8.76926 2.5C8.76926 2.22386 8.99311 2 9.26925 2H13.5C13.7761 2 14 2.22386 14 2.5V6.73077C14 7.00691 13.7761 7.23077 13.5 7.23077C13.2239 7.23077 13 7.00691 13 6.73077V3.70711L9.6228 7.08433C9.42754 7.27959 9.11096 7.27959 8.9157 7.08433C8.72044 6.88906 8.72044 6.57248 8.9157 6.37722L12.2929 3H9.26925C8.99311 3 8.76926 2.77614 8.76926 2.5Z"
                fill="currentColor"
              />
            </svg>
            <NText className="text-typography-950 ml-2.5 text-sm">
              Open in new tab
            </NText>
          </Pressable>

          {/* Mobile button */}
          <Pressable
            className="flex md:hidden py-1 px-3 mt-5 border border-outline-600 rounded-sm bg-transparent flex-row items-center w-auto self-start transition-all duration-200 hover:border-outline-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            <NText className="text-typography-950 ml-2.5 text-sm">
              Open in Expo
            </NText>
          </Pressable>
        </Box>

        {/* QR Code section */}
        <Box className="hidden md:flex flex-row justify-center items-center ml-10">
          <NImage
            alt="qr-code"
            className="w-24 h-24"
            source={{
              uri: qrCodeUri,
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Responsiveness;
