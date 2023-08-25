import React, { memo } from 'react';
import { Box, Text, VStack } from '@gluestack/design-system';
import { Card } from './Card';
import { content } from './content';
import NextLink from 'next/link';
import { ArrowRightIcon } from '@gluestack-ui/themed';

const Fold2 = memo(() => {
  return (
    <Box
      width="70vw"
      flexDirection="column"
      flexWrap="wrap"
      sx={{
        '@base': { mb: '$20' },
        '@md': { mb: 24, flexDirection: 'row' },
      }}
    >
      {content.map((item, index) => {
        return <Card key={index} title={item.title} child={item.child} />;
      })}
      <Box
        borderRadius="$xl"
        borderWidth={1}
        mt="$6"
        minHeight={234}
        sx={{
          'borderColor': '#D4D4D4',
          'bg': '#F5F5F5',
          '_dark': {
            bg: '#071117',
            borderColor: '$borderDark800',
          },
          '@md': {
            width: '20%',
          },
          '@lg': {
            height: 253,
            mr: '$6',
            flex: 1,
          },
        }}
      >
        <VStack
          pt={57}
          pb={107}
          px="$6"
          justifyContent="center"
          alignItems="center"
        >
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
    </Box>
  );
});

Fold2.displayName = 'Fold2';

export default Fold2;
