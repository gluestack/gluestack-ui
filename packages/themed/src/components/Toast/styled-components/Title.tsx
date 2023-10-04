import { Text } from '../../Text';
import { styled } from '@gluestack-style/react';

export default styled(
  Text,
  {
    fontWeight: '$medium',
    props: {
      size: 'md',
    },
    color: '$textLight900',
    _dark: {
      color: '$textDark50',
    },
  },
  {
    componentName: 'ToastTitle',
    ancestorStyle: ['_title'],
  } as const
);
