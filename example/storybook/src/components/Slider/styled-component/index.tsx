import { styled } from '@dank-style/react';
import { View } from 'react-native';

const Slider = styled(
  View,
  {
    'h': 4,
    'w': 800,
    'alignItems': 'center',
    'justifyContent': 'center',
    'position': 'relative',

    ':disabled': {
      opacity: 0.4,
    },

    '_web': {
      ':disabled': {
        cursor: 'not-allowed',
      },
    },
  },
  {}
);
export { Slider as Root };
export { default as Thumb } from './Thumb';
export { default as ThumbInteraction } from './ThumbInteraction';
export { default as Track } from './Track';
export { default as FilledTrack } from './FilledTrack';
