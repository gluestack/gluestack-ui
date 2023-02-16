import { styled } from '@dank-style/react';
import { TextInput } from 'react-native';

export default styled(
  TextInput,
  {
    // // fontSize: 16,

    // fontSize: '$2xl',
    // lineHeight: '$xl',

    placeholderTextColor: '$textLight400',

    _dark: {
      placeholderTextColor: '$textDark400',
    },
  },
  { ancestorStyle: ['_itemList'] }
);
