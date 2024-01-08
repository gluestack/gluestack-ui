import { styled } from '@gluestack-style/react';
import { TR } from '@expo/html-elements';

export default styled(
  TR,
  {},
  {
    componentName: 'TableRow',
    descendantStyle: ['_dataText'],
    ancestorStyle: ['_row'],
  } as const,
  {}
);
