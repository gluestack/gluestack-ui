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
import { Box } from '@/components/ui/box';

const PopoverBasic = (props: any) => {
  const [showPopover, setShowPopover] = React.useState(false);
  return (
    <Popover
      {...props}
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
        <PopoverBody>
          <Text size={props.size} className="text-typography-900">
            Alex, Annie and many others are already enjoying the Pro features,
            don't miss out on the fun!
          </Text>
        </PopoverBody>
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
