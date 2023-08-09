import React from 'react';
import {
  Center,
  Button,
  ButtonText,
  Tooltip,
  TooltipContent,
  TooltipText,
  Text,
  Avatar,
  AvatarGroup,
  AvatarFallbackText,
  Box,
  Heading,
  VStack,
  HStack,
  Icon,
} from '../../../ui-components';
import { Edit, Command } from 'lucide-react-native';

const TooltipStory = ({
  showTooltip: showTooltipProp = true,
  placement = 'bottom',
  text = 'Hello world',
}: any) => {
  2;
  return (
    <Tooltip
      offset={10}
      placement={placement}
      isOpen={showTooltipProp}
      // eslint-disable-next-line react/no-unstable-nested-components
      trigger={(triggerProps: any) => {
        return (
          <Button {...triggerProps}>
            <ButtonText>More</ButtonText>
          </Button>
        );
      }}
    >
      <TooltipContent>
        <TooltipText>{text}</TooltipText>
      </TooltipContent>
    </Tooltip>
  );
};

export default TooltipStory;

export {
  Tooltip,
  TooltipContent,
  TooltipText,
  Center,
  Button,
  ButtonText,
  Text,
  Avatar,
  AvatarGroup,
  AvatarFallbackText,
  Box,
  Heading,
  Edit,
  VStack,
  Command,
  HStack,
  Icon,
};
