import { FlatList } from 'react-native';
import { styled } from '@gluestack-style/react';

export default styled(
  FlatList,
  {},
  {
    descendantStyle: ['_text'],
  }
);
