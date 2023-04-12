import { Text } from 'react-native';
import { styled } from '../../styled';

export default styled(
  Text,
  {
    color: '$textLight500',
    fontSize: '$sm',
    fontWeight: '$bold',
    textTransform: 'uppercase',
    p: '$3',
    _dark: {
      color: '$textDark400',
    },
  },
  {
    ancestorStyle: ['_sectionHeaderBackground'],
  }
);
