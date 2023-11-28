import { Text } from 'react-native';
import { styled } from '../../styled';

export default styled(
  Text,

  {
    _dark: {
      color: '$textDark200',
    },
    _light: {
      color: '$textLight700',
    },
  },

  { ancestorStyle: ['_contentText'] }
);
