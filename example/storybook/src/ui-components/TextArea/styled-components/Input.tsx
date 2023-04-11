import { styled } from '../../styled';
import { TextInput } from 'react-native';

export default styled(
  TextInput,
  {
    p: '$2',
    //@ts-ignore
    multiline: true,
    color: '$textLight900',
    textAlignVertical: 'top',
    flex: 1,
    props: {
      placeholderTextColor: '$textLight400',
    },
    _dark: {
      color: '$textDark50',
      props: {
        placeholderTextColor: '$textDark600',
      },
    },
    _web: {
      'cursor': 'pointer',
      ':disabled': {
        cursor: 'not-allowed',
      },
    },
  },
  { ancestorStyle: ['_input'], resolveProps: ['placeholderTextColor'] },
  {
    propertyTokenMap: {
      placeholderTextColor: 'colors',
    },
    // aliases: {},
  }
);
