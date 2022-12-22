import { Text } from 'react-native';
import { styled } from '@gluestack/ui-styled';

export default styled(
  Text,
  {
    baseStyle: {
      //@ts-ignore
      style: { color: '$text900', fontSize: '$md', fontWeight: '$normal' },
    },
  },
  { ancestorStyle: ['_text'] }
);
