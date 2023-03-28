import React, { forwardRef } from 'react';
import type { InterfaceLinkProps } from './types';
import { useLink } from './useLink';
import { useHover } from '@react-native-aria/interactions';

export const Link = <LinkProps,>(StyledLink: React.ComponentType<LinkProps>) =>
  forwardRef(
    ({
      children,
      href,
      onPress,
      isExternal,

      ...props
    }: LinkProps & InterfaceLinkProps) => {
      const _ref = React.useRef(null);
      const { isHovered } = useHover({}, _ref);
      const { linkProps } = useLink({ href, onPress, isExternal, _ref });

      // const linkTextProps = {
      //   textDecorationLine: isUnderlined ? 'underline' : 'none',
      // };

      return (
        <StyledLink
          states={{
            hover: isHovered,
          }}
          {...linkProps}
          {...(props as LinkProps)}
          ref={_ref}
        >
          {children}
        </StyledLink>
      );
    }
  );
