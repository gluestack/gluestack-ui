import { styled } from '@gluestack-style/react';
import { TextInput } from 'react-native';

export default styled(
  TextInput,
  {
    p: '$2',
    props: {
      multiline: true,
    },
    textAlignVertical: 'top',
    h: 100,
    w: 300,
    _web: {
      outlineColor: '$primary600',
    },
  },
  { ancestorStyle: ['_input'] }
);
