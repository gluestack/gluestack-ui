import { Text } from 'react-native';
import { styled } from '@gluestack/ui-styled';

export default styled(
  Text,
  {
    baseStyle: {
      style: {
        color: 'white',
        // @ts-ignore
        fontWeight: 'semibold',
        fontSize: 22,
        w: '100%',
        h: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        overflow: 'hidden',
        textTransform: 'uppercase',
      },
    },
  },
  { ancestorStyle: ['_text'] }
);
