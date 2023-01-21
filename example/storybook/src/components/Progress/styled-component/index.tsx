import { styled } from '@dank-style/react';
import { View } from 'react-native';

const StyledProgress = styled(
  View,
  {
    baseStyle: {
      style: {
        bg: '$muted200',
        h: '$2',
        borderRadius: 999,
        w: '100%',
      },
      colorMode: {
        dark: {
          style: { bg: '$muted500' },
        },
      },
    },
  },
  {}
);

export { StyledProgress as Root };
export { default as FilledTrack } from './FilledTrack';
