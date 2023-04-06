import { styled } from '../../styled';
import { Pressable } from 'react-native';

export default styled(
  Pressable,
  {
    justifyContent: 'center',
    alignItems: 'center',
    _web: {
      'cursor': 'pointer',
      ':disabled': {
        cursor: 'not-allowed',
      },
    },
  },
  { descendantStyle: ['_icon'] }
);
