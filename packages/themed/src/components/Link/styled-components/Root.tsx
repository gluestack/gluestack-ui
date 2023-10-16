import { styled } from '@gluestack-style/react';
import { Pressable } from 'react-native';

export default styled(
  Pressable,

  {},
  {
    componentName: 'Link',
    descendantStyle: ['_text'],
  } as const
);
