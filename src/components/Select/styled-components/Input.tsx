import { styled } from '@gluestack-style/react';
import { TextInput } from 'react-native';

export default styled(
  TextInput,
  {
    _web: {
      w: '$full',
    },
    flex: 1,
    h: '100%',
    color: '$textLight.900',
    props: {
      placeholderTextColor: '$textLight.500',
    },
    _dark: {
      color: '$textDark.50',
      props: {
        placeholderTextColor: '$textDark.400',
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
