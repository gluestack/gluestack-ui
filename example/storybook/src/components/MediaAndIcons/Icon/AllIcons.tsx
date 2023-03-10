import React from 'react';
import Wrapper from '../../Wrapper';
import { HStack } from '../../../ui-components';

import {
  AddIcon,
  HamburgerIcon,
  // HStack,
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
} from '../../../ui-components';
import { Camera } from 'lucide-react-native';

export const AllIcons = ({ ...props }: any) => {
  return (
    <Wrapper>
      <HStack sx={{ w: '70%', flexWrap: 'wrap' }} space="lg">
        <Icon as={Camera} sizes="lg" mt={7} />
        <AddIcon sx={{ p: '$2' }} />
        <HamburgerIcon sx={{ p: '$2' }} />
        <ArrowBackIcon sx={{ p: '$2' }} />
        <ArrowDownIcon sx={{ p: '$2' }} />
        <ArrowForwardIcon sx={{ p: '$2' }} />
        <ArrowUpIcon sx={{ p: '$2' }} />
        <ChevronDownIcon sx={{ p: '$2' }} />
        <ChevronUpIcon sx={{ p: '$2' }} />
        <ChevronLeftIcon sx={{ p: '$2' }} />
        <ChevronRightIcon sx={{ p: '$2' }} />
        <CheckIcon sx={{ p: '$2' }} />
        <CircleIcon sx={{ p: '$2' }} />
        <CloseIcon sx={{ p: '$2' }} />
        <InfoIcon sx={{ p: '$2' }} {...props} />
        <WeatherMoon />
        <MinusIcon sx={{ p: '$2' }} />
        <MoonIcon sx={{ p: '$2' }} />
        <QuestionIcon sx={{ p: '$2' }} />
        <SearchIcon sx={{ p: '$2' }} />
        <SunIcon sx={{ p: '$2' }} />
        <WarningIcon sx={{ p: '$2' }} />
        <WarningOutlineIcon sx={{ p: '$2' }} />
        <ThreeDotsIcon sx={{ p: '$2' }} />
        <PlayIcon sx={{ p: '$2' }} />
        <ShareIcon sx={{ p: '$2' }} />
        <FavouriteIcon sx={{ p: '$2' }} />
        <DeleteIcon sx={{ p: '$2' }} />
        <CloseIconFilled sx={{ p: '$2' }} />
      </HStack>
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
  Icon,
};
