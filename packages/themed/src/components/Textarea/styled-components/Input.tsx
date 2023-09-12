import { styled } from '../../styled';
import { TextInput } from 'react-native';

export default styled(
  TextInput,
  {
    p: '$2',
    color: '$textLight900',
    textAlignVertical: 'top',
    flex: 1,
    props: {
      // @ts-ignore
      multiline: true,
      placeholderTextColor: '$textLight500',
    },
    _dark: {
      color: '$textDark50',
      props: {
        placeholderTextColor: '$textDark400',
      },
    },
    _web: {
      'cursor': 'text',
      ':disabled': {
        cursor: 'not-allowed',
      },
    },
  },
  {
    componentName: 'TextareaInput',
    ancestorStyle: ['_input'],
    resolveProps: ['placeholderTextColor'],
  } as const,
  {
    propertyTokenMap: {
      placeholderTextColor: 'colors',
    },
  }
);
