import { styled } from '../../styled';
import { TextInput } from 'react-native';

export default styled(
  TextInput,
  {
    p: '$2',
    multiline: true,
    textAlignVertical: 'top',
    h: '100%',
    color: '$textLight900',
    props: {
      placeholderTextColor: '$textLight400',
      selectionColor: '$primary400',
    },
    _dark: {
      color: '$textDark50',
      props: {
        placeholderTextColor: '$textDark600',
      },
    },

    outlineColor: '$primary600',
    pb: '$4',
  },
  {
    ancestorStyle: ['_input'],
    resolveProps: ['placeholderTextColor', 'selectionColor'],
  },
  {
    propertyTokenMap: {
      placeholderTextColor: 'colors',
      selectionColor: 'colors',
    },
  }
);
