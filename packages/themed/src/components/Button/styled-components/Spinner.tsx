import { styled } from '../../styled';
import { ActivityIndicator } from 'react-native';

export default styled(
  ActivityIndicator,
  {},
  {
    componentName: 'Spinner',
    ancestorStyle: ['_spinner'],
    resolveProps: ['color'],
  }
);
