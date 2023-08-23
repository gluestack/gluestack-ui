import React from 'react';
import FormControlDemo from './FormControlDemo';
import SliderDemo from './SliderDemo';
import SelectDemo from './SelectDemo';
import CheckboxDemo from './CheckboxDemo';
import BadgeDemo from './BadgeDemo';
import AvatarDemo from './AvatarDemo';
import ToastDemo from './RadioDemo';

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
    title: 'Toast',
    child: <ToastDemo />,
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
    title: 'Avatar',
    child: <AvatarDemo />,
  },

  {
    title: 'Slider',
    child: <SliderDemo />,
  },
];
