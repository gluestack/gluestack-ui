import type { ComponentMeta } from '@storybook/react-native';
import Box from './Box';
import BoxWithRef from './BoxWithRef';

const BoxMeta: ComponentMeta<typeof Box> = {
  title: 'stories/LAYOUT/Box',
  component: Box,

  args: { bg: 'red500', w: 100, h: 100 },
};

BoxWithRef.parameters = {
  controls: {
    exclude: /.*/g,
  },
};

export default BoxMeta;

export { Box };

// export { BoxWithRef };
