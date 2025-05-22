import React from 'react';
import { Nav as StyledNav } from '@expo/html-elements';
import { cssInterop } from 'nativewind';
import { tva } from '@/utils/gluestack-utils/nativewind/utils/tva';

const navStyle = tva({});

cssInterop(StyledNav, { className: 'style' });

export const Nav = React.forwardRef(
  ({ className, ...props }: any, ref?: any) => {
    return (
      <StyledNav
        {...props}
        className={navStyle({ class: className })}
        ref={ref}
      />
    );
  }
);

Nav.displayName = 'Nav';
