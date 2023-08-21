import { styled } from '../../styled';
import { View } from 'react-native';

export default styled(
  View,
  {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    // bg: 'radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0) 100%) , rgba(255, 255, 255, 0.04);',
    rounded: '$full',
  },
  { descendantStyle: ['_tab'] }
);
