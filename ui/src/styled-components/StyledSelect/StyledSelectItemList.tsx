import { config } from '../ui.config';
import { styled } from '@gluestack/ui-styled';
import { TextInput } from 'react-native';

export default styled(
  TextInput,
  {
    baseStyle: {
      style: {
        fontSize: 12,
      },
    },
  },
  { ancestorStyle: ['_itemList'] },
  config
);
