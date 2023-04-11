import { styled } from '../../styled';
import { View } from 'react-native';

export default styled(
  View,
  {
    height: '$1',
    width: '$12',
    bg: '$backgroundLight400',
    rounded: '$full',
    _dark: {
      bg: '$backgroundDark500',
    },
  },
  {}
);
