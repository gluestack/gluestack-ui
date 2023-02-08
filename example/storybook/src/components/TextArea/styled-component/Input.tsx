import { styled } from '@dank-style/react';
import { TextInput } from 'react-native';

export default styled(
  TextInput,
  {
    p: '$2',
    multiline: true,
    textAlignVertical: 'top',
    h: 100,
    w: 300,
    outlineColor: '$primary600',
  },
  { ancestorStyle: ['_input'] }
);
