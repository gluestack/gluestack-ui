import React, { useState } from 'react';
import {
  Popover,
  PopoverBackdrop,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverCloseButton,
  PopoverArrow,
} from '@/components/ui/popover';
import { Button, ButtonText } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { Heading } from '@/components/ui/heading';
import { Box } from '@/components/ui/box';
import { X } from 'lucide-react-native';

const PopoverBasic = (props: any) => {
  const [showPopover, setShowPopover] = React.useState(false);
  return (
    <Popover
      {...props}
      placement="right"
      shouldFlip
      isOpen={showPopover}
      onOpen={() => {
        setShowPopover(true);
      }}
      onClose={() => {
        setShowPopover(false);
      }}
      // eslint-disable-next-line react/no-unstable-nested-components
      trigger={(triggerProps) => {
        return (
          <Button {...triggerProps}>
            <ButtonText>Popover</ButtonText>
          </Button>
        );
      }}
    >
      <PopoverBackdrop />
      <PopoverContent>
        <PopoverArrow />
        <PopoverHeader>
          <Heading>Welcome!</Heading>
          <PopoverCloseButton>
            <X
              size={20}
              className="stroke-background-400 group-[:hover]/popover-close-button:stroke-background-700 group-[:active]/popover-close-button:stroke-background-900 group-[:focus-visible]/popover-close-button:stroke-background-900"
            />
          </PopoverCloseButton>
        </PopoverHeader>
        <PopoverBody>
          <Text>
            Join the product tour and start creating your own checklist. Are you
            ready to jump in?
          </Text>
        </PopoverBody>
        <PopoverFooter>
          <Text size="xs" className="flex-1">
            Step 2 of 3
          </Text>
          {/* @ts-ignore */}
          <Button
            variant="outline"
            action="secondary"
            className="mr-3"
            onPress={() => {
              setShowPopover(false);
            }}
          >
            <ButtonText>Back</ButtonText>
          </Button>
          <Button
            onPress={() => {
              setShowPopover(false);
            }}
          >
            <ButtonText>Next</ButtonText>
          </Button>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
};

PopoverBasic.description = `Popover is a non-modal dialog that floats around a trigger element. It is used to display contextual information or UI. It is triggered by clicking, tapping, or hovering on an element.`;

export default PopoverBasic;

export {
  PopoverBasic,
  Text,
  Popover,
  PopoverBackdrop,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverCloseButton,
  Button,
  ButtonText,
  Box,
  useState,
};
