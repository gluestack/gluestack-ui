import { View } from 'react-native';
import { styled } from '../../styled';

export default styled(View, {}, {
  componentName: 'Box',
  descendantStyle: ['_text'],
} as const);
