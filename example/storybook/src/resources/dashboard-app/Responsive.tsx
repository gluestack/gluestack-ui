import {
  Box,
  //  Pressable, Text
} from '@gluestack/design-system';
import React, { useRef, useState } from 'react';
// import NextImage from "next/image";
import { Expand } from './Expand';
import { Resizable } from 're-resizable';
// import { GluestackUIProvider } from "@gluestack-ui/themed"
// import { OpenInNewIcon } from "@gluestack/design-system";

function Responsiveness() {
  const resizableRef = useRef<any>(null);
  const [setIsMobile] = useState(true);
  return (
    <>
      <Resizable
        style={{ zIndex: 1 }}
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
        <Box h="100vh" w="100%" overflow="hidden">
          <iframe
            src="https://ui-kitchensink.gluestack.io/"
            title="NativeBase v3 Dashboard Example"
            style={{
              transformOrigin: '0px 0px',
              transform: 'scale(0.8)',
              width: '125vw',
              height: '125%',
              border: 'none',
              borderBottomLeftRadius: 16,
              borderBottomRightRadius: 16,
            }}
          />
        </Box>
      </Resizable>
    </>
  );
}

export default Responsiveness;
