import React from 'react';
import { Box, CodeBlock, Tabs, Text } from '../../index';
import { LiveProvider, LivePreview, LiveError } from 'react-live';

function removeImportStatements(mainString: string) {
  let result = mainString.replace(/import .*?;/gs, '');
  result = result.replace(/export /g, '');
  return result;
}

export function CodePreviewWithTabs({
  files = [],
  transformCode,
  scope,
  _rendererWrapper = {},
  landingPage = false,
  ...props
}: {
  files: Array<{ fileName: string; code: string }>;
  transformCode?: any;
  // pass like this transformedCodeWithoutWrapper(code, 'function', 'App')
  scope: any;
  landingPage?: boolean;
  _rendererWrapper?: any;
} & {
  [key: string]: any;
}) {
  const style = landingPage ? { flex: 1 } : {};

  let finalCode = '';
  files.forEach((fileObj) => {
    finalCode += fileObj.code;
  });
  finalCode = removeImportStatements(finalCode);

  return (
    <Box
      bg="$white"
      borderWidth="$1"
      borderColor="$borderLight200"
      rounded="$lg"
      mb="$6"
      sx={{
        'overflow': 'hidden',
        'flexDirection': 'column',
        '@lg': {
          flexDirection: landingPage ? 'row' : 'column',
        },
        '_dark': {
          bg: '$black',
          borderColor: '$borderDark800',
        },
      }}
      {...props}
    >
      <Box
        flex={1}
        overflow="hidden"
        flexWrap="wrap"
        alignItems="center"
        justifyContent="center"
        minHeight={'200px'}
        {..._rendererWrapper}
      >
        <LiveProvider
          code={finalCode.trim()}
          transformCode={transformCode ?? null}
          scope={scope}
          {...props}
        >
          <LivePreview />
          <LiveError />
        </LiveProvider>
      </Box>
      <Box
        bg="#1a1d23"
        {...style}
        sx={{
          borderColor: '$borderDark800',
        }}
        overflow="hidden"
      >
        <Tabs
          bg="$backgroundLight50"
          sx={{
            _dark: {
              bg: landingPage ? '#16181B' : '$backgroundDark950',
            },
          }}
        >
          <CodeBlock.TabList pt="$1">
            {files.map((fileObj) => (
              <CodeBlock.Tab>
                <Text>{fileObj.fileName}</Text>
              </CodeBlock.Tab>
            ))}
          </CodeBlock.TabList>
          <Tabs.TabPanels>
            {files.map((fileObj) => (
              <CodeBlock.TabPanel
                code={fileObj.code.trim()}
                key={fileObj.fileName}
                h={348}
                sx={
                  !landingPage && {
                    bg: '$backgroundLight100',
                    _dark: {
                      bg: '$backgroundDark900',
                    },
                  }
                }
              />
            ))}
          </Tabs.TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
}
