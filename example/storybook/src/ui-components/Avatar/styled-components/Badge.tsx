import { View } from 'react-native';
import { styled } from '../../styled';

export default styled(
  View,
  {
    w: 20,
    h: 20,
    bg: '$green500',
    borderRadius: 9999,
    position: 'absolute',
    right: 0,
    bottom: 0,
    borderColor: 'white',
    borderWidth: 2,
  },
  { ancestorStyle: ['_badge'] }
);
