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
import Next from './Next';
import MySvgComponent from './MySvgComponent';
import Expo1 from './Expo1';
import ReactN from './ReactN';

function Card1() {
  return (
    <HStack
      my={'$6'}
      gap={20}
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
        borderRadius={'$xl'}
        borderWidth={'$1'}
        sx={{
          borderColor: '#D4D4D4',
          _dark: {
            borderColor: 'rgba(38, 38, 38, 1)',
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
        <Box p={'$6'}>
          <VStack space="md" justifyContent="center">
            <HStack justifyContent="space-between" alignItems="center">
              <Text
                fontSize={'$2xl'}
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
                code: `npm create gluestack`,
              }}
              language="bash"
              showArgsController={false}
              showComponentRenderer={false}
              codeBlockProps={{
                bg: '$white',
              }}
            />
          </VStack>
        </Box>
      </Box>
      <Box
        flex={1}
        borderRadius={'$xl'}
        borderWidth={'$1'}
        sx={{
          borderColor: '#D4D4D4',
          _dark: {
            borderColor: 'rgba(38, 38, 38, 1)',
            bg: 'linear-gradient(150.32deg, #3E485B 18.15%, rgba(55, 65, 81, 0) 92.97%), linear-gradient(0deg, rgba(62, 72, 91, 0.2), rgba(62, 72, 91, 0.2)',
          },
          _light: {
            background: 'rgb(212,226,255)',
            opacity: '0.8',
          },
        }}
      >
        <Box p={'$6'}>
          <VStack space="md">
            <Text
              fontSize={'$2xl'}
              fontWeight="bold"
              fontFamily="Plus Jakarta Sans"
              space="md"
            >
              Manual Installation
            </Text>
            <HStack flexWrap="wrap" gap={10}>
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
