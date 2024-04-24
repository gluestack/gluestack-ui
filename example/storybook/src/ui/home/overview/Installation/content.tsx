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
    href: '/ui/docs/components/forms/select',
  },
  {
    title: 'Checkbox',
    child: <CheckboxDemo />,
    href: '/ui/docs/components/forms/checkbox',
  },
  {
    title: 'Toast',
    child: <ToastDemo />,
    href: '/ui/docs/components/feedback/toast',
  },
  {
    title: 'FormControl',
    child: <FormControlDemo />,
    href: '/ui/docs/components/forms/form-control',
  },
  {
    title: 'Badge',
    child: <BadgeDemo />,
    href: '/ui/docs/components/data-display/badge',
  },
  {
    title: 'Avatar',
    child: <AvatarDemo />,
    href: '/ui/docs/components/media-and-icons/avatar',
  },

  {
    title: 'Slider',
    child: <SliderDemo />,
    href: '/ui/docs/components/forms/slider',
  },
];
