import { styled } from '../../styled';
import { View } from 'react-native';

export default styled(
  View,
  {
    bg: '$primary700',
    borderRadius: 999,
    h: '$2',

    _dark: {
      bg: '$primary400',
    },
  },
  { ancestorStyle: ['_filledTrack'] }
);
