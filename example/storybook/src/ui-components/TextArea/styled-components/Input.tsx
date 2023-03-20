import { styled } from '../../styled';
import { TextInput } from 'react-native';

export default styled(
  TextInput,
  {
    p: '$2',
    // @ts-ignore
    multiline: true,
    textAlignVertical: 'top',
    h: 100,
    w: 300,
    placeholderTextColor: '$red800',
    outlineColor: '$primary600',
  },
  { ancestorStyle: ['_input'] }
);
