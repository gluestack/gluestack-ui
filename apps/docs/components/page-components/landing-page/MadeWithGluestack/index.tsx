import React, { useContext } from 'react';
import { Box, Text, Badge, HStack, Link } from '@gluestack/design-system';
import NextImage from 'next/image';
import { useMode } from '@/components/ui/gluestack-ui-provider/providerContext';

const MadeWidthGluestack = () => {
  const { colorMode } = useMode();
  return (
    <Box
      sx={{
        '_web': {
          position: 'sticky',
        },
        'display': 'none',
        '@lg': {
          display: 'flex',
        },
      }}
      bottom="$6"
      right="$0"
      justifyContent="space-between"
      w="85%"
      maxWidth={1440}
      my="$0"
      mx="auto"
      pointerEvents="none"
    >
      <HStack justifyContent="flex-end">
        <Badge
          p="$3"
          borderRadius="$xl"
          zIndex={50}
          bg="#1d1c1d"
          sx={{
            _dark: {
              bg: '$background50',
            },
          }}
        >
          <NextImage
            alt="ui logo"
            src={
              colorMode === 'light'
                ? '/icon/logo/gluestack/brandLogoDark.svg'
                : '/icon/logo/gluestack/brandLogo.svg'
            }
            width={24}
            height={24}
          />
          <Text
            ml="$3"
            lineHeight="$md"
            color="$text50"
            sx={{
              _dark: {
                color: '$textLight700',
              },
            }}
          >
            Made with gluestack-ui
          </Text>
        </Badge>
      </HStack>
    </Box>
  );
};

export default MadeWidthGluestack;
