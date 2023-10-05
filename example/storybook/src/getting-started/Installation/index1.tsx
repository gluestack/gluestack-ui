import React, { memo } from 'react';
import { Box, Text, VStack } from '@gluestack/design-system';
import { Card } from './Card';
import { content } from './content';
import NextLink from 'next/link';
import { ArrowRightIcon } from '@gluestack-ui/themed';

const Fold2 = memo(() => {
  return (
    <Box
      my="$6"
      flexDirection="column"
      flexWrap="wrap"
      gap="$5"
      sx={{
        '@md': {
          flexWrap: 'wrap',
          flexDirection: 'row',
          _web: {
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
          },
        },
        '@lg': {
          _web: {
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
          },
        },
        '@xxl': {
          _web: {
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
          },
        },
      }}
    >
      {content.map((item, index) => {
        return (
          <Card
            key={index}
            title={item.title}
            child={item.child}
            href={item.href}
          />
        );
      })}
      <NextLink
        href="/ui/docs/components/layout/box"
        style={{
          textDecoration: 'none',
        }}
      >
        <Box
          alignItems="center"
          justifyContent="center"
          flex={1}
          minWidth={240}
          minHeight={240}
          borderRadius="$xl"
          borderWidth={1}
          sx={{
            borderColor: '$trueGray300',
            bg: '$trueGray100',
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
            <Box flexDirection="row" alignItems="center">
              <Text
                color="$primary400"
                fontSize="$lg"
                lineHeight="$md"
                sx={{
                  _dark: {
                    color: '$darkBlue500',
                  },
                }}
              >
                See All
              </Text>
              <ArrowRightIcon color="$darkBlue500" w="$5" h="$5" ml="$1" />
            </Box>
          </VStack>
        </Box>
      </NextLink>
    </Box>
  );
});

Fold2.displayName = 'Fold2';

export default Fold2;
