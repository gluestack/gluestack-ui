import { styled } from '@gluestack-style/react';
import { Table } from '@expo/html-elements';

export default styled(
  Table,
  {},
  {
    componentName: 'Table',
    ancestorStyle: ['_table'],
  } as const,
  {}
);
