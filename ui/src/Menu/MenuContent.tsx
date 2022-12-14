import React, { forwardRef } from 'react';
import { ScrollView } from 'react-native';
import { UIContext } from '../UIProvider';
import { useMenu, useMenuTypeahead } from './useMenu';

export const MenuContent = ({ menuRef, children, ...props }: any) => {
  const { StyledMenu } = React.useContext(UIContext);

  const menuProps = useMenu();
  const typeaheadProps = useMenuTypeahead(menuProps);
  return (
    <StyledMenu {...props} {...menuProps} {...typeaheadProps} ref={menuRef}>
      <ScrollView>{children}</ScrollView>
    </StyledMenu>
  );
};

export default forwardRef(MenuContent);
