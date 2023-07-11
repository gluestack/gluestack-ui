import React from 'react';
import {
  Center,
  Button,
  Tooltip,
  Text,
  Avatar,
  Box,
  Heading,
  VStack,
  HStack,
  Icon,
} from '../../../ui-components';
import { Edit, Command } from 'lucide-react-native';

export const TooltipStory = ({
  placement = 'bottom',
  text = 'Hello world',
}: any) => {
  return (
    <Center w={500} h={500}>
      <Tooltip
        placement={placement}
        // eslint-disable-next-line react/no-unstable-nested-components
        trigger={(triggerProps: any) => {
          return (
            <Button {...triggerProps}>
              <Button.Text>More</Button.Text>
            </Button>
          );
        }}
      >
        <Tooltip.Content>
          <Text>{text}</Text>
        </Tooltip.Content>
      </Tooltip>
    </Center>
  );
};

export {
  Tooltip,
  Center,
  Button,
  Text,
  Avatar,
  Box,
  Heading,
  Edit,
  VStack,
  Command,
  HStack,
  Icon,
};
