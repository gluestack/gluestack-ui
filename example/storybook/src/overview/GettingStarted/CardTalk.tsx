//@ts-nocheck
import React from 'react';
import { Box, Text, VStack, Link } from '@gluestack/design-system';
import NextImage from 'next/image';
export const CardTalk = ({
  title,
  name,
  date,
  bannerImage,
  link,
  isExternal,
}: {
  title: string;
  name: string;
  date: string;
  bannerImage: string;
  link: string;
  isExternal: boolean;
}) => {
  return (
    <Box
      borderRadius="$xl"
      borderWidth={1}
      maxWidth={327}
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
      overflow="hidden"
    >
      <Link href={link} isExternal={isExternal}>
        <Box width={327} height={165}>
          <NextImage src={bannerImage} alt="architecture" fill={true} />
        </Box>
        <VStack py="$4" px="$6">
          <Text pb="$3" fontSize="$xl" fontWeight="$medium">
            {title}
          </Text>
          <Text
            lineHeight={'$md'}
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
