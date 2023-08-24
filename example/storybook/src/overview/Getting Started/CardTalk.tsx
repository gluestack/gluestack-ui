//@ts-nocheck
import React from 'react';
import { Box, Text, VStack, Link } from '@gluestack/design-system';
import NextImage from 'next/image';
export const CardTalk = ({
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
      mt="$6"
      sx={{
        borderColor: '#A3A3A3',
        background:
          'linear-gradient(90deg, rgba(240, 239, 255, 0.20) 0%, rgba(205, 201, 255, 0.00) 100%), rgba(187, 210, 255, 0.20)',
        _dark: {
          borderColor: '$borderDark800',
          background:
            'linear-gradient(90deg, rgba(43, 39, 90, 0.20) 0%, rgba(43, 39, 90, 0.00) 100%), rgba(62, 72, 91, 0.20)',
        },
      }}
    >
      <Link href="https://www.youtube.com/watch?v=EFTCeK8aXTU" isExternal>
        <Box h={200} width={327}>
          <NextImage
            src="https://i3.ytimg.com/vi/EFTCeK8aXTU/maxresdefault.jpg"
            alt="accessibility"
            fill={true}
            style={{
              objectFit: 'cover',
              borderTopLeftRadius: '12px',
              borderTopRightRadius: '12px',
            }}
          />
        </Box>
        <VStack py="$3" px="$6">
          <Text py={0} pb="$3" fontSize="$xl" fontWeight="$inter">
            {title}
          </Text>
          <Text
            py={0}
            sx={{
              color: '#404040',
              _dark: {
                color: '#A3A3A3',
              },
            }}
          >
            {name}
          </Text>
          <Text
            py={0}
            sx={{
              color: '#404040',
              _dark: {
                color: '#A3A3A3',
              },
            }}
            fontSize="$sm"
            fontWeight="$inter"
          >
            {date}
          </Text>
        </VStack>
      </Link>
    </Box>
  );
};
