import {
  Avatar,
  Box,
  Popover,
  Pressable,
  Text,
  PopoverContent,
  AvatarFallbackText,
  PopoverBody,
  HStack,
  CircleIcon,
} from '@gluestack-ui/themed';
import React from 'react';

const PopoverDemo = () => {
  const [showPopover, setShowPopover] = React.useState(true);

  return (
    <Box>
      <Popover
        _experimentalOverlay={true}
        offset={6}
        placement="bottom"
        isOpen={showPopover}
        trigger={(triggerProps) => {
          return (
            <Pressable
              borderRadius="$full"
              {...triggerProps}
              onPress={() => {
                setShowPopover(!showPopover);
              }}
            >
              <Avatar bg="$indigo600">
                <AvatarFallbackText>Kevin James</AvatarFallbackText>
              </Avatar>
            </Pressable>
          );
        }}
      >
        <PopoverContent w={130} ml={-55}>
          <PopoverBody p="$2.5">
            <Text size="sm" pl="$1.5" mb="$1.5">
              Kevin James
            </Text>
            <HStack alignItems="center">
              <CircleIcon color="$green700" h="$2" w="$2" />
              <Text size="xs" pl="$1.5">
                Active
              </Text>
            </HStack>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Box>
  );
};

export default PopoverDemo;
