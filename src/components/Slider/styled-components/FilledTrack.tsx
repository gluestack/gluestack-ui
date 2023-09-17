import { styled } from '../../styled';
import { View } from 'react-native';

export default styled(
  View,
  {
    bg: '$primary.600',
    _dark: {
      bg: '$primary.500',
    },
  },
  {
    ancestorStyle: ['_filledTrack'],
  }
);
