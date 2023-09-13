import { View } from 'react-native';
import { styled } from '@gluestack-style/react';

export default styled(
  View,
  {
    px: '$4',
    paddingTop: '$4',
    paddingBottom: '$2',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  {
    componentName: 'ModalHeader',
  } as const
);
