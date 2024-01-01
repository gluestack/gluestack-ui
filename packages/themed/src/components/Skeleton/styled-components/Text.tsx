import { styled } from '@gluestack-style/react';
import { Root as StyledVStack } from '../../VStack/styled-components';

export default styled(
  StyledVStack,
  {},
  {
    componentName: 'SkeletonText',
    resolveProps: ['gap'],
    ancestorStyle: ['_skeletonText'],
    descendantStyle: ['_skeleton', '_highlight'],
  } as const,
  {}
);
