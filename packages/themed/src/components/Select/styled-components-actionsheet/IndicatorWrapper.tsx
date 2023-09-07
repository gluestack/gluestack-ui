import { View } from 'react-native';
import { styled } from '../../styled';

export default styled(
  View,
  {
    py: '$1',
    w: '$full',
    alignItems: 'center',
  },
  {
    componentName: 'SelectActionsheetIndicatorWrapper',
  } as const
);
