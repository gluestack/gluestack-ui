import { styled } from '@gluestack-style/react';
import { View } from 'react-native';

export default styled(
  View,
  {
    bg: '$primary.600',
    _dark: {
      bg: '$primary.400',
    },
    h: '$full',
    borderRadius: '$full',
  },
  { ancestorStyle: ['_filledTrack'] }
);
