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
} from '@custom-ui/themed';
import { Edit, Command } from 'lucide-react-native';

const TooltipBasic = ({
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

const FigmaTooltipStory = ({
  showTooltip: _showTooltipProp = true,
  _placement = 'bottom',
  ...props
}: any) => {
  2;
  return (
    <Tooltip
      {...props}
      offset={10}
      placement="bottom"
      isOpen={true}
      // @ts-ignore
      _experimentalOverlay={true}
      // eslint-disable-next-line react/no-unstable-nested-components
      trigger={(triggerProps: any) => {
        return (
          <Box w={200} h={100} py="$20" alignItems="center">
            <Button {...triggerProps}>
              <ButtonText>More</ButtonText>
            </Button>
          </Box>
        );
      }}
    >
      <TooltipContent>
        <TooltipText>Hello world!</TooltipText>
      </TooltipContent>
    </Tooltip>
  );
};

TooltipBasic.description =
  'This is a basic Tooltip component example.  A tooltip is a popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.';

export default TooltipBasic;

export {
  FigmaTooltipStory,
  TooltipBasic,
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
