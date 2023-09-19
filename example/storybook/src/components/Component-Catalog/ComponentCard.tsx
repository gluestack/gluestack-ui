import React from 'react';
import { Box, Text, VStack } from '@gluestack/design-system';

export const ComponentCard = ({
  title,
  child,
  padding,
}: {
  title: string;
  child: React.ReactNode;
  padding?: string;
  props?: any;
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
        },
        '_dark': {
          borderColor: '$borderDark800',
        },
      }}
    >
      <Box
        minHeight={236}
        padding={padding ? padding : '$6'}
        borderTopLeftRadius="$xl"
        borderTopRightRadius="$xl"
        borderBottomWidth={1}
        borderBottomColor="$trueGray300"
        bg="$trueGray50"
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
