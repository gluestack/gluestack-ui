import { styled } from '@gluestack-style/react';
import { TFoot } from '@expo/html-elements';

export default styled(
  TFoot,
  {},
  {
    componentName: 'TableFooter',
    ancestorStyle: ['_footer'],
  } as const,
  {}
);
