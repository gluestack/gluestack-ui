//@ts-nocheck
import React from 'react';
import {
  Box,
  HStack,
  VStack,
  Text,
  Link,
  Pressable,
} from '@gluestack/design-system';
import Expo from './Expo';
import Checkbox from './Checkbox';

function Card2() {
  return (
    <HStack
      width={1010}
      space="md"
      sx={{
        '@lg': {
          flexDirection: 'row',
        },
        'flexDirection': 'column',
      }}
    >
      <Box
        borderRadius="12px"
        borderWidth="1px"
        mt={26}
        mb={8}
        h={112}
        width="48%"
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
        <Box h={112} w={502} borderRadius="$xl" borderColor="#262626">
          <Link href="https://snack.expo.dev/@gluestack/gluestack-ui-todos-example?platform=web&theme=dark">
            <Box p={24}>
              <VStack>
                <HStack alignItems="center" space="md" mb={10}>
                  <Expo />
                  <Pressable
                    sx={{
                      ':hover': {
                        textDecoration: 'underline',
                        color: 'white',
                      },
                    }}
                  >
                    <Text
                      fontWeight="$medium"
                      fontSize={20}
                      fontFamily="Plus Jakarta Sans"
                    >
                      Try gluestack-ui on Snack
                    </Text>
                  </Pressable>
                </HStack>
                <Text fontSize={16} fontWeight="$normal">
                  Get started without having to set up.
                </Text>
              </VStack>
            </Box>
          </Link>
        </Box>
      </Box>

      <Box
        borderRadius="12px"
        borderWidth="1px"
        mt={28}
        mb={24}
        h={112}
        width="48%"
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
        <Box h={112} w={502}>
          <Link href="https://ui.gluestack.io/docs/guides/install-nextjs">
            <Box p={24}>
              <VStack>
                <HStack alignItems="center" space="md" mb={10}>
                  <Checkbox />
                  <Pressable
                    sx={{
                      ':hover': {
                        textDecoration: 'underline',
                        color: 'white',
                      },
                    }}
                    my={0}
                  >
                    {' '}
                    <Text fontWeight="$medium" fontSize={20}>
                      Try gluestack-ui on CodeSandbox
                    </Text>
                  </Pressable>
                </HStack>
                <Text fontSize={16} fontWeight="$normal">
                  See how your app looks as you code.
                </Text>
              </VStack>
            </Box>
          </Link>
        </Box>
      </Box>
    </HStack>
  );
}

export default Card2;
