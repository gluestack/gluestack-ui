import React from 'react';
import SelectDemo from './Demos/SelectDemo';
import { CheckboxDemo } from './Demos/CheckboxDemo';
import { SliderDemo } from './Demos/SliderDemo';
import FormControlDemo from './Demos/FormControlDemo';
import BadgeDemo from './Demos/BadgeDemo';
import ToastDemo from './Demos/ToastDemo';
import AvatarDemo from './Demos/AvatarDemo';
import HeadingDemo from './Demos/HeadingDemo';
import TextDemo from './Demos/TextDemo';
import BoxDemo from './Demos/BoxDemo';
import DividerDemo from './Demos/DividerDemo';
import HStackDemo from './Demos/HStackDemo';
import VStackDemo from './Demos/VStackDemo';
import AlertDemo from './Demos/AlertDemo';
import ProgressDemo from './Demos/ProgressDemo';
import SpinnerDemo from './Demos/SpinnerDemo';
import ButtonDemo from './Demos/ButtonDemo';
import InputDemo from './Demos/InputDemo';
import LinkDemo from './Demos/LinkDemo';

export const content = [
  {
    title: 'Select',
    child: <SelectDemo />,
  },
  {
    title: 'Checkbox',
    child: <CheckboxDemo />,
  },
  {
    title: 'Slider',
    child: <SliderDemo />,
  },
  {
    title: 'FormControl',
    child: <FormControlDemo />,
  },
  {
    title: 'Badge',
    child: <BadgeDemo />,
  },
  {
    title: 'Toast',
    child: <ToastDemo />,
  },

  {
    title: 'Avatar',
    child: <AvatarDemo />,
  },
  {
    title: 'Heading',
    child: <HeadingDemo />,
  },
  {
    title: 'Text',
    child: <TextDemo />,
  },
  {
    title: 'Box',
    child: <BoxDemo />,
  },
  {
    title: 'Divider',
    child: <DividerDemo />,
  },
  {
    title: 'HStack',
    child: <HStackDemo />,
  },
  {
    title: 'VStack',
    child: <VStackDemo />,
  },
  {
    title: 'Alert',
    child: <AlertDemo />,
  },
  {
    title: 'Progress',
    child: <ProgressDemo />,
  },
  {
    title: 'Spinner',
    child: <SpinnerDemo />,
  },
  {
    title: 'Button',
    child: <ButtonDemo />,
  },
  {
    title: 'Input',
    child: <InputDemo />,
  },
  {
    title: 'Link',
    child: <LinkDemo />,
  },
];

//A trick for creating a grid layout
export const emptyBoxes = [1, 2, 3, 4];
