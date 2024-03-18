import { createStyle } from '@gluestack-style/react';

export const RangeSliderRightThumb = createStyle({
  'bg': '$primary500',
  '_dark': {
    bg: '$primary400',
  },
  'position': 'absolute',
  'borderRadius': '$full',
  ':focus': {
    bg: '$primary600',
    _dark: {
      bg: '$primary300',
    },
  },
  ':active': {
    bg: '$primary600',
    _dark: {
      bg: '$primary300',
    },
  },
  ':hover': {
    bg: '$primary600',
    _dark: {
      bg: '$primary300',
    },
  },
  ':disabled': {
    bg: '$primary500',
    _dark: {
      bg: '$primary500',
    },
  },
  '_web': {
    //@ts-ignore
    'cursor': 'pointer',
    ':active': {
      outlineWidth: 4,
      outlineStyle: 'solid',
      outlineColor: '$primary400',
      _dark: {
        outlineColor: '$primary500',
      },
    },
    ':focus': {
      outlineWidth: 4,
      outlineStyle: 'solid',
      outlineColor: '$primary400',
      _dark: {
        outlineColor: '$primary500',
      },
    },
  },
  'defaultProps': {
    hardShadow: '1',
  },
});
