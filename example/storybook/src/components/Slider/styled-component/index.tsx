import { styled } from '@dank-style/react';
import { View } from 'react-native';

const Slider = styled(
  View,
  {
    baseStyle: {
      style: {
        h: 4,
        w: 800,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      },
      state: {
        disabled: {
          style: {
            opacity: 0.4,
          },
        },
      },
      platform: {
        web: {
          state: {
            disabled: {
              style: {
                // @ts-ignore
                cursor: 'not-allowed',
              },
            },
          },
        },
      },
      descendants: {},
    },
  },
  {}
);
export { Slider as Root };
export { default as Thumb } from './Thumb';
export { default as ThumbInteraction } from './ThumbInteraction';
export { default as Track } from './Track';
export { default as FilledTrack } from './FilledTrack';
