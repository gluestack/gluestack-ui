import { styled } from '../../styled';
import { ActivityIndicator } from 'react-native';

export default styled(
  ActivityIndicator,
  {
    props: {
      color: '$white',
    },
    alignSelf: 'center',
  },
  {
    componentName: 'ButtonSpinner',
    ancestorStyle: ['_spinner'],
    resolveProps: ['color'],
  }
);
