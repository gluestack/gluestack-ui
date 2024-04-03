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
    href: '/ui/gluestack-style/docs/components/disclosure/actionsheet',
  },
  {
    title: 'AlertDialog',
    child: <AlertDialogDemo />,
    padding: '$0',
    href: '/ui/gluestack-style/docs/components/overlay/alert-dialog',
  },
  {
    title: 'Alert',
    child: <AlertDemo />,
    href: '/ui/gluestack-style/docs/components/feedback/alert',
  },
  {
    title: 'Avatar',
    child: <AvatarDemo />,
    href: '/ui/gluestack-style/docs/components/media-and-icons/avatar',
  },
  {
    title: 'Accordion',
    child: <AccordionDemo />,
    href: '/ui/gluestack-style/docs/components/disclosure/accordion',
  },

  {
    title: 'Badge',
    child: <BadgeDemo />,
    href: '/ui/gluestack-style/docs/components/data-display/badge',
  },
  {
    title: 'Box',
    child: <BoxDemo />,
    href: '/ui/gluestack-style/docs/components/layout/box',
  },
  {
    title: 'Button',
    child: <ButtonDemo />,
    href: '/ui/gluestack-style/docs/components/forms/button',
  },

  {
    title: 'Center',
    child: <CenterDemo />,
    href: '/ui/gluestack-style/docs/components/layout/center',
  },
  {
    title: 'Checkbox',
    child: <CheckboxDemo />,
    href: '/ui/gluestack-style/docs/components/forms/checkbox',
  },

  {
    title: 'Divider',
    child: <DividerDemo />,
    href: '/ui/gluestack-style/docs/components/data-display/divider',
  },

  {
    title: 'Fab',
    child: <FabDemo />,
    href: '/ui/gluestack-style/docs/components/others/fab',
  },
  {
    title: 'FormControl',
    child: <FormControlDemo />,
    href: '/ui/gluestack-style/docs/components/forms/form-control',
  },
  {
    title: 'Heading',
    child: <HeadingDemo />,
    href: '/ui/gluestack-style/docs/components/typography/heading',
  },
  {
    title: 'HStack',
    child: <HStackDemo />,
    href: '/ui/gluestack-style/docs/components/layout/hstack',
  },

  {
    title: 'Icon',
    child: <IconDemo />,
    href: '/ui/gluestack-style/docs/components/media-and-icons/icon',
  },
  {
    title: 'Image',
    child: <ImageDemo />,
    href: '/ui/gluestack-style/docs/components/media-and-icons/image',
  },
  {
    title: 'Input',
    child: <InputDemo />,
    href: '/ui/gluestack-style/docs/components/forms/input',
  },

  {
    title: 'Link',
    child: <LinkDemo />,
    href: '/ui/gluestack-style/docs/components/forms/link',
  },

  // {
  //   title: 'Menu',
  //   child: <MenuDemo />,
  //   padding: '$0',
  //   href: '/ui/gluestack-style/docs/components/overlay/menu',
  // },

  {
    title: 'Modal',
    child: <ModalDemo />,
    padding: '$0',
    href: '/ui/gluestack-style/docs/components/overlay/modal',
  },

  // {
  //   title: 'Popover',
  //   child: <PopoverDemo />,
  //   padding: '$0',
  //   href: '/ui/gluestack-style/docs/components/overlay/popover',
  // },

  {
    title: 'Pressable',
    child: <PressableDemo />,
    href: '/ui/gluestack-style/docs/components/forms/pressable',
  },
  {
    title: 'Progress',
    child: <ProgressDemo />,
    href: '/ui/gluestack-style/docs/components/feedback/progress',
  },

  {
    title: 'Radio',
    child: <RadioDemo />,
    href: '/ui/gluestack-style/docs/components/forms/radio',
  },

  {
    title: 'Select',
    child: <SelectDemo />,
    href: '/ui/gluestack-style/docs/components/forms/select',
  },

  {
    title: 'Slider',
    child: <SliderDemo />,
    href: '/ui/gluestack-style/docs/components/forms/slider',
  },
  {
    title: 'Spinner',
    child: <SpinnerDemo />,
    href: '/ui/gluestack-style/docs/components/feedback/spinner',
  },
  {
    title: 'Switch',
    child: <SwitchDemo />,
    href: '/ui/gluestack-style/docs/components/forms/switch',
  },

  {
    title: 'Text',
    child: <TextDemo />,
    href: '/ui/gluestack-style/docs/components/typography/text',
  },
  {
    title: 'TextArea',
    child: <TextAreaDemo />,
    href: '/ui/gluestack-style/docs/components/forms/textarea',
  },
  {
    title: 'Toast',
    child: <ToastDemo />,
    href: '/ui/gluestack-style/docs/components/feedback/toast',
  },

  {
    title: 'Tooltip',
    child: <TooltipDemo />,
    href: '/ui/gluestack-style/docs/components/overlay/tooltip',
  },

  {
    title: 'VStack',
    child: <VStackDemo />,
    href: '/ui/gluestack-style/docs/components/layout/vstack',
  },
];
