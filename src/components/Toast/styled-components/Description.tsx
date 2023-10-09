import { Text } from 'react-native';
import { styled } from '@gluestack-style/react';

export default styled(
  Text,
  {
    color: '$text.50',
    fontWeight: '$normal',
    fontFamily: '$body',
    fontStyle: 'normal',
    fontSize: '$sm',
  },
  {
    componentName: 'ToastDescription',
    ancestorStyle: ['_description'],
  } as const
);
