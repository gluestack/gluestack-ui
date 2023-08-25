import React, { memo } from 'react';
import { Box, HStack, Text, VStack } from '@gluestack/design-system';
import { Card } from './Card';
import { content } from './content';
import NextLink from 'next/link';
import { ArrowRightIcon } from '@gluestack-ui/themed';

const Fold2 = memo(() => {
  return (
    <HStack
      my={'$6'}
      flexDirection="column"
      flexWrap="wrap"
      gap={20}
      sx={{
        '@lg': { flexDirection: 'row' },
      }}
    >
      {content.map((item, index) => {
        return <Card key={index} title={item.title} child={item.child} />;
      })}
      <Box
        alignItems="center"
        justifyContent="center"
        flex={1}
        minWidth={240}
        minHeight={240}
        borderRadius="$xl"
        borderWidth={1}
        sx={{
          borderColor: '#D4D4D4',
          bg: '#F5F5F5',
          _dark: {
            bg: '#071117',
            borderColor: '$borderDark800',
          },
        }}
      >
        <VStack px="$6" justifyContent="center" alignItems="center">
          <Text my={0} textAlign="center">
            30+ components
          </Text>
          <Text mb="$6" my={0} textAlign="center">
            for React, Next.js & React Native
          </Text>
          <NextLink
            href="/docs/components/layout/box"
            style={{
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Text
              color="$primary400"
              fontSize="$lg"
              lineHeight="$md"
              fontWeight="$bold"
              sx={{
                _dark: {
                  color: '#0077E6',
                },
              }}
            >
              See All
            </Text>
            <ArrowRightIcon color="#0077E6" w="$5" h="$5" ml="$1" />
          </NextLink>
        </VStack>
      </Box>
    </HStack>
  );
});

Fold2.displayName = 'Fold2';

export default Fold2;
