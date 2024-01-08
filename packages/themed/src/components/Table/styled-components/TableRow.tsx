import { styled } from '@gluestack-style/react';
import { TR } from '@expo/html-elements';

export default styled(
  TR,
  {},
  {
    componentName: 'TableRow',
    ancestorStyle: ['_row'],
    descendantStyle: ['_dataText', '_headerText'],
  } as const,
  {}
);
