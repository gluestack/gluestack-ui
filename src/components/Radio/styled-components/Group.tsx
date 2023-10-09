import { styled } from '@gluestack-style/react';
import { View } from 'react-native';

export default styled(
  View,
  {
    alignItems: 'flex-start',
  },
  {
    componentName: 'RadioGroup',
    descendantStyle: ['_radio'],
  } as const
);
