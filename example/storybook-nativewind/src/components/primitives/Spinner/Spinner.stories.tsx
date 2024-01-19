import type { ComponentMeta } from '@storybook/react-native';
import Spinner from './Spinner';

const SpinnerMeta: ComponentMeta<typeof Spinner> = {
  title: 'components/PRIMITIVES/Spinner',
  component: Spinner,
  // metaInfo is required for figma generation
  // @ts-ignore
  metaInfo: {
    componentDescription: `Spinners are designed to give visual cues to users that an action is being processed or that a change or result is expected.`,
  },
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
