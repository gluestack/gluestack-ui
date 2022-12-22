import { styled } from '@gluestack/ui-styled';
import { TextInput } from 'react-native';

export default styled(
  TextInput,
  {
    baseStyle: {
      style: {
        px: '$4',
        py: '$3',
        color: '$darkText',
        fontSize: 12,
      },
    },
  },
  { ancestorStyle: ['_input'] }
);
