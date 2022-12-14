import React, { forwardRef } from 'react';
import { UIContext } from '../UIProvider';
import { MenuContext } from './context';
import { useMenu, useMenuTypeahead } from './useMenu';

export const MenuContent = ({ menuRef, children, ...props }: any) => {
  const { StyledMenuContent } = React.useContext(UIContext);
  const menuProps = useMenu();
  const typeaheadProps = useMenuTypeahead(menuProps);
  const { isOpen } = React.useContext(MenuContext);
  return (
    <StyledMenuContent
      isOpen={isOpen}
      {...props}
      {...menuProps}
      {...typeaheadProps}
      ref={menuRef}
    >
      {/* <Popper.Content
        isOpen={isOpen}
        {...props}
        {...menuProps}
        {...typeaheadProps}
        ref={menuRef}
      > */}
      {children}
      {/* </Popper.Content> */}
    </StyledMenuContent>
  );
};

export default forwardRef(MenuGroup);
