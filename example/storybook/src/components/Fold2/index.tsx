import React, { memo } from 'react';
import { Box, Text, VStack } from '@gluestack/design-system';
import { Card } from './Card';
import { content } from './content';
import NextLink from 'next/link';

const Fold2 = memo(() => {
  return (
    <Box
      flexDirection="column"
      flexWrap="wrap"
      sx={{
        '@base': { mb: '$20' },
        '@md': { mb: 200, flexDirection: 'row' },
      }}
    >
      {content.map((item, index) => {
        return <Card key={index} title={item.title} child={item.child} />;
      })}
      <Box
        borderRadius="$xl"
        borderWidth={1}
        borderColor="$borderDark800"
        bg="#071117"
        mt="$6"
        minHeight={234}
        sx={{
          '@md': {
            minWidth: '20%',
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
          <Text color="white" my={0} textAlign="center">
            30+ components
          </Text>
          <Text color="white" mb="$6" my={0} textAlign="center">
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
                  color: '$primary500',
                },
              }}
            >
              See All
            </Text>
          </NextLink>
        </VStack>
      </Box>
    </Box>
  );
});

Fold2.displayName = 'Fold2';

export default Fold2;
