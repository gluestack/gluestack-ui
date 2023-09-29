import React from 'react';
import { Box, Text } from '@gluestack/design-system';
import NextLink from 'next/link';

export const Card = ({
  title,
  child,
  href,
}: {
  title: string;
  child: React.ReactNode;
  href: string;
}) => {
  return (
    <Box
      maxWidth={300}
      minWidth={240}
      minHeight={240}
      flex={1}
      borderRadius="$xl"
      borderWidth={1}
      sx={{
        borderColor: '$trueGray300',
        bg: '$trueGray100',
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
          borderBottomColor: '$trueGray300',
          bg: '$trueGray50',
          _dark: {
            borderBottomColor: '$borderDark800',
            bg: '#0C0E12',
          },
        }}
      >
        {child}
      </Box>

      <NextLink
        href={href}
        style={{
          textDecoration: 'none',
        }}
      >
        <Box>
          <Text fontSize="$xl" fontWeight="$medium" my="$3" px="$6">
            {title}
          </Text>
        </Box>
      </NextLink>
    </Box>
  );
};
