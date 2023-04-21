import React, { forwardRef } from 'react';
import { ScrollView } from 'react-native';
import { mergeRefs } from '@gluestack-ui/utils';
import { MenuProvider } from './MenuContext';
import { useMenuContext } from './context';
import { useMenu, useMenuTypeahead } from './useMenu';
import { useOverlayPosition } from '@react-native-aria/overlays';
import { FocusScope } from '@react-native-aria/focus';

const MenuContent = (StyledMenuContent: any) =>
  forwardRef((props: any, ref?: any) => {
    return (
      <FocusScope contain restoreFocus autoFocus>
        <MenuContentComponent
          ref={ref}
          {...props}
          StyledMenuContent={StyledMenuContent}
        />
      </FocusScope>
    );
  });

const MenuContentComponent = ({
  StyledMenuContent,
  menuRef,
  ref,
  style,
  children,
  closeOnSelect = true,
  ...props
}: any) => {
  const menuProps = useMenu();
  const typeaheadProps = useMenuTypeahead(menuProps);
  const overlayRef = React.useRef(null);
  const { value } = useMenuContext('MenuContext');
  const { handleClose, placement, targetRef } = value;
  const { overlayProps } = useOverlayPosition({
    placement: placement,
    targetRef,
    overlayRef,
    offset: 10,
  });
  const mergedRef = mergeRefs([menuRef, ref, overlayRef]);

  return (
    <StyledMenuContent
      {...props}
      {...menuProps}
      {...typeaheadProps}
      ref={mergedRef}
      style={{
        position: 'absolute',
        ...overlayProps.style,
        ...style,
      }}
    >
      <MenuProvider closeOnSelect={closeOnSelect} onClose={handleClose}>
        <ScrollView>{children}</ScrollView>
      </MenuProvider>
    </StyledMenuContent>
  );
};

export default MenuContent;
