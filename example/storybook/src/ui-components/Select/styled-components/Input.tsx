import { styled } from '../../styled';
import { TextInput } from 'react-native';

export default styled(
  TextInput,
  {
    flex: 1,
    h: '$full',
    _web: {
      w: '$full',
    },

    color: '$textLight900',
    props: {
      placeholderTextColor: '$textLight500',
    },
    _dark: {
      color: '$textDark50',
      props: {
        placeholderTextColor: '$textDark400',
      },
    },
  },
  { ancestorStyle: ['_input'], resolveProps: ['placeholderTextColor'] },
  {
    propertyTokenMap: {
      placeholderTextColor: 'colors',
    },
  }
);
