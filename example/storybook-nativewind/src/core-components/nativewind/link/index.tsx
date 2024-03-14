import { createLink } from '@gluestack-ui/link';
import { Pressable, Platform } from 'react-native';
import { Text } from 'react-native';

import { tva } from '@gluestack-ui/nativewind-utils/tva';
import { withStyleContext } from '@gluestack-ui/nativewind-utils/withStyleContext';
import { withStyleContextAndStates } from '@gluestack-ui/nativewind-utils/withStyleContextAndStates';
import { cssInterop } from '@gluestack-ui/nativewind-utils/cssInterop';
import { withStates } from '@gluestack-ui/nativewind-utils/withStates';
import type { VariantProps } from '@gluestack-ui/nativewind-utils';

import React from 'react';
export const UILink = createLink({
  // @ts-ignore
  Root:
    Platform.OS === 'web'
      ? withStyleContext(Pressable)
      : withStyleContextAndStates(Pressable),
  Text: Platform.OS === 'web' ? Text : withStates(Text),
});

cssInterop(UILink, { className: 'style' });
cssInterop(UILink.Text, { className: 'style' });

const linkStyle = tva({
  base: 'web:outline-0 web:data-[disabled=true]:cursor-not-allowed web:data-[focus-visible=true]:outline-2 web:data-[focus-visible=true]:outline-primary-700 web:data-[focus-visible=true]:outline',
});

const linkTextStyle = tva({
  base: 'underline text-info-700 hover:text-info-600 hover:no-underline active:text-info-700 data-[disabled=true]:opacity-40',
});

type ILinkProps = React.ComponentProps<typeof UILink> &
  VariantProps<typeof linkStyle>;
const Link = React.forwardRef(
  ({ className, ...props }: { className?: string } & ILinkProps, ref) => {
    return (
      <UILink
        // @ts-ignore
        ref={ref}
        {...props}
        className={linkStyle({ class: className })}
      />
    );
  }
);

type ILinkTextProps = React.ComponentProps<typeof UILink.Text> &
  VariantProps<typeof linkTextStyle>;
const LinkText = React.forwardRef(
  ({ className, ...props }: { className?: string } & ILinkTextProps, ref) => {
    return (
      <UILink.Text
        // @ts-ignore
        ref={ref}
        {...props}
        className={linkTextStyle({
          class: className,
        })}
      />
    );
  }
);

Link.displayName = 'Link';
LinkText.displayName = 'LinkText';

export { Link, LinkText };
