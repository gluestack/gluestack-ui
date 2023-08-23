//@ts-nocheck
import React from 'react';
import {
  Box,
  HStack,
  VStack,
  Text,
  CodePreview,
  Link,
} from '@gluestack/design-system';
import Next from './SVG/Next';
import MySvgComponent from './SVG/MySvgComponent';
import Expo1 from './SVG/Expo1';
import ReactN from './SVG/ReactN';

function Card1() {
  return (
    <HStack
      width={990}
      space="xl"
      sx={{
        '@lg': {
          flexDirection: 'row',
        },
        'flexDirection': 'column',
      }}
    >
      <Box
        width="48%"
        bg="red"
        mr="$4"
        mt={28}
        mb={24}
        borderRadius="12px"
        borderWidth="1px"
        sx={{
          'borderColor': '#D4D4D4',
          '_dark': {
            borderColor: 'rgba(38, 38, 38, 1)',
          },
          '_web': {
            background:
              'linear-gradient(329deg, rgba(0, 56, 255, 0.08) 0%, rgba(39, 87, 255, 0.00) 99.99%, rgba(0, 56, 255, 0.00) 100%), linear-gradient(123deg, rgba(233, 185, 255, 0.60) 0%, rgba(15, 24, 86, 0.00) 100%)',
            _dark: {
              background:
                'linear-gradient(329deg, rgba(0, 16, 71, 0.40) 0%, rgba(77, 77, 77, 0.00) 100%), linear-gradient(123deg, rgba(115, 41, 150, 0.60) 0%, rgba(15, 24, 86, 0.00) 100%)',
            },
          },
          '@base': {
            minWidth: '$full',
          },
          '@lg': {
            minWidth: '20%',
          },
        }}
      >
        <Box h={180}>
          <Box p={24}>
            <VStack>
              <HStack justifyContent="space-between" alignItems="center">
                <Text
                  fontSize={24}
                  fontWeight="bold"
                  fontFamily="Plus Jakarta Sans"
                  my={0}
                >
                  Quickstart
                </Text>
                <MySvgComponent />
              </HStack>
              <CodePreview
                metaData={{
                  code: `npx gluestack`,
                }}
                language="bash"
                showArgsController={false}
                showComponentRenderer={false}
                mb="$6"
                w="$full"
                mt="$6"
                codeBlockProps={{
                  bg: '$white',
                  fontSize: 20,
                }}
              />
            </VStack>
          </Box>
        </Box>
      </Box>
      <Box
        width="46%"
        mt={28}
        mb={24}
        h={180}
        borderRadius="12px"
        borderWidth="1px"
        sx={{
          'borderColor': '#D4D4D4',
          '_dark': {
            borderColor: 'rgba(38, 38, 38, 1)',
          },
          '@base': {
            minWidth: '$full',
          },
          '@lg': {
            minWidth: '20%',
          },
        }}
      >
        <Box
          h={180}
          p={24}
          sx={{
            _light: {
              background: 'rgb(212,226,255)',
              opacity: '0.8',
            },
            _dark: {
              bg: 'linear-gradient(150.32deg, #3E485B 18.15%, rgba(55, 65, 81, 0) 92.97%), linear-gradient(0deg, rgba(62, 72, 91, 0.2), rgba(62, 72, 91, 0.2)',
            },
          }}
        >
          <VStack>
            <Text
              fontSize={24}
              fontWeight="bold"
              fontFamily="Plus Jakarta Sans"
            >
              Manual Installation
            </Text>
            <HStack space="sm" mt="$6">
              <Link href="https://ui.gluestack.io/docs/guides/install-nextjs">
                <Next />
              </Link>
              <Link href="https://ui.gluestack.io/docs/guides/install-expo">
                <Expo1 />
              </Link>
              <Link href="https://ui.gluestack.io/docs/guides/install-rn">
                <ReactN />
              </Link>
            </HStack>
          </VStack>
        </Box>
      </Box>
    </HStack>
  );
}

export default Card1;
