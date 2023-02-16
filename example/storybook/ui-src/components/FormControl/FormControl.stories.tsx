import type { ComponentMeta } from '@storybook/react-native';
import { FormControlStory as FormControl } from './FormControl';

const MyFormControlMeta: ComponentMeta<typeof FormControl> = {
  title: 'stories/FORMS/FormControl',
  component: FormControl,
  argTypes: {
    isInvalid: {
      control: 'boolean',
      options: [true, false],
    },
    isDisabled: {
      control: 'boolean',
      options: [true, false],
    },
    isRequired: {
      control: 'boolean',
      options: [true, false],
    },
  },
  args: {
    isInvalid: true,
    isRequired: true,
    isDisabled: false,
  },
};

export default MyFormControlMeta;

export { FormControl };
