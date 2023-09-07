// @ts-nocheck
import React, { useState } from 'react';
import {
  Box,
  HStack,
  VStack,
  Text,
  LogoTag,
  Button,
} from '@gluestack/design-system';
import Next from './Next';
import MySvgComponent from './MySvgComponent';
import Expo1 from './Expo1';
import ReactN from './ReactN';
import VsCode from './VsCode';
import NextLink from 'next/link';
import Tilde from './Tilde';
import Copied from './Copied';
import Copy from './Copy';

function Card1() {
  const [copied, setCopied] = useState(false);
  const [showCopy, setShowCopy] = useState(false);

  const copyToClipboard = async () => {
    const text = 'npm create gluestack';
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <Box my="$6">
      <Box
        gap="$5"
        mb="$6"
        sx={{
          '@lg': {
            flexDirection: 'row',
          },
          'flexDirection': 'column',
        }}
        w="$full"
      >
        <Box
          borderRadius="$xl"
          borderWidth="$1"
          sx={{
            '@lg': {
              flex: 1,
            },
            'borderColor': '$trueGray300',
            '_dark': {
              borderColor: '$trueGray800',
            },
            '_web': {
              background:
                'linear-gradient(329deg, rgba(0, 56, 255, 0.08) 0%, rgba(39, 87, 255, 0.00) 99.99%, rgba(0, 56, 255, 0.00) 100%), linear-gradient(123deg, rgba(233, 185, 255, 0.60) 0%, rgba(15, 24, 86, 0.00) 100%)',
              _dark: {
                background:
                  'linear-gradient(329deg, rgba(0, 16, 71, 0.40) 0%, rgba(77, 77, 77, 0.00) 100%), linear-gradient(123deg, rgba(115, 41, 150, 0.60) 0%, rgba(15, 24, 86, 0.00) 100%)',
              },
            },
          }}
        >
          <Box p="$6">
            <VStack space="lg" justifyContent="center">
              <HStack justifyContent="space-between" alignItems="center">
                <Text
                  fontSize="$2xl"
                  fontWeight="bold"
                  fontFamily="Plus Jakarta Sans"
                  my="$0"
                >
                  Quickstart
                </Text>
                <MySvgComponent />
              </HStack>

              <HStack
                onMouseEnter={() => {
                  setShowCopy(true);
                }}
                onMouseLeave={() => {
                  setShowCopy(false);
                }}
                alignItems="center"
                justifyContent="flex-start"
                py="$6"
                px="$7"
                borderRadius="$lg"
                sx={{
                  '@md': {
                    px: '$9',
                  },
                  'boxShadow': '0px 0px 100px 0px rgba(0, 119, 230, 0.60)',
                  '_dark': {
                    boxShadow: '0px 0px 100px 0px rgba(0, 119, 230, 0.60)',
                    backgroundColor: '#001F26',
                  },
                  '_light': {
                    backgroundColor: '$white',
                  },
                }}
              >
                {/* <NextImage
                  src="/images/tilde.svg"
                  width="49"
                  height="25"
                  alt="tilde"
                /> */}
                <Tilde />
                <Text
                  fontSize="$lg"
                  lineHeight="$sm"
                  mx="$3"
                  fontFamily="Source Code Pro"
                  fontWeight="$medium"
                  color="$textLight900"
                  sx={{
                    '_dark': {
                      color: '$trueGray50',
                    },
                    '_light': {
                      color: '$textDark900',
                    },
                    '@md': {
                      fontSize: '$xl',
                      lineHeight: '$md',
                    },
                  }}
                >
                  npm create{' '}
                  <Text
                    fontSize="$lg"
                    lineHeight="$sm"
                    fontWeight="$medium"
                    color="$primary300"
                    fontFamily="Source Code Pro"
                    sx={{
                      '@md': {
                        fontSize: '$xl',
                        lineHeight: '$md',
                      },
                    }}
                  >
                    gluestack
                  </Text>
                </Text>
                {showCopy ? (
                  <Button
                    position="absolute"
                    right="$3"
                    onPress={copyToClipboard}
                    variant="unstyled"
                    p="$0"
                    sx={{
                      '_web': {
                        cursor: 'pointer',
                      },
                      '@md': {
                        right: '$9',
                      },
                    }}
                  >
                    {copied ? (
                      // <NextImage
                      //   src="/images/copied.svg"
                      //   width="20"
                      //   height="20"
                      //   alt="copied"
                      // />
                      <Copied />
                    ) : (
                      // <NextImage
                      //   src="/images/copy.svg"
                      //   width="20"
                      //   height="20"
                      //   alt="copy"
                      // />
                      <Copy />
                    )}
                  </Button>
                ) : null}
              </HStack>
            </VStack>
          </Box>
        </Box>

        <Box
          borderRadius="$xl"
          borderWidth="$1"
          sx={{
            '@lg': {
              flex: 1,
            },
            'borderColor': '$trueGray300',
            '_dark': {
              borderColor: '$trueGray800',
              bg: 'linear-gradient(150.32deg, #3E485B 18.15%, rgba(55, 65, 81, 0) 92.97%), linear-gradient(0deg, rgba(62, 72, 91, 0.2), rgba(62, 72, 91, 0.2)',
            },
            '_light': {
              background: 'rgb(212,226,255)',
              opacity: '0.8',
            },
          }}
        >
          <Box p="$6">
            <VStack space="lg">
              <Text
                fontSize="$2xl"
                fontWeight="bold"
                fontFamily="Plus Jakarta Sans"
                space="md"
              >
                Manual Installation
              </Text>
              <HStack flexWrap="wrap" gap="$2.5">
                <NextLink href="/docs/guides/install-nextjs">
                  <Next />
                </NextLink>
                <NextLink href="/docs/guides/install-expo">
                  <Expo1 />
                </NextLink>
                <NextLink href="/docs/guides/install-rn">
                  <ReactN />
                </NextLink>
              </HStack>
            </VStack>
          </Box>
        </Box>
      </Box>

      <Box
        gap="$5"
        sx={{
          '@lg': {
            flexDirection: 'row',
          },
          'flexDirection': 'column',
        }}
        w="$full"
      >
        <Box
          borderRadius="$xl"
          borderWidth="$1"
          sx={{
            '@lg': {
              flex: 1,
            },
            'borderColor': '$trueGray300',
            '_dark': {
              borderColor: '$trueGray800',
            },
            '_web': {
              background:
                'linear-gradient(99deg, rgba(248, 207, 106, 0.20) 5.76%, rgba(80, 228, 255, 0.20) 87.08%)',
            },
          }}
        >
          <Box p="$6">
            <VStack space="lg">
              <Text
                fontSize="$2xl"
                fontWeight="bold"
                fontFamily="Plus Jakarta Sans"
              >
                VS Code Extension
              </Text>
              <HStack>
                <NextLink href="/docs/getting-started/vscode-extension">
                  <VsCode />
                </NextLink>
              </HStack>
            </VStack>
          </Box>
        </Box>
        <Box
          borderRadius="$xl"
          borderWidth="$1"
          sx={{
            '@lg': {
              flex: 1,
            },
            'borderColor': '$trueGray300',
            '_dark': {
              borderColor: '$trueGray800',
            },
            '_web': {
              background:
                'linear-gradient(99deg, rgba(247, 162, 161, 0.20) 5.76%, rgba(33, 120, 221, 0.20) 87.08%)',
            },
          }}
        >
          <Box p="$6">
            <VStack space="lg">
              <HStack alignItems="center" flexWrap="wrap">
                <Text
                  fontSize="$2xl"
                  fontWeight="bold"
                  fontFamily="Plus Jakarta Sans"
                >
                  Head Starter Kit
                </Text>
                <LogoTag tag="coming soon" />
              </HStack>
              <HStack flexWrap="wrap" gap="$2.5">
                <Next />
                <Expo1 />
              </HStack>
            </VStack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Card1;
