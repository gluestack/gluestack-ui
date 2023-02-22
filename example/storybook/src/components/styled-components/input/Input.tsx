import { styled } from '@dank-style/react';
import { TextInput } from 'react-native';

export default styled(
  TextInput,
  {
    // px: '8px',
    flex: 1,
    w: '100%',
    h: '100%',
    color: '$textLight900',
    fontSize: '$sm',
    _ios: {
      mb: 6,
    },
    _dark: {
      color: '$textDark700',
    },
  },
  { ancestorStyle: ['_input'], resolveProps: ['placeholderTextColor'] }
);
