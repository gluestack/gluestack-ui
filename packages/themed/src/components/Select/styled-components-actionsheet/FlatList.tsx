import { FlatList } from '../../FlatList';
import { styled } from '@gluestack-style/react';

export default styled(
  FlatList,
  {
    w: '$full',
    h: 'auto',
  },
  {
    componentName: 'SelectActionsheetFlatList',
  } as const
);
