import { Popper } from '@gluestack/popper';
import { FocusScope } from '@react-native-aria/focus';
import React, { forwardRef } from 'react';
import { ScrollView } from 'react-native';
import { mergeRefs } from '../utils';
import { MenuProvider } from './MenuContext';
import { useMenu, useMenuTypeahead } from './useMenu';

export const MenuContent = (StyledMenuContent: any) =>
  forwardRef(
    (
      {
        menuRef,
        isOpen,
        closeOnSelect = true,
        handleClose,
        children,
        ...props
      }: any,
      ref: any
    ) => {
      const menuProps = useMenu();
      const typeaheadProps = useMenuTypeahead(menuProps);
      const mergedRef = mergeRefs([menuRef, ref]);

      return (
        <Popper.Content isOpen={isOpen}>
          <MenuProvider closeOnSelect={closeOnSelect} onClose={handleClose}>
            <FocusScope contain restoreFocus autoFocus>
              <StyledMenuContent
                {...props}
                {...menuProps}
                {...typeaheadProps}
                ref={mergedRef}
              >
                <ScrollView>{children}</ScrollView>
              </StyledMenuContent>
            </FocusScope>
          </MenuProvider>
        </Popper.Content>
      );
    }
  );

export default MenuContent;
