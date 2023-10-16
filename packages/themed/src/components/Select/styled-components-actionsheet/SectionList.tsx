import { SectionList } from '../../SectionList';
import { styled } from '@gluestack-style/react';

export default styled(
  SectionList,
  {
    w: '$full',
    h: 'auto',
  },
  {
    componentName: 'SelectActionsheetSectionList',
  } as const
);
