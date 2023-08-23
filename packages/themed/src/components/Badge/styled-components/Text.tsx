import { Text } from 'react-native';
import { styled } from '../../styled';

export default styled(
  Text,
  {
    fontWeight: '$medium',
    fontFamily: '$body',
    textTransform: 'uppercase',
  },
  {
    componentName: 'BadgeText',
    ancestorStyle: ['_text'],
  }
);
