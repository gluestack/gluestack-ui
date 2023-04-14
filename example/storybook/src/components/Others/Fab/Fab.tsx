import React from 'react';
import Wrapper from '../../Wrapper';
import { Svg, Path } from 'react-native-svg';
import { createIcon } from '@gluestack-ui/icon';
import {
  Fab,
  Icon,
  Box,
  VStack,
  HStack,
  Avatar,
  Heading,
  Text,
  Divider,
} from '../../../ui-components';
import { IconRoot } from '../../Disclosure/Actionsheet/ActionsheetAvoidKeyboard';

const EditIcon = createIcon({
  Root: IconRoot,
  viewBox: '0 0 16 16',
  path: (
    <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <Path
        d="M7.33301 2.66666H2.66634C2.31272 2.66666 1.97358 2.80714 1.72353 3.05719C1.47348 3.30724 1.33301 3.64638 1.33301 4V13.3333C1.33301 13.687 1.47348 14.0261 1.72353 14.2761C1.97358 14.5262 2.31272 14.6667 2.66634 14.6667H11.9997C12.3533 14.6667 12.6924 14.5262 12.9425 14.2761C13.1925 14.0261 13.333 13.687 13.333 13.3333V8.66666"
        stroke="white"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.333 1.66666C12.5982 1.40145 12.9579 1.25245 13.333 1.25245C13.7081 1.25245 14.0678 1.40145 14.333 1.66666C14.5982 1.93188 14.7472 2.29159 14.7472 2.66666C14.7472 3.04174 14.5982 3.40145 14.333 3.66666L7.99967 10L5.33301 10.6667L5.99967 8L12.333 1.66666Z"
        stroke="white"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  ),
});

const SearchIcon = createIcon({
  Root: IconRoot,
  viewBox: '0 0 16 16',
  path: (
    <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <Path
        d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z"
        stroke="white"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.0006 14L11.1006 11.1"
        stroke="white"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  ),
});

export const FabStory = ({ placement, showLabel, showIcon, ...props }: any) => {
  return (
    <Wrapper colorMode="dark">
      <Box
        position="relative"
        bg="$trueGray200"
        h="$full"
        w="$full"
        sx={{ _web: { w: 300, h: 300 } }}
      >
        <Icon as {...SearchIcon} />
        <Fab placement={placement} {...props}>
          {showIcon && <Icon as={SearchIcon} />}
          {showLabel && <Fab.Label>Menu</Fab.Label>}
        </Fab>
      </Box>
    </Wrapper>
  );
};

export {
  Fab,
  SearchIcon,
  EditIcon,
  Box,
  VStack,
  HStack,
  Avatar,
  Heading,
  Text,
  Divider,
};
