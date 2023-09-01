import { styled } from '../../styled';
import { View } from 'react-native';

export default styled(
  View,
  {
    'bg': '$primary500',
    '_dark': {
      bg: '$primary400',
    },
    ':focus': {
      bg: '$primary600',
      _dark: {
        bg: '$primary300',
      },
    },
    ':active': {
      bg: '$primary600',
      _dark: {
        bg: '$primary300',
      },
    },
    ':hover': {
      bg: '$primary600',
      _dark: {
        bg: '$primary300',
      },
    },
  },
  {
    componentName: 'SliderFilledTrack',
    ancestorStyle: ['_filledTrack'],
  } as const
);
