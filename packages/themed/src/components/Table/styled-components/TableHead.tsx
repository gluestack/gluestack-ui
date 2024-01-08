import { styled } from '@gluestack-style/react';
import { THead } from '@expo/html-elements';

export default styled(
  THead,
  {},
  {
    componentName: 'TableHead',
    descendantStyle: ['_headerText'],
    ancestorStyle: ['_head'],
  } as const,
  {}
);
