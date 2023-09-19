import {
  Avatar,
  Box,
  Popover,
  Pressable,
  Text,
  PopoverContent,
  AvatarFallbackText,
  PopoverBody,
} from '@gluestack-ui/themed';
import React from 'react';

const PopoverDemo = () => {
  const [showPopover, setShowPopover] = React.useState(true);

  return (
    <Box>
      {/* PhoneIcon, Clock3Icon, MailIcon are imported from 'lucide-react-native' */}
      <Popover
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
        <PopoverContent w="auto" pt="$0">
          {/* <PopoverHeader>
            <Heading fontSize="$sm">Status</Heading>
          </PopoverHeader> */}
          <PopoverBody>
            <Text size="sm" pl="$1.5">
              Kevin James
            </Text>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Box>
  );
};

export default PopoverDemo;
