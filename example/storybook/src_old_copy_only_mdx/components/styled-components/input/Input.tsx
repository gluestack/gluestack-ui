import { styled } from '@dank-style/react';
import { TextInput } from 'react-native';

export default styled(
  TextInput,
  {
    // px: '8px',

    color: '$textLight900',

    fontSize: '$sm',
    _dark: {
      color: '$textDark700',
    },
  },
  { ancestorStyle: ['_input'], resolveProps: ['placeholderTextColor'] }
);
