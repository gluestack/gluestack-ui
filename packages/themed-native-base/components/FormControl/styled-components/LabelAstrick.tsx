// import { Text } from '@gluestack-ui/ui';
import { styled } from '@gluestack-style/react';
import { Text } from 'react-native';
export default styled(
  Text,
  {
    color: '$error.600',
    _dark: {
      color: '$error.500',
    },
  },
  {
    componentName: 'FormControlErrorText',
    ancestorStyle: ['_labelAstrick'],
  } as const
);
