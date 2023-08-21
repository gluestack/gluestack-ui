import { styled } from '../../styled';
import { View } from 'react-native';

export default styled(
  View,
  {
    bg: '$primary500',
    borderRadius: '$full',
    _dark: {
      bg: '$primary400',
    },
  },
  { ancestorStyle: ['_filledTrack'] }
);
