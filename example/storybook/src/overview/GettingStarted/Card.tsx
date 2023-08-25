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
      borderRadius="$xl"
      borderWidth={1}
      mt="$6"
      sx={{
        'borderColor': '#D4D4D4',
        'bg': '#F5F5F5',
        '_dark': {
          bg: '#071117',
          borderColor: '$borderDark800',
        },
        '@base': {
          minWidth: '$full',
        },
        '@md': {
          mr: '$6',
          minWidth: '40%',
        },
        '@lg': {
          minWidth: '20%',
          height: 253,
          mr: '$6',
          display: 'flex',
          flex: 1,
        },
      }}
    >
      <Box
        px="$6"
        py={70}
        height={180}
        justifyContent="center"
        borderBottomWidth={1}
        borderTopLeftRadius="$xl"
        borderTopRightRadius="$xl"
        sx={{
          'borderBottomColor': '#D4D4D4',
          'bg': '#FAFAFA',
          '_dark': {
            borderBottomColor: '#313848',
            bg: '#0C0E12',
          },
          '@lg': {
            height: 200,
          },
        }}
      >
        {child}
      </Box>
      <VStack py="$3" px="$6">
        <Text py={0} fontSize="$xl" fontWeight="$medium">
          {title}
        </Text>
      </VStack>
    </Box>
  );
};
