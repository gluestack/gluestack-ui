import { styled } from '@gluestack-style/react';
import { TextInput } from 'react-native';

export default styled(
  TextInput,
  {
    px: '$4',
    py: '$3',
    color: '$darkText',
    fontSize: 16,

    _dark: {
      color: '$lightText',
    },
  },
  { ancestorStyle: ['_input'], resolveProps: ['placeholderTextColor'] }
);
