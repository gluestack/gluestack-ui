import { config } from '../ui.config';
import { Text } from 'react-native';
import { styled } from '@gluestack/ui-styled';

export default styled(
  Text,
  {
    baseStyle: {
      style: { color: '$text900', ml: '$2' },
      colorMode: {
        dark: {
          style: {
            color: '$text50',
          },
        },
      },
    },
  },
  {
    ancestorStyle: ['_text'],
  },
  config
);
