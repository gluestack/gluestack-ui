import { styled } from '@gluestack-style/react';
import { H2 } from '@expo/html-elements';

export default styled(
  H2,
  {
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 36,
    color: '$textLight800',
    fontFamily: '$heading',
    _dark: {
      color: '$textDark100',
    },
  },
  {}
);
