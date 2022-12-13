import React from 'react';
import { UIContext } from '../UIProvider';
import type { InterfaceLinkProps } from './types';
import { useLink } from './useLink';
import { useHover } from '@react-native-aria/interactions';

export const Link = ({
  children,
  href,
  onPress,
  isExternal,
  // isUnderlined,
  ...props
}: InterfaceLinkProps) => {
  const { StyledLink } = React.useContext(UIContext);
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
      {...props}
      ref={_ref}
    >
      {children}
    </StyledLink>
  );
};
