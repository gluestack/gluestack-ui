import { styled } from '@dank-style/react';
import { View } from 'react-native';

const Toast = styled(
  View,
  {
    p: '$2',
    // multiline: true,
    // textAlignVertical: 'top',
    // w: 400,
    // w: 300,
    outlineColor: '$primary600',
  },
  {}
);

export { Toast as Root };
export { default as Title } from './Title';
export { default as Description } from './Description';
export default Toast;
