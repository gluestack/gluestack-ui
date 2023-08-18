import { Text } from 'react-native';
import { styled } from '../../styled';

export default styled(
  Text,
  {
    flex: 1,
    color: '$textLight700',
    fontWeight: '$normal',
    fontFamily: '$body',
    fontStyle: 'normal',
    fontSize: '$md',
    lineHeight: '$md',
    _dark: {
      color: '$textDark200',
    },
  },
  { ancestorStyle: ['_text'] }
);
