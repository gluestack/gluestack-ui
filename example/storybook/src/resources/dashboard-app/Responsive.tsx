import { Box, Text } from '@gluestack/design-system';
import React, { useRef, useState } from 'react';
import NextImage from 'next/image';
import { Expand } from './Expand';
import { Resizable } from 're-resizable';
// import { GluestackUIProvider } from "@gluestack-ui/themed"
// import { OpenInNewIcon } from "@gluestack/design-system";

function Responsiveness() {
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
            src="https://ui-kitchensink.gluestack.io/"
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
    </Box>
  );
}

export default Responsiveness;
