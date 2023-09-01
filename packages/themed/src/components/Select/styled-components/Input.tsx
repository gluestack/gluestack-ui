//@ts-nocheck
import { styled } from '../../styled';
import { TextInput } from 'react-native';

export default styled(
  TextInput,
  {
    _web: {
      w: '$full',
    },
    flex: 1,
    h: '100%',
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
  {
    componentName: 'SelectInput',
    ancestorStyle: ['_input'],
    resolveProps: ['placeholderTextColor'],
  } as const,
  {
    propertyTokenMap: {
      placeholderTextColor: 'colors',
    },
  }
);
