import { Box, Text, Pressable, OpenInNewIcon } from '@gluestack/design-system';
import React, { useRef, useState } from 'react';
import NextImage from 'next/image';
import { Expand } from '../../apps/dashboard-app/Expand';
import { Resizable } from 're-resizable';
import { Text as NText } from '../../core-components/nativewind/text';
import { Image as NImage } from '../../core-components/nativewind/image';

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
    <Box minWidth={'70vw'}>
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
              display="none"
              sx={{
                '@md': {
                  display: 'flex',
                },
              }}
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
          flexDirection="row"
          alignItems="center"
          bg="$backgroundDark950"
          py="$1.5"
          borderTopLeftRadius="$2xl"
          borderTopRightRadius="$2xl"
          display="none"
          sx={{
            '@sm': {
              display: isMobile ? 'none' : 'flex',
            },
          }}
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
            <Box flexDirection="row">
              <Text mr="$5" fontSize="$xs" fontWeight="$normal">
                Homestay
              </Text>

              <Text mr="$5" fontSize="$xs" fontWeight="$normal">
                File
              </Text>

              <Text mr="$5" fontSize="$xs" fontWeight="$normal">
                Edit
              </Text>

              <Text mr="$5" fontSize="$xs" fontWeight="$normal">
                View
              </Text>
            </Box>
          )}
        </Box>

        <Box
          display="flex"
          sx={{
            '@sm': {
              display: isMobile ? 'flex' : 'none',
            },
          }}
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          borderTopLeftRadius="$2xl"
          borderTopRightRadius="$2xl"
          bg="$backgroundDark950"
          py="$1.5"
        >
          <Text ml="$5" fontSize="$xs" fontWeight="$bold" color="$trueGray400">
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

        <Box h="100%" w="100%" overflow="hidden">
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
        mt="-$12"
        mb="$6"
        borderRadius="$lg"
        borderWidth={1}
        bg="$backgroundDark950"
        borderColor="$borderDark800"
        p="$4"
        width="auto"
        alignSelf="flex-start"
        sx={{
          '@md': {
            flexDirection: 'row',
          },
        }}
      >
        <Box>
          <NText className="text-typography-900 font-bold font-Inter" size="xl">
            Give it a shot!
          </NText>

          <Box
            display="none"
            sx={{
              '@md': {
                display: 'flex',
              },
            }}
          >
            <NText
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
            </NText>
          </Box>

          <NText className="flex text-typography-600 font-Inter mt-2 md:hidden md:max-w-[319px]">
            Try on Expo app. It&apos;s the perfect way to dive right in and
            explore.
          </NText>

          <Pressable
            display="none"
            py="$1"
            px="$3"
            mt="$5"
            borderColor="$borderDark700"
            borderRadius="$sm"
            borderWidth={1}
            bg="transparent"
            flexDirection="row"
            alignItems="center"
            width="auto"
            alignSelf="flex-start"
            sx={{
              '_web': {
                ':focus': {
                  boxShadow: '#004282 0px 0px 0px 2px',
                  _dark: {
                    boxShadow: '#004282 0px 0px 0px 2px',
                  },
                },
              },
              '@md': {
                display: 'flex',
              },
            }}
            onPress={() =>
              checkPlatform({
                android: updateIds?.android,
                ios: updateIds?.ios,
                uri: iframeUri,
              })
            }
          >
            <OpenInNewIcon />
            <NText className="text-typography-950 ml-2.5" size="sm">
              Open in new tab
            </NText>
          </Pressable>

          <Pressable
            display="flex"
            py="$1"
            px="$3"
            mt="$5"
            borderColor="$borderDark700"
            borderRadius="$sm"
            borderWidth={1}
            bg="transparent"
            flexDirection="row"
            alignItems="center"
            width="auto"
            alignSelf="flex-start"
            sx={{
              '_web': {
                ':focus': {
                  boxShadow: '#004282 0px 0px 0px 2px',
                  _dark: {
                    boxShadow: '#004282 0px 0px 0px 2px',
                  },
                },
              },
              '@md': {
                display: 'none',
              },
            }}
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
            <NText className="text-typography-950 ml-2.5" size="sm">
              Open in Expo
            </NText>
          </Pressable>
        </Box>
        <Box
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          ml="$10"
          display="none"
          sx={{
            '@md': {
              display: 'flex',
            },
          }}
        >
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
