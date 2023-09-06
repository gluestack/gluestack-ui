import { View } from 'react-native';
import { styled } from '../../styled';

export default styled(
  View,
  {
    width: '$full',
    height: '$full',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  {
    componentName: 'SelectActionsheet',
  } as const
);
