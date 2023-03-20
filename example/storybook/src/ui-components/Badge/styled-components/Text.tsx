import { Text } from 'react-native';
import { styled } from '@gluestack-ui/styled';

export default styled(
  Text,
  {
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: '$medium',
    fontFamily: '$body',
    // fontFamily: '$heading',
    color: '$textLight800',
    textTransform: 'uppercase',
    letterSpacing: '$md',
    _dark: {
      color: '$textDark100',
    },
  },
  { ancestorStyle: ['_text'] }
);
