import { styled } from '@gluestack-style/react';
import { H5 } from '@expo/html-elements';

export default styled(
  H5,
  {
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 20,
    color: '$textLight800',
    fontFamily: '$heading',

    _dark: {
      color: '$textDark100',
    },
  },
  {}
);
