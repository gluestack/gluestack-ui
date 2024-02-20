import { createLink } from '@gluestack-ui/link';
import { Pressable, Text, Platform } from 'react-native';
import {
  tva,
  withStyleContextAndStates,
  withStyleContext,
} from '@gluestack-ui/nativewind-utils';
import React from 'react';
import { cssInterop } from 'nativewind';
export const UILink = createLink({
  // @ts-ignore
  Root:
    Platform.OS === 'web'
      ? withStyleContext(Pressable)
      : withStyleContextAndStates(Pressable),
  Text: Text,
});

cssInterop(UILink, { className: 'style' });
cssInterop(UILink.Text, { className: 'style' });

const linkStyle = tva({
  base: 'web:outline-0 web:disabled:cursor-not-allowed web:focus-visible:outline-2 web:focus-visible:outline-primary-700 web:focus-visible:outline',
});

const linkTextStyle = tva({
  base: 'underline text-info-700 hover:text-info-600 hover:no-underline active:text-info-700 disabled:opacity-40',
});

export const Link = React.forwardRef(({ className, ...props }: any, ref) => {
  return (
    <UILink
      ref={ref}
      {...props}
      className={linkStyle({ class: className })}
      context={{}}
    />
  );
});

export const LinkText = React.forwardRef(
  ({ className, ...props }: any, ref) => {
    return (
      <UILink.Text
        ref={ref}
        {...props}
        className={linkTextStyle({
          class: className,
        })}
      />
    );
  }
);
