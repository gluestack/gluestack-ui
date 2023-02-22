import React from 'react';
import Wrapper from '../Wrapper';
import { HStack } from '@gluestack/design-system';
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
} from './Icons';

import { createIcon } from '@gluestack-ui/icon';
import { Root } from '../styled-components/icon';
import { Circle } from 'react-native-svg';

export const Icon = createIcon({
  Root,
  viewBox: '0 0 36 36',
  // d: 'M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0',
  path: [
    <Circle cx="18" cy="18" r="17.5" fill="#06B6D4" stroke="#0E7490" />,
    <Circle cx="18" cy="18" r="13.5" fill="white" stroke="#0E7490" />,
    <Circle cx="18" cy="18" r="9.5" fill="#06B6D4" stroke="#0E7490" />,
    <Circle cx="18" cy="18" r="5.5" fill="white" stroke="#0E7490" />,
  ],
});

export const AllIcons = ({ ...props }: any) => {
  return (
    <Wrapper>
      <HStack sx={{ w: '70%', flexWrap: 'wrap' }} space="lg">
        {/* <AirVent sx={{ p: '$2'  }} /> */}
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
