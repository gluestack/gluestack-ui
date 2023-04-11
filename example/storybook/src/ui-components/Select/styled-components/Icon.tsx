import { styled } from '../../styled';
import { Pressable } from 'react-native';

export default styled(
  Pressable,
  {
    justifyContent: 'center',
    alignItems: 'center',
    _icon: {
      color: '$borderLight500',
    },
  },
  { descendantStyle: ['_icon'] }
);
