import React from 'react';
import { Box, Text, VStack } from '@gluestack/design-system';

export const Card = ({
  title,
  child,
}: {
  title: string;
  child: React.ReactNode;
}) => {
  return (
    <Box
      minWidth={200}
      minHeight={240}
      flex={1}
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
      <Box
        flex={4}
        px="$6"
        w="$full"
        justifyContent="center"
        borderBottomWidth={1}
        borderTopLeftRadius="$xl"
        borderTopRightRadius="$xl"
        sx={{
          borderBottomColor: '#D4D4D4',
          bg: '#FAFAFA',
          _dark: {
            borderBottomColor: '#313848',
            bg: '#0C0E12',
          },
        }}
      >
        {child}
      </Box>
      <VStack py="$3" px="$6" flex={1}>
        <Text py={0} fontSize="$xl" fontWeight="$medium">
          {title}
        </Text>
      </VStack>
    </Box>
  );
};
