import { View } from 'react-native';
import { styled } from '../../styled';

export default styled(
  View,
  {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    mr: 12,
  },
  { ancestorStyle: ['_icon'] }
);
