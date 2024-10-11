//@ts-nocheck
import { styled } from '@gluestack-style/react';
import { LI as LITemp } from '@expo/html-elements';

const LI = LITemp as any;

export default styled(
  LI,
  {
    display: 'flex',
    flexDirection: 'row',
    color: '$textLight700',
    fontSize: '$md',
    fontWight: '$normal',
    lineHeight: '$md',
    fontFamily: '$body',

    _dark: {
      color: '$textDark300',
    },
  },
  {}
);
