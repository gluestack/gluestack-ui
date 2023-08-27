import { View } from 'react-native';
import { styled } from '../../styled';

export default styled(
  View,
  {
    w: '$5',
    h: '$5',
    bg: '$success.600',
    borderRadius: '$full',
    position: 'absolute',
    right: 0,
    bottom: 0,
    borderColor: '$muted.50',
    _dark: {
      borderColor: '$muted.900',
    },
    borderWidth: 2,
    zIndex: 900,
  },
  { ancestorStyle: ['_badge'] }
);
