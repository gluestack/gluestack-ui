import { Text } from 'react-native';
import { styled } from '@gluestack-style/react';

export default styled(
  Text,
  {
    color: '$text.50',
    fontWeight: '$bold',
    fontFamily: '$body',
    fontSize: '$md',
    lineHeight: '$md',
  },
  {
    componentName: 'ToastTitle',
    ancestorStyle: ['_title'],
  } as const
);
