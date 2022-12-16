import { styled } from '@gluestack/ui-styled';
import { View } from 'react-native';

export default styled(
  View,
  {
    baseStyle: {
      style: {
        py: '$1',
        px: '$2',
        shadow: '$6',
        rounded: 'sm',
        // _text: {
        //   fontSize: 'sm',
        //   color: `text50`,
        // },
        // @ts-ignore
        bg: `muted800`,
        // _dark: {
        //   bg: `muted50`,
        //   _text: {
        //     color: `text900`,
        //   },
        // },
      },
    },
  },
  {
    // descendentStyle: ['_text'],
  }
);
