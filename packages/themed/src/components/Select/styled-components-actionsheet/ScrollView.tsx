import { ScrollView } from '../../ScrollView';
import { styled } from '@gluestack-style/react';

export default styled(
  ScrollView,
  {
    w: '$full',
    h: 'auto',
  },
  {
    componentName: 'SelectActionsheetScrollView',
  } as const
);
