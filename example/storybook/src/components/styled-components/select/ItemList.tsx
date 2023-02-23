import { styled } from '@dank-style/react';
import { TextInput } from 'react-native';

export default styled(
  TextInput,
  {
    // // fontSize: 16,

    // fontSize: '$2xl',
    // lineHeight: '$xl',
    ':focus': {
      bg: 'transparent',
      borderWidth: '$2',
      borderColor: '$primary700',
    },
    'color': '$textLight900',

    '_dark': {
      color: '$textDark50',
    },
  },
  { ancestorStyle: ['_itemList'] }
);
