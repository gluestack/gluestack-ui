import { styled } from '@dank-style/react';
import { TextInput } from 'react-native';

export default styled(
  TextInput,
  {
    px: '$4',
    py: '$2',
    color: '$gray500',
    fontSize: 12,
    _dark: {
      color: '$lightText',
    },
  },
  { ancestorStyle: ['_input'], resolveProps: ['placeholderTextColor'] }
);
