import { styled } from '../../styled';
import { Pressable } from 'react-native';

export default styled(
  Pressable,
  {
    ':focus': {
      _web: {
        outlineWidth: 0,
        boxShadow: `$cyan.400 0px 0px 0px 2px`,
      },
    },
    '_dark': {
      ':focus': {
        _web: {
          outlineWidth: 0,
          boxShadow: `$cyan.500 0px 0px 0px 2px`,
        },
      },
    },
  },
  {}
);
