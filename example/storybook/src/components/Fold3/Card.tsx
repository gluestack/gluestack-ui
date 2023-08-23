//@ts-nocheck
import React from 'react';
import { Box, Text, VStack } from '@gluestack/design-system';
import img from '../../../assets/video.svg';

export const Card = ({
  title,
  name,
  date,
}: {
  title: string;
  name: string;
  date: string;
}) => {
  return (
    <Box
      borderRadius="$xl"
      borderWidth={1}
      borderColor="$borderDark800"
      mt="$6"
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
          height: 309,
          mr: '$6',
          display: 'flex',
          flex: 1,
        },
      }}
    >
      <Box height={186} bg="$red600">
        <img
          src={img}
          style={{
            height: '100%',
            objectFit: 'cover',
            width: '100%',
            borderRadius: '4px',
          }}
        />
      </Box>
      <VStack py="$3" px="$6">
        <Text py={0} pb="$3" color="#FAFAFA" fontSize="$xl" fontWeight="$inter">
          {title}
        </Text>
        <Text py={0} color="#A3A3A3">
          {name}
        </Text>
        <Text py={0} color="#A3A3A3" fontSize="$sm" fontWeight="$inter">
          {date}
        </Text>
      </VStack>
    </Box>
  );
};
