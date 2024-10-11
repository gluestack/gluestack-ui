import { styled } from '@gluestack-style/react';
import { Header } from '@expo/html-elements';
export default styled(
  Header,
  {
    fontSize: '$md',
    lineHeight: '$md',
    fontWeight: '$bold',
    fontFamily: '$heading',
    color: '$textLight900',
    // w: 239,
    p: 14,
    textTransform: 'uppercase',

    _dark: {
      // @ts-ignore
      color: '$textDark50',
    },
  },
  {}
);
