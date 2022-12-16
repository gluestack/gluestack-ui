import React, { forwardRef } from 'react';
import { ScrollView } from 'react-native';
import { useMenu, useMenuTypeahead } from './useMenu';

export const MenuContent = (StyledMenu: any) =>
  forwardRef(({ menuRef, children, ...props }: any) => {
    const menuProps = useMenu();
    const typeaheadProps = useMenuTypeahead(menuProps);
    return (
      <StyledMenu {...props} {...menuProps} {...typeaheadProps} ref={menuRef}>
        <ScrollView>{children}</ScrollView>
      </StyledMenu>
    );
  });

export default MenuContent;
