import React from 'react';
import { Box, Text } from '../../primitives';

export function LogoTag({ tag, ...props }: { tag: string; props?: any }) {
  return (
    <Box
      py="$0.5"
      px="$2.5"
      ml="$2"
      borderRadius="$full"
      borderWidth={1}
      sx={{
        _light: {
          borderColor: '$textLight200',
          _web: {
            background:
              'linear-gradient(270deg, rgba(21, 129, 228, 0.11) 10.42%, rgba(107, 54, 175, 0.06) 43.75%, rgba(200, 166, 255, 0.08) 71.88%, rgba(42, 180, 217, 0.02) 100%)',
          },
        },
        _dark: {
          borderColor: '$textDark700',
          _web: {
            background:
              'linear-gradient(80.55deg, rgba(21, 129, 228, 0.111) 48.67%, rgba(111, 38, 206, 0.216) 79.9%, rgba(42, 180, 217, 0.156) 108.54%)',
          },
        },
      }}
      {...props}
    >
      <Text
        fontSize="$xs"
        lineHeight="$xs"
        sx={{
          _light: { color: '$textLight900' },
          _dark: { color: '$textDark50' },
        }}
        fontWeight="$medium"
      >
        {tag}
      </Text>
    </Box>
  );
}
