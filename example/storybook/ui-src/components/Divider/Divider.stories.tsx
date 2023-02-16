import type { ComponentMeta } from '@storybook/react-native';
import { DividerStory as Divider } from './Divider';

const MyDividerMeta: ComponentMeta<typeof Divider> = {
  title: 'stories/DATA DISPLAY/Divider',
  component: Divider,
  argTypes: {
    onPress: { action: 'pressed the button' },
  },
  args: {
    text: 'Hello world',
  },
};

export default MyDividerMeta;

export { Divider };
