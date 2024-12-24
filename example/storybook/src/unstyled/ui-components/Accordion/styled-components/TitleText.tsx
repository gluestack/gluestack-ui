import { Text } from 'react-native';
import { styled } from '../../styled';

export default styled(
  Text,
  {
    flex: 1,
    _light: {
      color: '$textLight900',
    },
    _dark: {
      color: '$textDark50',
    },
  },
  { ancestorStyle: ['_titleText'] }
);
