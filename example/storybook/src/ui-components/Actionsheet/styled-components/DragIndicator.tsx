import { styled } from '../../styled';
import { View } from 'react-native';

export default styled(
  View,
  {
    height: '$1',
    width: '$12',
    rounded: '$full',
    bg: '$backgroundLight400',
    _dark: {
      bg: '$backgroundDark500',
    },
  },
  {}
);
