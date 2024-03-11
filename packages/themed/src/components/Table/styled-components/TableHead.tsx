import { styled } from '@gluestack-style/react';
import { THead } from '@expo/html-elements';

export default styled(
  THead,
  {},
  {
    componentName: 'TableHead',
    ancestorStyle: ['_head'],
    descendantStyle: ['_headerText', '_row'],
  } as const,
  {}
);
