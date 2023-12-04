import { Text } from 'react-native';
import { styled } from '@gluestack-style/react';

export default styled(
  Text,
  {
    color: '$text.50',
    fontWeight: '$bold',
    fontFamily: '$body',
    // @ts-ignore
    fontSize: '$md',
    // @ts-ignore
    lineHeight: '$md',
  },
  {
    componentName: 'ToastTitle',
    ancestorStyle: ['_title'],
  } as const
);
