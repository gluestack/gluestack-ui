import { styled } from '@gluestack-style/react';
import { H4 } from '@expo/html-elements';

export default styled(
  H4,
  {
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 22,
    color: '$textLight800',
    fontFamily: '$heading',

    _dark: {
      color: '$textDark100',
    },
  },
  {}
);
