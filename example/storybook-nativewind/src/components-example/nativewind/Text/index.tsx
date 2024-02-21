import React from 'react';
import { tva } from '@gluestack-ui/nativewind-utils';
import { Text as RNText } from 'react-native';

const textStyle = tva({
  base: 'text-typography-700 font-normal font-body',

  variants: {
    isTruncated: {
      true: 'web:truncate',
    },
    bold: {
      true: 'font-bold',
    },
    underline: {
      true: 'underline',
    },
    strikeThrough: {
      true: 'line-through',
    },
    size: {
      '2xs': 'text-2xs',
      'xs': 'text-xs',
      'sm': 'text-sm',
      'md': 'text-md',
      'lg': 'text-lg',
      'xl': 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
      '4xl': 'text-4xl',
      '5xl': 'text-5xl',
      '6xl': 'text-6xl',
    },
    sub: {
      true: 'text-xs',
    },
    italic: {
      true: 'italic',
    },
    highlight: {
      true: 'bg-yellow-500',
    },
  },
});

const Text = ({
  className,
  isTruncated,
  bold,
  underline,
  strikeThrough,
  size = 'md',
  sub,
  italic,
  highlight,
  ...props
}: any) => {
  return (
    <RNText
      className={textStyle({
        isTruncated,
        bold,
        underline,
        strikeThrough,
        size,
        sub,
        italic,
        highlight,
        class: className,
      })}
      {...props}
    />
  );
};

Text.displayName = 'Text';

export { Text };
