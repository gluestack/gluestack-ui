import { createLink } from '@gluestack-ui/link';
import { Pressable, Text } from 'react-native';
import {
  tva,
  withStyleContextAndStates,
  useStyleContext,
  // withStyleContext,
} from '@gluestack-ui/nativewind-utils';
import React from 'react';

export const UILink = createLink({
  Root: withStyleContextAndStates(Pressable),
  Text: Text,
});

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
    const {} = useStyleContext();

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
