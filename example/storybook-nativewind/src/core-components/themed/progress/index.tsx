import { styled } from '@gluestack-style/react';
import { createProgress } from '@gluestack-ui/progress';
import { View } from 'react-native';
const StyledRoot = styled(
  View,
  {
    bg: '$background300',
    borderRadius: '$full',
    w: '100%',

    variants: {
      size: {
        'xs': {
          h: '$1',
          _filledTrack: {
            h: '$1',
          },
        },
        'sm': {
          h: '$2',
          _filledTrack: {
            h: '$2',
          },
        },
        'md': {
          h: '$3',
          _filledTrack: {
            h: '$3',
          },
        },
        'lg': {
          h: '$4',
          _filledTrack: {
            h: '$4',
          },
        },
        'xl': {
          h: '$5',
          _filledTrack: {
            h: '$5',
          },
        },
        '2xl': {
          h: '$6',
          _filledTrack: {
            h: '$6',
          },
        },
      },
    },

    defaultProps: {
      size: 'md',
    },
  },
  {
    descendantStyle: ['_filledTrack'],
  }
);

const StyledFilledTrack = styled(
  View,
  {
    bg: '$primary500',
    borderRadius: '$full',
  },
  {
    ancestorStyle: ['_filledTrack'],
  }
);

export const Progress = createProgress({
  Root: StyledRoot,
  FilledTrack: StyledFilledTrack,
});
export const ProgressFilledTrack = Progress.FilledTrack;
