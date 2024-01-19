import type { ComponentMeta } from '@storybook/react-native';
import FormControl from './FormControl';

const FormControlMeta: ComponentMeta<typeof FormControl> = {
  title: 'components/PRIMITIVES/FormControl',
  component: FormControl,
  // metaInfo is required for figma generation
  // @ts-ignore
  metaInfo: {
    componentDescription: `By using FormControl, developers can provide important context to form elements. This context can include whether the element is invalid, disabled, or required.`,
  },
  argTypes: {
    isInvalid: {
      control: 'boolean',
      options: [true, false],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
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
    size: 'md',
  },
};

export default FormControlMeta;

export { FormControl };
