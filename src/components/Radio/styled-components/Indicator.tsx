import { View } from 'react-native';
import { styled } from '../../styled';

export default styled(
  View,
  {
    borderWidth: 2,
    borderRadius: '$full',
    p: '$1',
    bg: '$muted.50',
    borderColor: '$muted.400',
    my: '0.25rem',
  },
  {
    ancestorStyle: ['_indicator'],
  }
);
