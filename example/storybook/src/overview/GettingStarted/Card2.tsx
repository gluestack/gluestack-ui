//@ts-nocheck
import React from 'react';
import { Box, HStack, VStack, Text, Link } from '@gluestack/design-system';
import Expo from './Expo';
import Checkbox from './Checkbox';

function Card2() {
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
              'linear-gradient(329deg, rgba(0, 56, 255, 0.40) 0%, rgba(77, 77, 77, 0.00) 100%), linear-gradient(123deg, rgba(255, 226, 121, 0.60) 0%, rgba(255, 255, 255, 0.00) 100%)',
            _dark: {
              background:
                'linear-gradient(329deg, rgba(0, 16, 71, 0.40) 0%, rgba(77, 77, 77, 0.00) 100%), linear-gradient(123deg, rgba(97, 85, 42, 0.60) 0%, rgba(15, 24, 86, 0.00) 100%)',
            },
          },
        }}
      >
        <Box borderRadius="$xl" borderColor="#262626">
          <Link
            href="https://snack.expo.dev/@gluestack/gluestack-ui-todos-example?platform=web&theme=dark"
            isExternal
          >
            <Box p={'$6'}>
              <VStack space="md">
                <HStack alignItems="center" space="md">
                  <Expo />
                  <Text
                    fontWeight="$medium"
                    fontSize={'$xl'}
                    fontFamily="Plus Jakarta Sans"
                  >
                    Try gluestack-ui on Snack
                  </Text>
                </HStack>
                <Text fontSize={'$md'} fontWeight="$normal">
                  Get started without having to set up.
                </Text>
              </VStack>
            </Box>
          </Link>
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
          },
          _web: {
            background:
              'linear-gradient(0deg, rgba(3, 107, 227, 0.08), rgba(3, 107, 227, 0.08)),linear-gradient(103.74deg, rgba(3, 189, 153, 0.4) -16.75%, rgba(27, 155, 147, 0.125207) 33.87%, rgba(15, 31, 81, 0.28) 77.99%)',
            _dark: {
              background:
                'linear-gradient(138deg, rgba(3, 189, 153, 0.40) 0.96%, rgba(27, 155, 147, 0.13) 46.16%, rgba(15, 31, 81, 0.28) 85.56%)',
            },
          },
        }}
      >
        <Link href="https://ui.gluestack.io/docs/guides/install-nextjs">
          <Box p={'$6'}>
            <VStack space="md">
              <HStack alignItems="center" space="md">
                <Checkbox />
                <Text
                  fontWeight="$medium"
                  fontSize={'$xl'}
                  fontFamily="Plus Jakarta Sans"
                >
                  Try gluestack-ui on CodeSandbox
                </Text>
              </HStack>
              <Text fontSize={'$md'} fontWeight="$normal">
                See how your app looks as you code.
              </Text>
            </VStack>
          </Box>
        </Link>
      </Box>
    </HStack>
  );
}

export default Card2;
