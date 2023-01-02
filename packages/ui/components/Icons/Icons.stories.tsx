import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import Wrapper from '../Wrapper';
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
import { Icon } from '@gluestack/ui';

const MyIconsMeta: ComponentMeta<typeof Icon> = {
  title: 'MEDIA AND ICONS/Icons',
  component: Icon,
  argTypes: {},
  args: {},
};

export default MyIconsMeta;

type MyCustomIconsStory = ComponentStory<typeof Icon>;

export const AllIcons: MyCustomIconsStory = ({ ...props }) => {
  return (
    <Wrapper>
      <HStack sx={{ style: { w: '70%', flexWrap: 'wrap' } }} space="lg">
        <AddIcon sx={{ style: { p: '$2' } }} />
        <HamburgerIcon sx={{ style: { p: '$2' } }} />
        <ArrowBackIcon sx={{ style: { p: '$2' } }} />
        <ArrowDownIcon sx={{ style: { p: '$2' } }} />
        <ArrowForwardIcon sx={{ style: { p: '$2' } }} />
        <ArrowUpIcon sx={{ style: { p: '$2' } }} />
        <ChevronDownIcon sx={{ style: { p: '$2' } }} />
        <ChevronUpIcon sx={{ style: { p: '$2' } }} />
        <ChevronLeftIcon sx={{ style: { p: '$2' } }} />
        <ChevronRightIcon sx={{ style: { p: '$2' } }} />
        <CheckIcon sx={{ style: { p: '$2' } }} />
        <CircleIcon sx={{ style: { p: '$2' } }} />
        <CloseIcon sx={{ style: { p: '$2' } }} />
        <InfoIcon sx={{ style: { p: '$2' } }} />
        <MinusIcon sx={{ style: { p: '$2' } }} />
        <MoonIcon sx={{ style: { p: '$2' } }} />
        <QuestionIcon sx={{ style: { p: '$2' } }} />
        <SearchIcon sx={{ style: { p: '$2' } }} />
        <SunIcon sx={{ style: { p: '$2' } }} />
        <WarningIcon sx={{ style: { p: '$2' } }} />
        <WarningOutlineIcon sx={{ style: { p: '$2' } }} />
        <ThreeDotsIcon sx={{ style: { p: '$2' } }} />
        <PlayIcon sx={{ style: { p: '$2' } }} />
        <ShareIcon sx={{ style: { p: '$2' } }} />
        <FavouriteIcon sx={{ style: { p: '$2' } }} />
        <DeleteIcon sx={{ style: { p: '$2' } }} />
      </HStack>
    </Wrapper>
  );
};
