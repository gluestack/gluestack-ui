import React from 'react';
import FormControlDemo from './demos/FormControlDemo';
import SliderDemo from './demos/SliderDemo';
import SelectDemo from './demos/SelectDemo';
import CheckboxDemo from './demos/CheckboxDemo';
import BadgeDemo from './demos/BadgeDemo';
import AvatarDemo from './demos/AvatarDemo';
import ToastDemo from './demos/RadioDemo';

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
