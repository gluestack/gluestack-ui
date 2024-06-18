import React, { useState } from 'react';
import {
  Popover,
  PopoverBackdrop,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
} from '@/components/ui/popover';
import { Button, ButtonText } from '@/components/ui/button';
import {
  Avatar,
  AvatarFallbackText,
  AvatarGroup,
  AvatarImage,
} from '@/components/ui/avatar';
import { Text } from '@/components/ui/text';

const avatars = [
  {
    src: '../../../public/images/avatar1.jpeg',
    alt: 'Arjun Kapoor',
    color: 'bg-cyan-600',
  },
  {
    src: '../../../public/images/avatar2.png',
    alt: 'Ritik Sharma ',
    color: 'bg-indigo-600',
  },
  {
    src: '../../../public/images/avatar3.jpeg',
    alt: 'Akhil Sharma',
    color: 'bg-gray-600',
  },
  {
    src: '../../../public/images/avatar4.png',
    alt: 'Rahul Sharma ',
    color: 'bg-red-400',
  },
];

const PopoverBasic = (props: any) => {
  const [showPopover, setShowPopover] = useState(false);

  return (
    <Popover
      {...props}
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
      <PopoverContent className="native:max-w-[400]">
        <PopoverArrow />

        <PopoverBody contentContainerClassName="flex flex-row bg-red-200 w-full">
          <AvatarGroup className="w-1/2 bg-green-200">
            {avatars.map((avatar, index) => (
              <Avatar
                key={index}
                className={`border-2 border-outline-0 ${avatar.color} w-9 h-9`}
              >
                <AvatarFallbackText>{avatar.alt}</AvatarFallbackText>
                <AvatarImage
                  className="w-9 h-9 border-outline-0 border-[1.5px]"
                  source={require('../../../public/images/avatar1.jpeg')}
                />
              </Avatar>
            ))}
          </AvatarGroup>
          <Text>
            Alex, Annie and many others are already enjoying the Pro features,
            don't miss out on the fun!
          </Text>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default PopoverBasic;
