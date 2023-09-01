import { styled } from '../../styled';
import { Text } from 'react-native';

export default styled(
  Text,
  {
    fontFamily: '$body',
  },
  {
    componentName: 'TabsTabTitle',
    ancestorStyle: ['_title'],
  } as const
);
