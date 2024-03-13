import React from 'react';
import { H4 } from '@expo/html-elements';
import { tva } from '@gluestack-ui/nativewind-utils/tva';
import { cssInterop } from '@gluestack-ui/nativewind-utils/cssInterop';

const headingStyle = tva({
  base: 'text-typography-900 font-bold font-heading tracking-sm my-0',
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
    sub: {
      true: 'text-xs',
    },
    italic: {
      true: 'italic',
    },
    highlight: {
      true: 'bg-yellow-500',
    },
    size: {
      '5xl': 'text-6xl',
      '4xl': 'text-5xl',
      '3xl': 'text-4xl',
      '2xl': 'text-3xl',
      'xl': 'text-2xl',
      'lg': 'text-xl',
      'md': 'text-lg',
      'sm': 'text-md',
      'xs': 'text-sm',
    },
  },
});

cssInterop(H4, { className: 'style' });

const Heading = ({ className, size = 'lg', ...props }: any) => {
  return <H4 className={headingStyle({ size, class: className })} {...props} />;
};

Heading.displayName = 'Heading';

export { Heading };
