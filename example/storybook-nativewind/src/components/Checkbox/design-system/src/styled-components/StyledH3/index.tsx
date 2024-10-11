import { styled } from '@gluestack-style/react';
import { H3 } from '@expo/html-elements';

export default styled(
  H3,
  {
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 30,
    color: '$textLight800',
    fontFamily: '$heading',

    _dark: {
      color: '$textDark100',
    },
  },
  {}
);
