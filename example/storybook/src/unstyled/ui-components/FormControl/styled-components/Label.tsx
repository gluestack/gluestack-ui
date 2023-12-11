import { styled } from '../../styled';
import { View } from 'react-native';

export default styled(
  View,
  {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    mb: '$1',
  },
  { descendantStyle: ['_labelText'] }
);
