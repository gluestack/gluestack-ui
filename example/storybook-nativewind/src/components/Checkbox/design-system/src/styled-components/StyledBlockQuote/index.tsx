import { styled } from '@gluestack-style/react';
import { BlockQuote } from '@expo/html-elements';

export default styled(
  BlockQuote,
  {
    // @ts-ignore
    fontWeight: '$normal',
    fontSize: '$normal',
    lineHeight: '$md',
    color: '$textLight800',
    fontFamily: '$body',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '$primary200',
    borderLeftWidth: 8,
    bg: '$primary50_alpha_50',
    py: 24.5,
    pr: 24,
    pl: 32,
    _dark: {
      bg: '$backgroundDark800',
      // @ts-ignore
      color: '$textDark50',
      borderColor: '$backgroundDark700',
      borderLeftColor: '$primary200',
    },
  },
  {}
);
