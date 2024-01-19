import type { ComponentMeta } from '@storybook/react-native';
import Checkbox from './Checkbox';

const CheckboxMeta: ComponentMeta<typeof Checkbox> = {
  title: 'components/PRIMITIVES/Checkbox',
  component: Checkbox,
  // metaInfo is required for figma generation
  // @ts-ignore
  metaInfo: {
    componentDescription: `Whether you're building a simple form or a complex data collection system, the Checkbox component offers a user-friendly way for users to select multiple options from a list.`,
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    isChecked: {
      type: 'boolean',
      options: [true, false],
    },
    isInvalid: {
      type: 'boolean',
      options: [true, false],
    },
    isDisabled: {
      type: 'boolean',
      options: [true, false],
    },
    isReadOnly: {
      type: 'boolean',
      figmaIgnore: true,
      options: [true, false],
    },
  },
  args: {
    size: 'md',
    isInvalid: false,
    isDisabled: false,
    isReadOnly: false,
    isChecked: false,
  },
};

export default CheckboxMeta;
export { Checkbox };
