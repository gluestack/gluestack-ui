/* eslint-disable react-native/no-inline-styles */
import { CopyOutlinedIcon, useClipboard, CopyFilledIcon } from '../../';
import { Box } from '@/components/ui/box';
import { HStack } from '@/components/ui/hstack';
import { Text } from '@/components/ui/text';
import { Divider } from '@/components/ui/divider';
import { Pressable } from '@/components/ui/pressable';
import { Icon } from '@/components/ui/icon';
import React, { memo } from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import vsDark from 'prism-react-renderer/themes/vsDark';
import vsLight from 'prism-react-renderer/themes/duotoneLight';
import prettier from 'prettier/standalone';
import prettierParser from 'prettier/parser-typescript';
import { useColorMode } from '@gluestack-style/react';

const CodeBlock = memo(
  ({
    code = '',
    withLineNumbers = false,
    showHeader,
    showHeaderIcons,
    language = 'jsx',
    fontSize,
    copyProps,
    _highLightProps = {},
    showCopy: showCopyProp,
    ...props
  }: any) => {
    let prettifiedCode: any = code.trim(' ');

    try {
      prettifiedCode =
        language === 'jsx' || language === 'tsx'
          ? prettier
              .format(code.trim(' '), {
                semi: false,
                parser: 'typescript',
                plugins: [prettierParser],
              })
              .trim()
          : code.trim(' ');
    } catch (Err) {
      //
      console.error('Error! prettier failed: ', Err);
    }

    if (prettifiedCode.startsWith(';')) {
      prettifiedCode = prettifiedCode.slice(1);
    }

    const [copied, setCopied] = React.useState(false);
    const [showCopy, setShowCopy] = React.useState(false);

    const { onCopy } = useClipboard();

    const colorMode = useColorMode();
    function handleCopy() {
      onCopy(code);
      setCopied(true);
      // set copied to false after 2 second
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    }

    return (
      <Box className="flex-1 h-full">
        {showHeader && (
          <>
            <HStack space="md">
              {showHeaderIcons && (
                <>
                  <Box className="h-2.5 w-2.5 rounded-full bg-[#505A6A]" />
                  <Box className="h-2.5 w-2.5 rounded-full bg-[#505A6A]" />
                  <Box className="h-2.5 w-2.5 rounded-full bg-[#505A6A]" />
                </>
              )}
            </HStack>
            <Divider className="bg-[#505a6a4d]" />
          </>
        )}
        <Box
          onMouseEnter={() => {
            setShowCopy(true);
          }}
          onMouseLeave={() => {
            setShowCopy(false);
          }}
          className="pr-6 pl-6 bg-[#1A1D23] h-max max-h-[400px] overflow-auto"
          {...props}
        >
          <Highlight
            {...defaultProps}
            theme={colorMode === 'light' ? vsLight : vsDark}
            code={prettifiedCode}
            language={language}
            {..._highLightProps}
          >
            {({ tokens, getLineProps, getTokenProps }) => (
              <Box className="relative">
                <pre className="m-0">
                  {tokens.map((line, i) => (
                    <div
                      {...getLineProps({ line, key: i })}
                      style={{
                        ...getLineProps({ line, key: i })?.style,
                      }}
                      className="flex items-center"
                    >
                      {withLineNumbers && (
                        <Text className="opacity-30 web:select-none text-[#505A6A] pr-8 text-sm leading-6">
                          {i + 1}
                        </Text>
                      )}
                      <div>
                        {line.map((token, key) => {
                          const { style, ...props } = getTokenProps({
                            token,
                            key,
                          });
                          return (
                            <span
                              {...props}
                              // eslint-disable-next-line react-native/no-inline-styles
                              style={{
                                fontSize: fontSize || '14px',
                                lineHeight: '24px',
                                whiteSpace: 'pre',
                                ...style,
                              }}
                              className={`${
                                fontSize ? `text-${fontSize}` : 'text-sm'
                              } leading-6 whitespace-pre`}
                            />
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </pre>
              </Box>
            )}
          </Highlight>
        </Box>
        {(showCopy || showCopyProp) && (
          <Pressable
            onPress={handleCopy}
            //@ts-ignore
            onMouseEnter={() => {
              setShowCopy(true);
            }}
            onMouseLeave={() => {
              setShowCopy(false);
            }}
            className="absolute right-6 top-6 shadow-none "
            {...copyProps}
          >
            {!copied ? (
              <Icon
                className="h-5 w-5 text-background-600 dark:text-background-100"
                as={CopyOutlinedIcon}
                size="md"
              />
            ) : (
              <Icon
                className="h-5 w-5 text-background-600 dark:text-background-100"
                as={CopyFilledIcon}
                size="md"
              />
            )}
          </Pressable>
        )}
      </Box>
    );
  }
);

export { CodeBlock };
