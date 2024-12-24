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
import PressableDemo from './Demos/PressableDemo';
import RadioDemo from './Demos/RadioDemo';
import SwitchDemo from './Demos/SwitchDemo';
import TextAreaDemo from './Demos/TeaxtAreaDemo';
import TooltipDemo from './Demos/TooltipDemo';
import IconDemo from './Demos/IconDemo';
import ImageDemo from './Demos/ImageDemo';
import FabDemo from './Demos/FabDemo';
import CenterDemo from './Demos/CenterDemo';
import AlertDialogDemo from './Demos/AlertDialogDemo';
import ModalDemo from './Demos/ModalDemo';
import AccordionDemo from './Demos/AccordionDemo';
// import MenuDemo from './Demos/MenuDemo';
// import PopoverDemo from './Demos/PopoverDemo';
import ActionsheetDemo from './Demos/ActionsheetDemo';

export const content = [
  {
    title: 'Actionsheet',
    child: <ActionsheetDemo />,
    padding: '$0',
    href: '/disclosure/actionsheet',
  },
  {
    title: 'AlertDialog',
    child: <AlertDialogDemo />,
    padding: '$0',
    href: '/overlay/alert-dialog',
  },
  {
    title: 'Alert',
    child: <AlertDemo />,
    href: '/feedback/alert',
  },
  {
    title: 'Avatar',
    child: <AvatarDemo />,
    href: '/media-and-icons/avatar',
  },
  {
    title: 'Accordion',
    child: <AccordionDemo />,
    href: '/disclosure/accordion',
  },

  {
    title: 'Badge',
    child: <BadgeDemo />,
    href: '/data-display/badge',
  },
  {
    title: 'Box',
    child: <BoxDemo />,
    href: '/layout/box',
  },
  {
    title: 'Button',
    child: <ButtonDemo />,
    href: '/forms/button',
  },

  {
    title: 'Center',
    child: <CenterDemo />,
    href: '/layout/center',
  },
  {
    title: 'Checkbox',
    child: <CheckboxDemo />,
    href: '/forms/checkbox',
  },

  {
    title: 'Divider',
    child: <DividerDemo />,
    href: '/data-display/divider',
  },

  {
    title: 'Fab',
    child: <FabDemo />,
    href: '/others/fab',
  },
  {
    title: 'FormControl',
    child: <FormControlDemo />,
    href: '/forms/form-control',
  },
  {
    title: 'Heading',
    child: <HeadingDemo />,
    href: '/typography/heading',
  },
  {
    title: 'HStack',
    child: <HStackDemo />,
    href: '/layout/hstack',
  },

  {
    title: 'Icon',
    child: <IconDemo />,
    href: '/media-and-icons/icon',
  },
  {
    title: 'Image',
    child: <ImageDemo />,
    href: '/media-and-icons/image',
  },
  {
    title: 'Input',
    child: <InputDemo />,
    href: '/forms/input',
  },

  {
    title: 'Link',
    child: <LinkDemo />,
    href: '/forms/link',
  },

  // {
  //   title: 'Menu',
  //   child: <MenuDemo />,
  //   padding: '$0',
  //   href: '/overlay/menu',
  // },

  {
    title: 'Modal',
    child: <ModalDemo />,
    padding: '$0',
    href: '/overlay/modal',
  },

  // {
  //   title: 'Popover',
  //   child: <PopoverDemo />,
  //   padding: '$0',
  //   href: '/overlay/popover',
  // },

  {
    title: 'Pressable',
    child: <PressableDemo />,
    href: '/forms/pressable',
  },
  {
    title: 'Progress',
    child: <ProgressDemo />,
    href: '/feedback/progress',
  },

  {
    title: 'Radio',
    child: <RadioDemo />,
    href: '/forms/radio',
  },

  {
    title: 'Select',
    child: <SelectDemo />,
    href: '/forms/select',
  },

  {
    title: 'Slider',
    child: <SliderDemo />,
    href: '/forms/slider',
  },
  {
    title: 'Spinner',
    child: <SpinnerDemo />,
    href: '/feedback/spinner',
  },
  {
    title: 'Switch',
    child: <SwitchDemo />,
    href: '/forms/switch',
  },

  {
    title: 'Text',
    child: <TextDemo />,
    href: '/typography/text',
  },
  {
    title: 'TextArea',
    child: <TextAreaDemo />,
    href: '/forms/textarea',
  },
  {
    title: 'Toast',
    child: <ToastDemo />,
    href: '/feedback/toast',
  },

  {
    title: 'Tooltip',
    child: <TooltipDemo />,
    href: '/overlay/tooltip',
  },

  {
    title: 'VStack',
    child: <VStackDemo />,
    href: '/layout/vstack',
  },
];
