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
  Checkbox,
  SearchIcon,
  CheckIcon,
  Image,
  HamburgerIcon,
  AddIcon,
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

const ShoppingIcon = createIcon({
  Root: IconRoot,
  viewBox: '0 0 16 16',
  path: (
    <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <Path
        d="M5.33366 14.6667C5.70185 14.6667 6.00033 14.3682 6.00033 14C6.00033 13.6319 5.70185 13.3334 5.33366 13.3334C4.96547 13.3334 4.66699 13.6319 4.66699 14C4.66699 14.3682 4.96547 14.6667 5.33366 14.6667Z"
        stroke="white"
        stroke-width="1.33333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M12.6667 14.6667C13.0349 14.6667 13.3333 14.3682 13.3333 14C13.3333 13.6319 13.0349 13.3334 12.6667 13.3334C12.2985 13.3334 12 13.6319 12 14C12 14.3682 12.2985 14.6667 12.6667 14.6667Z"
        stroke="white"
        stroke-width="1.33333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M1.36621 1.3667H2.69954L4.47288 9.6467C4.53793 9.94994 4.70666 10.221 4.95002 10.4133C5.19338 10.6055 5.49615 10.7069 5.80621 10.7H12.3262C12.6297 10.6995 12.9239 10.5956 13.1602 10.4053C13.3966 10.215 13.561 9.94972 13.6262 9.65336L14.7262 4.70003H3.41288"
        stroke="white"
        stroke-width="1.33333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  ),
});

export const FabStory = ({ placement, showLabel, showIcon, ...props }: any) => {
  return (
    <Wrapper>
      <Box
        position="relative"
        bg="$trueGray200"
        h="$full"
        w="$full"
        sx={{ _web: { w: 300, h: 300 } }}
      >
        <Icon as={HamburgerIcon} />
        <Fab placement={placement} {...props}>
          {showIcon && <Icon as={HamburgerIcon} />}
          {showLabel && <Fab.Label>Menu</Fab.Label>}
        </Fab>
      </Box>
    </Wrapper>
  );
};

export {
  Fab,
  Icon,
  SearchIcon,
  EditIcon,
  Box,
  VStack,
  HStack,
  Avatar,
  Heading,
  Text,
  Divider,
  AddIcon,
  Checkbox,
  CheckIcon,
  Image,
  ShoppingIcon,
};
