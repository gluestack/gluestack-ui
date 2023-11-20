import { styled } from '@gluestack-style/react';
import { Caption } from '@expo/html-elements';

export default styled(
  Caption,
  {},
  {
    componentName: 'TableCaption',
    ancestorStyle: ['_caption'],
  } as const,
  {}
);
