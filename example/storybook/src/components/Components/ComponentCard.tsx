import React from 'react';
import { Box, Text, VStack } from '@gluestack/design-system';

export const ComponentCard = ({
  title,
  child,
}: {
  title: string;
  child: React.ReactNode;
}) => {
  return (
    <VStack
      borderRadius="$xl"
      borderWidth={1}
      borderColor="$trueGray300"
      minWidth="100%"
      sx={{
        '@md': {
          flex: 1,
          minWidth: '48%',
        },
        '@lg': {
          minWidth: '30%',
        },
        '@xl': {
          minWidth: '23%',
        },
        '_dark': {
          borderColor: '$borderDark800',
        },
      }}
    >
      <Box
        p="$6"
        borderTopLeftRadius="$xl"
        borderTopRightRadius="$xl"
        borderBottomWidth={1}
        borderBottomColor="$trueGray300"
        bg="$trueGray50"
        minHeight={180}
        justifyContent="center"
        alignItems="center"
        sx={{
          _dark: {
            borderBottomColor: '$borderDark800',
            bg: '#0C0E12',
          },
        }}
      >
        {child}
      </Box>

      <Text
        fontSize="$xl"
        fontWeight="$medium"
        lineHeight="$xl"
        px="$6"
        py="$3"
      >
        {title}
      </Text>
    </VStack>
  );
};
