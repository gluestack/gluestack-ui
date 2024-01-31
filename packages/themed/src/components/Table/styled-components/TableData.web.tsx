import { styled } from '@gluestack-style/react';
import { TD } from '@expo/html-elements';

export default styled(
  TD,
  {},
  {
    componentName: 'TableData',
    ancestorStyle: ['_data'],
  } as const,
  {}
);
