import type { ComponentMeta } from '@storybook/react-native';
import Spinner from './Spinner';

const SpinnerMeta: ComponentMeta<typeof Spinner> = {
  title: 'stories/FEEDBACK/Spinner',
  component: Spinner,
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'large'],
      description: 'The size of the spinner.',
      table: {
        defaultValue: { summary: 'small' },
      },
    },
  },
  args: {
    size: 'small',
  },
};

export default SpinnerMeta;

export { Spinner };
