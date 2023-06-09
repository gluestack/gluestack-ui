import { styled } from '../../styled';
import { ActivityIndicator } from 'react-native';

export default styled(
  ActivityIndicator,
  {
    variants: {},
  },
  {
    resolveProps: ['color'],
  },
  {
    propertyTokenMap: {
      size: 'size',
    },
  }
);
