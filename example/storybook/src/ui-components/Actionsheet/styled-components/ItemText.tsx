import { Text } from 'react-native';
import { styled } from '@gluestack-ui/styled';

export default styled(
  Text,
  {
    color: '$textLight900',
    fontSize: '$md',
    fontWeight: '$normal',
    _dark: {
      color: '$textDark50',
    },
  },
  { ancestorStyle: ['_text'] }
);
