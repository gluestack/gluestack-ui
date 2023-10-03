import { ScrollView } from 'react-native';
import { styled } from '@gluestack-style/react';

export default styled(
  ScrollView,
  {
    px: '$4',
    py: '$2',
  },
  {
    componentName: 'AlertDialogBody',
  } as const
);
