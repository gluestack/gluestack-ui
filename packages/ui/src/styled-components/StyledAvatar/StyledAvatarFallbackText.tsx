import { Text } from 'react-native';
import { styled } from 'dank-style';

export default styled(
  Text,
  {
    baseStyle: {
      style: {
        color: 'white',
        // @ts-ignore
        fontWeight: 'semibold',
        fontSize: '$xl',
        display: 'flex',
        overflow: 'hidden',
        textTransform: 'uppercase',
      },
    },
  },
  { ancestorStyle: ['_text'], DEBUG: 'BGBGBG' }
);
