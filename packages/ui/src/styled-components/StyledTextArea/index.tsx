import { config } from '../ui.config';
import { styled } from '@gluestack/ui-styled';
import { TextInput } from 'react-native';

export default styled(
  TextInput,
  {
    baseStyle: {
      style: {
        p: '$2',
        // @ts-ignore
        multiline: true,
        textAlignVertical: 'top',
        h: '$20',
        outlineColor: '$primary600',
      },
    },
  },
  { ancestorStyle: ['_input'] },
  config
);
