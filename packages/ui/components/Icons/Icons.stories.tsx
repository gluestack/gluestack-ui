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
  title: 'Icons',
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
