import {
  AddIcon,
  HamburgerIcon,
  CheckIcon,
  CircleIcon,
  CloseIcon,
  InfoIcon,
  MinusIcon,
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
import React from 'react';
import { View } from 'react-native';
import { Wrapper } from '../Wrapper';

export const Icon = () => {
  return (
    <Wrapper>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        <AddIcon sx={{ m: '$2' }} />
        <HamburgerIcon sx={{ m: '$2' }} />
        <ArrowBackIcon sx={{ m: '$2' }} />
        <ArrowDownIcon sx={{ m: '$2' }} />
        <ArrowForwardIcon sx={{ m: '$2' }} />
        <ArrowUpIcon sx={{ m: '$2' }} />
        <ChevronDownIcon sx={{ m: '$2' }} />
        <ChevronUpIcon sx={{ m: '$2' }} />
        <ChevronLeftIcon sx={{ m: '$2' }} />
        <ChevronRightIcon sx={{ m: '$2' }} />
        <CheckIcon sx={{ m: '$2' }} />
        <CircleIcon sx={{ m: '$2' }} />
        <CloseIcon sx={{ m: '$2' }} />
        <InfoIcon sx={{ m: '$2' }} />
        <MinusIcon sx={{ m: '$2' }} />
        <MoonIcon sx={{ m: '$2' }} />
        <QuestionIcon sx={{ m: '$2' }} />
        <SearchIcon sx={{ m: '$2' }} />
        <SunIcon sx={{ m: '$2' }} />
        <WarningIcon sx={{ m: '$2' }} />
        <WarningOutlineIcon sx={{ m: '$2' }} />
        <ThreeDotsIcon sx={{ m: '$2' }} />
        <PlayIcon sx={{ m: '$2' }} />
        <ShareIcon sx={{ m: '$2' }} />
        <FavouriteIcon sx={{ m: '$2' }} />
        <DeleteIcon sx={{ m: '$2' }} />
      </View>
    </Wrapper>
  );
};

export default Icon;
