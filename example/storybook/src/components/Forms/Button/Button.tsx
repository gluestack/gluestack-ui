import type { ComponentStory } from '@storybook/react-native';
import { Box, Center } from '../../../ui-components';
import React from 'react';
import {
  Button,
  ButtonText,
  ButtonIcon,
  ButtonGroup,
  Icon,
  AddIcon,
  InfoIcon,
  ButtonSpinner,
  ArrowUpIcon,
  Heading,
  Text,
  HStack,
  VStack,
  ThreeDotsIcon,
  Input,
  InputInput,
} from '../../../ui-components';
import { EditIcon, ArrowLeftIcon } from 'lucide-react-native';

type ButtonStoryType = ComponentStory<typeof Button>;

const ButtonStory: ButtonStoryType = ({ text = 'Button', ...props }: any) => {
  return (
    <Button {...props}>
      <ButtonText
        dataSet={{
          'component-props': JSON.stringify({
            'is-text-style': true,
            'component-name': 'Text',
            'size': props.size,
          }),
        }}
      >
        {text}
      </ButtonText>
    </Button>
  );
};

export default ButtonStory;

export {
  Button,
  ButtonText,
  ButtonIcon,
  ButtonGroup,
  Icon,
  AddIcon,
  InfoIcon,
  ButtonSpinner,
  EditIcon,
  ArrowUpIcon,
  Heading,
  Text,
  Box,
  HStack,
  VStack,
  ThreeDotsIcon,
  Input,
  InputInput,
  ArrowLeftIcon,
  Center,
};
