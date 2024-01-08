import { styled } from '@gluestack-style/react';
import { TH } from '@expo/html-elements';

export default styled(
  TH,
  {},
  {
    componentName: 'TableHeader',
    ancestorStyle: ['_headerText'],
  } as const,
  {}
);
