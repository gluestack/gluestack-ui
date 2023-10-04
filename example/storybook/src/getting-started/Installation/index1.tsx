import React, { memo } from 'react';
import { Box, HStack, Text, VStack } from '@gluestack/design-system';
import { Card } from './Card';
import { content } from './content';
import NextLink from 'next/link';
import { ArrowRightIcon } from '@gluestack-ui/themed';

const Fold2 = memo(() => {
  return (
    <HStack
      my="$6"
      flexDirection="column"
      flexWrap="wrap"
      gap="$5"
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
          <NextLink
            href="/docs/overview/component-catalog"
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
                  color: '$darkBlue500',
                },
              }}
            >
              See All
            </Text>
            <ArrowRightIcon color="$darkBlue500" w="$5" h="$5" ml="$1" />
          </NextLink>
        </VStack>
      </Box>
    </HStack>
  );
});

Fold2.displayName = 'Fold2';

export default Fold2;
