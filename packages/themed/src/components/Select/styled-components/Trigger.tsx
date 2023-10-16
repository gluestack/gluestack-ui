import { styled } from '@gluestack-style/react';
import { Pressable } from 'react-native';

export default styled(
  Pressable,
  {},

  {
    componentName: 'SelectTrigger',
    descendantStyle: ['_input', '_icon'],
  } as const
);
