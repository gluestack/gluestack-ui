import { styled } from '@gluestack-style/react';
import { TextInput } from 'react-native';

export default styled(
  TextInput,
  {
    bg: 'transparent',
    flex: 1,
    w: '$full',
    h: '$full',
    py: '$2',
    px: '$3',
    color: '$text.900',
    props: {
      placeholderTextColor: '$text.400',
    },
    _dark: {
      color: '$text.50',
      props: {
        placeholderTextColor: '$text.600',
      },
    },
    _web: {
      'outlineWidth': '$0',
      'cursor': 'text',
      ':disabled': {
        cursor: 'not-allowed',
      },
    },
  },
  {
    componentName: 'InputField',
    ancestorStyle: ['_input'],
    resolveProps: ['placeholderTextColor'],
  } as const,
  {
    propertyTokenMap: {
      placeholderTextColor: 'colors',
    },
  }
);
