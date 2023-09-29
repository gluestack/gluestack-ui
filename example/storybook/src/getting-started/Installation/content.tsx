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
    href: '/docs/components/forms/select',
  },
  {
    title: 'Checkbox',
    child: <CheckboxDemo />,
    href: '/docs/components/forms/checkbox',
  },
  {
    title: 'Toast',
    child: <ToastDemo />,
    href: '/docs/components/feedback/toast',
  },
  {
    title: 'FormControl',
    child: <FormControlDemo />,
    href: '/docs/components/forms/form-control',
  },
  {
    title: 'Badge',
    child: <BadgeDemo />,
    href: '/docs/components/data-display/badge',
  },
  {
    title: 'Avatar',
    child: <AvatarDemo />,
    href: '/docs/components/media-and-icons/avatar',
  },

  {
    title: 'Slider',
    child: <SliderDemo />,
    href: '/docs/components/forms/slider',
  },
];
