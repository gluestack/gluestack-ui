import { styled } from '../../styled';
import { View } from 'react-native';

export default styled(
  View,
  {
    bg: '$backgroundLight200',
    borderRadius: '$full',
    w: '100%',
    variants: {
      size: {
        xs: {
          h: '$1',
          _filledTrack: {
            h: '$1',
          },
        },
        sm: {
          h: '$2',
          _filledTrack: {
            h: '$2',
          },
        },
        md: {
          h: '$3',
          _filledTrack: {
            h: '$3',
          },
        },
        lg: {
          h: '$4',
          _filledTrack: {
            h: '$4',
          },
        },
      },
    },
    _dark: {
      bg: '$backgroundDark800',
    },
    defaultProps: {
      size: 'md',
    },
  },
  {
    descendantStyle: ['_filledTrack'],
  }
);
