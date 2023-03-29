import { styled } from '../../styled';
import { TextInput } from 'react-native';

export default styled(
  TextInput,
  {
    p: '$2',
    // @ts-ignore
    multiline: true,
    textAlignVertical: 'top',
    h: '100%',
  },
  { ancestorStyle: ['_input'], resolveProps: ['placeholderTextColor'] },
  {
    propertyTokenMap: {
      placeholderTextColor: 'colors',
    },
    // aliases: {},
  }
);
