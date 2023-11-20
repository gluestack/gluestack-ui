import { styled } from '@gluestack-style/react';
import { Text } from '../../Text';

export default styled(
  Text,
  {},
  {
    componentName: 'TableDataText',
    ancestorStyle: ['_dataText'],
  } as const,
  {}
);
