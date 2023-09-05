import { View } from 'react-native';
import { styled } from '../../styled';

export default styled(
  View,
  {
    alignItems: 'center',
    justifyContent: 'center',
  },
  {
    componentName: 'Center',
  } as const
);
