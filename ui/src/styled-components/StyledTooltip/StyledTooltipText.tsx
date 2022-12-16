import { Text } from 'react-native';
import { styled } from '@gluestack/ui-styled';

export default styled(
  Text,
  {
    baseStyle: {
      style: {
        // @ts-ignore
        fontSize: 'sm',
        color: `text50`,
      },
    },
  },
  {
    // ancestorStyle: ['_text']
  }
);
