import { View } from 'react-native';
import { styled } from '../../styled';

export default styled(
  View,
  {
    width: '$full',
    height: '$full',
  },
  {
    componentName: 'Actionsheet',
  } as const
);
