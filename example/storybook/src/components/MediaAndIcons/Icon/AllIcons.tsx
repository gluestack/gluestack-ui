import React from 'react';
import Wrapper from '../../Wrapper';
// import { HStack } from '../../../ui-components';

import {
  AddIcon,
  HamburgerIcon,
  CheckIcon,
  CircleIcon,
  CloseIcon,
  InfoIcon,
  // @ts-ignore
  WeatherMoon,
  MinusIcon,
  CloseIconFilled,
  MoonIcon,
  QuestionIcon,
  SearchIcon,
  SunIcon,
  WarningIcon,
  WarningOutlineIcon,
  ThreeDotsIcon,
  PlayIcon,
  ShareIcon,
  FavouriteIcon,
  DeleteIcon,
  ArrowBackIcon,
  ArrowDownIcon,
  ArrowForwardIcon,
  ArrowUpIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  Icon,
  // Box,
  VStack,
  HStack,
  Text,
} from '../../../ui-components';
import { Cake } from 'lucide-react-native';
// import Ionicons from '@expo/vector-icons/Ionicons';
// import { Text, View } from 'react-native';

export const AllIcons = ({ ...props }: any) => {
  return (
    <Wrapper>
      <VStack space="lg">
        {/* Default props from styled */}
        <HStack space="md">
          <Icon as={Cake} {...props} />
          <Icon as={HamburgerIcon} />
          {/* TODO: Fix get size directly from styled */}
          {/* <Icon as={Ionicons} name="add" type="font" size={18} /> */}
        </HStack>

        {/* sx props support */}
        <HStack space="md">
          <Icon as={Cake} sx={{ h: 40, w: 40, color: 'red' }} />
          <Icon as={HamburgerIcon} sx={{ h: 40, w: 40, color: 'red' }} />
          {/* <Icon
            as={Ionicons}
            name="add"
            sx={{ color: 'red', bg: '$blue100', h: 40, w: 40 }}
            type="font"
          /> */}
        </HStack>

        {/* size props from styled */}
        <HStack space="md">
          <Icon as={Cake} size="xl" />
          <Icon as={HamburgerIcon} size="xl" />
          {/* FIX: size xl not getting resolved */}
          {/* <Icon as={Ionicons} name="add" type="font" sx={{ h: 24, w: 24 }} /> */}
        </HStack>

        {/*  token resolution from styled */}
        <HStack space="md">
          <Icon as={Cake} color="$primary500" />
          <Icon as={HamburgerIcon} color="$primary500" />
          {/* <Icon
            as={Ionicons}
            name="add"
            color="$primary500"
            type="font"
            sx={{ h: 18, w: 18 }}
          /> */}
        </HStack>
      </VStack>
    </Wrapper>
  );
};

export {
  AddIcon,
  HamburgerIcon,
  CheckIcon,
  CircleIcon,
  CloseIcon,
  InfoIcon,
  WeatherMoon,
  MinusIcon,
  CloseIconFilled,
  MoonIcon,
  QuestionIcon,
  SearchIcon,
  SunIcon,
  WarningIcon,
  WarningOutlineIcon,
  ThreeDotsIcon,
  PlayIcon,
  ShareIcon,
  FavouriteIcon,
  DeleteIcon,
  ArrowBackIcon,
  ArrowDownIcon,
  ArrowForwardIcon,
  ArrowUpIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  HStack,
  VStack,
  Icon,
  Text,
};
