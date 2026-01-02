import React, { useState } from 'react';
import Gradient from '@/assets/icons/Gradient';
import Logo from '@/assets/icons/Logo';
import { Box } from '@/components/ui/box';
import { ScrollView } from 'react-native';
import { Text } from '@/components/ui/text';

import { useRouter } from 'expo-router';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogBody,
  AlertDialogBackdrop,
} from '@/components/ui/alert-dialog';
import {
  Popover,
  PopoverBackdrop,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
} from '@/components/ui/popover';

import { Heading } from '@/components/ui/heading';
import { Button, ButtonText } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenPopover = () => {
    setIsOpen(true);
  };
  const handleClosePopover = () => {
    setIsOpen(false);
  };
  const router = useRouter();
  const [showAlertDialog, setShowAlertDialog] = useState(false);
  const handleClose = () => setShowAlertDialog(false);
  return (
    <Box className="flex-1 bg-background-300 h-[100vh] pt-96">
      <Button onPress={() => setShowAlertDialog(true)}>
        <ButtonText>Open Dialog</ButtonText>
      </Button>
      <AlertDialog isOpen={showAlertDialog} onClose={handleClose} size="md">
        <AlertDialogBackdrop />
        <AlertDialogContent>
          <AlertDialogHeader>
            <Heading className="text-typography-950 font-semibold" size="md">
              Are you sure you want to delete this post?
            </Heading>
          </AlertDialogHeader>
          <AlertDialogBody className="mt-3 mb-4">
            <Text size="sm">
              Deleting the post will remove it permanently and cannot be undone.
              Please confirm if you want to proceed.
            </Text>
          </AlertDialogBody>
          <AlertDialogFooter className="">
            <Button
              variant="outline"
              action="secondary"
              onPress={handleClose}
              size="sm"
            >
              <ButtonText>Cancel</ButtonText>
            </Button>
            <Button size="sm" onPress={handleClose}>
              <ButtonText>Delete</ButtonText>
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <Popover
        isOpen={isOpen}
        onClose={handleClosePopover}
        onOpen={handleOpenPopover}
        placement="bottom"
        size="md"
        trigger={(triggerProps) => {
          return (
            <Button {...triggerProps}>
              <ButtonText>Open Popover</ButtonText>
            </Button>
          );
        }}
      >
        <PopoverBackdrop />
        <PopoverContent>
          <PopoverArrow />
          <PopoverBody>
            <Text className="text-typography-900">
              Alex, Annie and many others are already enjoying the Pro features,
              don't miss out on the fun!
            </Text>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Box>
  );
}
