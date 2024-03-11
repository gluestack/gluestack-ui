import { styled } from '@gluestack-style/react';
import { TFoot } from '@expo/html-elements';

export default styled(
  TFoot,
  {
    _row: {
      borderColor: '$red900',
    },
  },
  {
    componentName: 'TableFooter',
    ancestorStyle: ['_footer'],
    descendantStyle: ['_headerText', '_row'],
  } as const,
  {}
);
