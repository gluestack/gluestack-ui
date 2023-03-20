import { styled } from '../../styled';
import { TextInput } from 'react-native';

export default styled(
  TextInput,
  {
    // px: '8px',

    color: '$textLight900',
    w: '$full',
    _ios: {
      mb: 6,
    },
    defaultProps: {},
    placeholderTextColor: '$textLight600',

    fontSize: '$sm',

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
