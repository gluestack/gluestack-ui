import { styled } from '../../styled';
import { ActivityIndicator } from 'react-native';

export default styled(
  ActivityIndicator,
  {
    props: {
      color: '$primary500',
    },
    _dark: {
      props: {
        color: '$primary400',
      },
    },
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
