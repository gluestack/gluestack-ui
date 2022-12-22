import {
  AddIcon,
  HamburgerIcon,
  HStack,
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
} from '@gluestack/ui';
import React from 'react';

import { Icon } from '@gluestack/ui';

import Wrapper from '../Wrapper';
//@ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Example = ({ ...props }) => {
  return (
    <Wrapper>
      {/* @ts-ignore */}
      <HStack sx={{ style: { w: '70%', flexWrap: 'wrap' } }} space="sm">
        <AddIcon />
        <HamburgerIcon />
        <ArrowBackIcon />
        <ArrowDownIcon />
        <ArrowForwardIcon />
        <ArrowUpIcon />
        <ChevronDownIcon />
        <ChevronUpIcon />
        <ChevronLeftIcon />
        <ChevronRightIcon />
        <CheckIcon />
        <CircleIcon />
        <CloseIcon />
        <InfoIcon />
        <MinusIcon />
        <MoonIcon />
        <QuestionIcon />
        <SearchIcon />
        <SunIcon />
        <WarningIcon />
        <WarningOutlineIcon />
        <ThreeDotsIcon />
        <PlayIcon />
        <ShareIcon />
        <FavouriteIcon />
        <DeleteIcon />
      </HStack>
    </Wrapper>
  );
};
