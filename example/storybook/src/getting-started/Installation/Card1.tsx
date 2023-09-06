//@ts-nocheck
import React from 'react';
import {
  Box,
  HStack,
  VStack,
  Text,
  CodePreview,
  LogoTag,
} from '@gluestack/design-system';
import Next from './Next';
import MySvgComponent from './MySvgComponent';
import Expo1 from './Expo1';
import ReactN from './ReactN';
import VsCode from './VsCode';
import Link from 'next/link';

function Card1() {
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
          flex={1}
          borderRadius="$xl"
          borderWidth="$1"
          sx={{
            borderColor: '$trueGray300',
            _dark: {
              borderColor: '$trueGray800',
            },
            _web: {
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
              <CodePreview
                metaData={{
                  code: `npm create gluestack`,
                }}
                language="bash"
                showArgsController={false}
                showComponentRenderer={false}
                codeBlockProps={{
                  bg: '$white',
                }}
                mb="$0"
              />
            </VStack>
          </Box>
        </Box>
        <Box
          flex={1}
          borderRadius="$xl"
          borderWidth="$1"
          sx={{
            borderColor: '$trueGray300',
            _dark: {
              borderColor: '$trueGray800',
              bg: 'linear-gradient(150.32deg, #3E485B 18.15%, rgba(55, 65, 81, 0) 92.97%), linear-gradient(0deg, rgba(62, 72, 91, 0.2), rgba(62, 72, 91, 0.2)',
            },
            _light: {
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
                <Link href="/docs/guides/install-nextjs">
                  <Next />
                </Link>
                <Link href="/docs/guides/install-expo">
                  <Expo1 />
                </Link>
                <Link href="/docs/guides/install-rn">
                  <ReactN />
                </Link>
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
          flex={1}
          borderRadius="$xl"
          borderWidth="$1"
          sx={{
            borderColor: '$trueGray300',
            _dark: {
              borderColor: '$trueGray800',
            },
            _web: {
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
                space="md"
              >
                VS Code Extension
              </Text>
              <HStack>
                <Link href="/docs/getting-started/vscode-extension">
                  <VsCode />
                </Link>
              </HStack>
            </VStack>
          </Box>
        </Box>
        <Box
          flex={1}
          borderRadius="$xl"
          borderWidth="$1"
          sx={{
            borderColor: '$trueGray300',
            _dark: {
              borderColor: '$trueGray800',
            },
            _web: {
              background:
                'linear-gradient(99deg, rgba(247, 162, 161, 0.20) 5.76%, rgba(33, 120, 221, 0.20) 87.08%)',
            },
          }}
        >
          <Box p="$6">
            <VStack space="lg">
              <HStack alignItems="center">
                <Text
                  fontSize="$2xl"
                  fontWeight="bold"
                  fontFamily="Plus Jakarta Sans"
                  space="md"
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
