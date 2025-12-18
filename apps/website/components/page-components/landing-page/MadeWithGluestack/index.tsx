'use client';
import React, { useContext } from 'react';
import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';
import { Badge } from '@/components/ui/badge';
import { HStack } from '@/components/ui/hstack';
import NextImage from 'next/image';
import { ThemeContext } from '@/utils/context/theme-context';

const MadeWidthGluestack = () => {
  const { colorMode } = useContext(ThemeContext);
  return (
    <Box className="pointer-events-none mx-auto my-0 max-w-[1440px] w-[85%] justify-between right-0 web:sticky hidden lg:flex bottom-6">
      <HStack className="justify-end">
        <Badge className="bg-background-950 rounded-xl z-50 p-3">
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
          <Text className="text-typography-50 ml-3 font-medium tracking-tight">
            Made with gluestack-ui
          </Text>
        </Badge>
      </HStack>
    </Box>
  );
};

export default MadeWidthGluestack;
