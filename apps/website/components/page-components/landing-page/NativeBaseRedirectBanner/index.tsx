'use client';
import { useState } from 'react';
import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';
import { Icon, CloseIcon } from '@/components/ui/icon';
import { Button, ButtonIcon } from '@/components/ui/button';
import NextLink from 'next/link';
import { TriangleAlertIcon } from 'lucide-react-native';

export const Banner = ({ referrer }: { referrer: string }) => {
  const [isOpen, setIsOpen] = useState(true);
  const handleClose = () => {
    setIsOpen(false);
  };
  const showBanner = referrer && referrer.includes('nativebase') && isOpen;
  if (!showBanner) return <></>;
  return (
    <Box className="flex-row sm:items-center sm:justify-between sm:text-center rounded-lg bg-[#fff4eb] dark:bg-[#412f23] p-4 sm:ml-auto mr-auto gap-2 top-[80px] absolute">
      <Box className="flex-row flex-wrap sm:gap-2 sm:items-center sm:justify-center gap-4">
        <Box className="flex-row gap-2 items-center justify-center">
          <Icon
            as={TriangleAlertIcon}
            className="items-center justify-center text-warning-500 h-5 w-5"
          />
          <Text className="text-typography-950 text-md font-medium">
            Looking for nativebase?
          </Text>
        </Box>
        <NextLink
          href="https://nativebase.io"
          target="_blank"
          className="flex text-typography-50 rounded-md bg-background-900 px-4 py-2 gap-3 items-center justify-center flex-row sm:ml-[48px]"
        >
          Open nativebase.io
        </NextLink>
      </Box>
      <Button
        variant="link"
        size="sm"
        className="sm:ml-2 data-[hover=true]:bg-background-50/50 rounded-full aspect-square w-auto"
        onPress={handleClose}
      >
        <ButtonIcon as={CloseIcon} />
      </Button>
    </Box>
  );
};
