import { config } from '../ui.config';
import { styled } from '@gluestack/ui-styled';
import { TextInput } from 'react-native';

export default styled(
  TextInput,
  {
    baseStyle: {
      style: {
        fontSize: 16,
        color: '$text900',
      },
      colorMode: {
        dark: {
          style: {
            color: '$text50',
          },
        },
      },
    },
  },
  { ancestorStyle: ['_itemList'] },
  config
);
