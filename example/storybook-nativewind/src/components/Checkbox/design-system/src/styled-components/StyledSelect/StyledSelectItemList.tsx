import { styled } from '@gluestack-style/react';
import { TextInput } from 'react-native';

export default styled(
  TextInput,
  {
    fontSize: 16,
    color: '$text900',

    _dark: {
      color: '$text50',
    },
  },
  { ancestorStyle: ['_itemList'] }
);
