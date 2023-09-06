import type { ComponentMeta } from '@storybook/react-native';
import Box from './Box';

const BoxMeta: ComponentMeta<typeof Box> = {
  title: 'stories/LAYOUT/Box',
  component: Box,

  args: { bg: 'red500', w: 100, h: 100 },
};

export default BoxMeta;

export { Box };
