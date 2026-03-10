'use client';
import { createLink } from '@gluestack-ui/core/link/creator';
import { Pressable } from 'react-native';
import { Text } from 'react-native';

import { tva } from '@gluestack-ui/utils/nativewind-utils';
import { withStyleContext } from '@gluestack-ui/utils/nativewind-utils';
import { cssInterop } from 'nativewind';
import type { VariantProps } from '@gluestack-ui/utils/nativewind-utils';

import React from 'react';
export const UILink = createLink({
  Root: withStyleContext(Pressable),
  Text: Text,
});

cssInterop(UILink, { className: 'style' });
cssInterop(UILink.Text, { className: 'style' });

const linkStyle = tva({
  base: 'group/link web:outline-0 data-[disabled=true]:web:cursor-not-allowed data-[focus-visible=true]:web:ring-2 data-[focus-visible=true]:web:ring-indicator-primary data-[focus-visible=true]:web:outline-0 data-[disabled=true]:opacity-4 ',
});

const linkTextStyle = tva({
  base: 'underline text-primary data-[hover=true]:text-primary/80 data-[hover=true]:no-underline data-[active=true]:text-destructive/80 font-normal font-body web:font-sans web:tracking-sm web:my-0 web:bg-transparent web:border-0 web:box-border web:inline web:list-none web:m-0 web:p-0 web:relative web:text-start web:whitespace-pre-wrap web:break-words',

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
      'md': 'text-base',
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

type ILinkProps = React.ComponentProps<typeof UILink> &
  VariantProps<typeof linkStyle> & { className?: string };

const Link = React.forwardRef<React.ComponentRef<typeof UILink>, ILinkProps>(
  function Link({ className, ...props }, ref) {
    return (
      <UILink
        ref={ref}
        {...props}
        className={linkStyle({ class: className })}
      />
    );
  }
);

type ILinkTextProps = React.ComponentProps<typeof UILink.Text> &
  VariantProps<typeof linkTextStyle> & { className?: string };

const LinkText = React.forwardRef<
  React.ComponentRef<typeof UILink.Text>,
  ILinkTextProps
>(function LinkText({ className, size = 'md', ...props }, ref) {
  return (
    <UILink.Text
      ref={ref}
      {...props}
      className={linkTextStyle({
        class: className,
        size,
      })}
    />
  );
});

Link.displayName = 'Link';
LinkText.displayName = 'LinkText';

export { Link, LinkText };
