import { styled } from '@dank-style/react';
import { TextInput } from 'react-native';

const Input: any = styled(
  TextInput,
  {
    baseStyle: {
      style: {
        px: '$4',
        py: '$2',
        color: '$gray500',
        fontSize: 12,
        borderColor: '$gray300',
        borderWidth: '$1',
        borderRadius: '$md',
      },
      colorMode: {
        dark: {
          style: {
            color: '$lightText',
          },
        },
      },
    },
  },
  { ancestorStyle: ['_input'], resolveProps: ['placeholderTextColor'] }
);

export { Input as Root };
export { default as Icon } from './Icon';
export { default as Group } from './Group';
