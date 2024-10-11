import React, { useContext } from 'react';
import {
  LiveProvider,
  LivePreview as ReactLivePreview,
  LiveError,
} from 'react-live';
import { Box, ExpoIcon, Link, Text } from '../../index';
import { CodePreviewContext } from './CodePreviewProvider';
import Image from 'next/image';
// @ts-ignore
// import { themes } from 'prism-react-renderer/themes';
const ComponentRenderer = ({
  showArgsController,
  _rendererWrapper,
  showExternalResource,
  activeTab,
  href,
  ...props
}: any) => {
  const { metaData, propsString } = useContext(CodePreviewContext);

  return (
    <Box
      className="border-[1px] border-[#DDDCDB] rounded-xl flex-1 overflow-hidden flex-wrap items-center justify-center min-h-[200px] "
      {..._rendererWrapper}
    >
      {showExternalResource && (
        <Link
          href={href}
          isExternal
          // right="$4"
          // top="$4"
          // flexDirection="row"
          // alignItems="center"
          // px="$3"
          // py="$1"
          // borderWidth="$1"
          // borderColor="$borderDark800"
          // rounded="$sm"
          // sx={{
          //   _light: { borderColor: '$borderLight300' },
          // }}
          className="absoulute right-4 top-4 flex-row items-center px-3 py-1 border-[1px] dark:border-borderDark-800 rounded-sm border-borderLight-300"
        >
          <ExpoIcon h="$5" w="$5" mr="$2.5" color="#0072BC" />
          <Text
            color="$textLight50"
            fontSize="$sm"
            sx={{
              _web: {
                userSelect: 'none',
              },
              _light: { color: '$textLight700' },
            }}
          >
            Open in Expo
          </Text>
        </Link>
      )}
      <Box className="w-[500px]">
        {activeTab === 'android' ? (
          <Image
            src={'/images/codeblock/assets/android-frame.png'}
            alt="android frame"
            className="relative"
            layout="fill"
            objectFit="contain"
          />
        ) : activeTab === 'ios' ? (
          <Image
            src={'/images/codeblock/assets/iphone-frame.png'}
            alt="android frame"
            className="relative"
            layout="fill"
            objectFit="contain"
          />
        ) : null}
        <Box className="absolute top-[15%] p-4 w-[200px] left-[30%]">
          <LiveProvider
            code={
              showArgsController
                ? metaData?.code.replace('{...props}', propsString)
                : metaData?.code
            }
            transformCode={metaData?.transformCode ?? null}
            scope={{ ...metaData?.scope }}
            {...props}
          >
            <ReactLivePreview />
            <LiveError />
          </LiveProvider>
        </Box>
      </Box>
    </Box>
  );
};

export default ComponentRenderer;
