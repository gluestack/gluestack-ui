import { ScrollView } from 'react-native';
import { styled } from '@gluestack-style/react';

export default styled(
  ScrollView,
  {
    w: '$full',
    h: 'auto',
  },
  {
    componentName: 'ActionsheetScrollView',
  } as const
);
