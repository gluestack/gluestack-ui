import type { ComponentMeta } from '@storybook/react-native';
import Checkbox from './Checkbox';

const CheckboxMeta: ComponentMeta<typeof Checkbox> = {
  title: 'stories/FORMS/Checkbox',
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
  },
  args: {
    size: 'md',
  },
};

export default CheckboxMeta;
export { Checkbox };
