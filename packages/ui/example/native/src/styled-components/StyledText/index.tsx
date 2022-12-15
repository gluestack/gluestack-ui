import { Text } from 'react-native';
import { styled } from '@gluestack/styled';

export default styled(
  Text,
  {
    baseStyle: {
      style: {
        color: '$text.900',
        //@ts-ignore

        fontWeight: '$normal',
        fontFamily: '$body',
        fontStyle: 'normal',
        //@ts-ignore

        fontSize: '$sm',
        //@ts-ignore

        letterSpacing: '$md', //@ts-ignore

        lineHeight: '$lg', //@ts-ignore
      },
    },
    variants: {
      modalHeader: {
        style: {
          //@ts-ignore
          fontSize: '$md',
          //@ts-ignore
          fontWeight: '$semibold',
          //@ts-ignore
          lineHeight: '$sm',
        },
      },
    },
  },
  {}
);
