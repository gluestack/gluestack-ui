import { Text, View } from 'react-native';
import { styled } from '@gluestack/ui-styled';

export default styled(
  View,
  {
    baseStyle: {
      style: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        bg: '$green.100',
      },
    },
    // variants: {
    //   'subtle': {
    //     style: {
    //       bg: '$gray.800',
    //     },
    //   },
    //   'solid': {},
    //   'left-accent': {},
    //   'top-accent': {},
    //   'outline': {},
    //   'outline-light': {},
    // },
    // defaultProps: {
    //   variant: 'subtle',
    // },
  },
  { ancestorStyle: ['_text'] }
);
