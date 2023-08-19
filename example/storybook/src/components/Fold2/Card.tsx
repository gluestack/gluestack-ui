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
      borderColor="$borderDark800"
      mt="$6"
      bg="#071117"
      sx={{
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
        borderBottomColor="#313848"
        sx={{
          '@lg': {
            height: 200,
          },
        }}
      >
        {child}
      </Box>
      <VStack py="$3" px="$6">
        <Text py={0} color="$trueGray50" fontSize="$2xl" fontWeight="$medium">
          {title}
        </Text>
      </VStack>
    </Box>
  );
};
