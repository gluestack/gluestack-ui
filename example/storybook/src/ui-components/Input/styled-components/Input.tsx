import { styled } from '../../styled';
import { TextInput } from 'react-native';

export default styled(
  TextInput,
  {
    color: '$textLight900',
    w: '$full',
    _ios: {
      mb: 6,
    },
    _dark: {
      color: '$textDark50',
    },
  },
  { ancestorStyle: ['_input'], resolveProps: ['placeholderTextColor'] },
  {
    propertyTokenMap: {
      placeholderTextColor: 'colors',
    },
  }
);
