import { ScrollView } from 'react-native';
import { styled } from '@gluestack-style/react';

export default styled(
  ScrollView,
  {
    padding: '$4',
  },
  {
    componentName: 'AlertDialogBody',
  } as const
);
