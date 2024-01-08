import { styled } from '@gluestack-style/react';
import { TBody } from '@expo/html-elements';

export default styled(
  TBody,
  {},
  {
    componentName: 'TableBody',
    ancestorStyle: ['_body'],
    descendantStyle: ['_row', '_data'],
  } as const,
  {}
);
