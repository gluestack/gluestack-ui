import { ScrollView } from 'react-native';
import { styled } from '@gluestack-style/react';

export default styled(
  ScrollView,
  {
    px: '$4',
    paddingTop: 0,
    paddingBottom: '$2',
  },
  {
    componentName: 'ModalBody',
  } as const
);
