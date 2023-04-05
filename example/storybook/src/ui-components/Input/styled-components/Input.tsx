import { styled } from '../../styled';
import { TextInput } from 'react-native';

export default styled(
  TextInput,
  {
    color: '$textLight900',
    props: {
      placeholderTextColor: '$textLight400',
    },
    // w: '$full',
    flex: 1,
    // _ios: {
    //   mb: 6,
    // },
    _dark: {
      color: '$textDark50',
      props: {
        placeholderTextColor: '$textDark600',
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
