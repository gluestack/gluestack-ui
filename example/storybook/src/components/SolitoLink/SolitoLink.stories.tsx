import type { ComponentMeta } from '@storybook/react-native';
import { SolitoLinkStory as SolitoLink } from './SolitoLink';

const MySolitoLinkMeta: ComponentMeta<typeof SolitoLink> = {
  title: 'stories/SolitoLink',
  component: SolitoLink,
  argTypes: {
    // onPress: { action: 'pressed the button' },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'],
    },
  },
  args: {
    text: `I'm the SolitoLink`,
    size: '2xl',
  },
};

export default MySolitoLinkMeta;

export { SolitoLink };
