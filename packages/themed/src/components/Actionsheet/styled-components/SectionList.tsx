import { SectionList } from 'react-native';
import { styled } from '@gluestack-style/react';

export default styled(
  SectionList,
  {
    w: '$full',
    h: 'auto',
  },
  {
    componentName: 'ActionsheetSectionList',
  } as const
);
