import { styled } from '@gluestack-style/react';
import { H1 } from '@expo/html-elements';

export default styled(
  H1,
  {
    fontWeight: '700',
    fontSize: 36,
    lineHeight: 44,
    color: '$textLight900',
    fontFamily: '$heading',

    _dark: {
      color: '$textDark50',
    },
  },
  {}
);
