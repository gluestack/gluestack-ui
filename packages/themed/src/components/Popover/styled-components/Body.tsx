import { ScrollView } from 'react-native';
import { styled } from '@gluestack-style/react';

export default styled(
  ScrollView,
  {
    p: '$4',
    pt: '$2',
  },
  {
    componentName: 'PopoverBody',
  } as const
);
