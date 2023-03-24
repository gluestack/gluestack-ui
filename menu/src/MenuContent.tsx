import React, { forwardRef } from 'react';
import { ScrollView } from 'react-native';
import { mergeRefs } from '@gluestack-ui/utils';
import { MenuProvider } from './MenuContext';
import { useMenuContext } from './context';
import { useMenuTypeahead } from './useMenu';
import { useMenu } from '@react-native-aria/menu';
import { useOverlayPosition } from '@react-native-aria/overlays';
import { FocusScope } from '@react-native-aria/focus';

import { useTreeState } from 'react-stately';

const MenuContent = (StyledMenuContent: any) =>
  forwardRef((props: any, ref: any) => {
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
  let state = useTreeState(props);

  const overlayRef = React.useRef(null);
  const { value } = useMenuContext('MenuContext');
  const { handleClose, placement, targetRef } = value;
  const { menuProps } = useMenu(props, state, overlayRef);
  const typeaheadProps = useMenuTypeahead(menuProps);
  const { overlayProps } = useOverlayPosition({
    placement: placement,
    targetRef,
    overlayRef,
    offset: 10,
  });
  const mergedRef = mergeRefs([menuRef, ref, overlayRef]);

  console.log(menuProps, 'menuProps');
  return (
    <StyledMenuContent
      {...props}
      {...menuProps}
      // {...typeaheadProps}
      ref={mergedRef}
      style={{
        position: 'absolute',
        ...overlayProps.style,
        ...style,
      }}
    >
      <MenuProvider
        closeOnSelect={closeOnSelect}
        onClose={handleClose}
        menuItemState={state}
      >
        <ScrollView>{children}</ScrollView>
      </MenuProvider>
    </StyledMenuContent>
  );
};

export default MenuContent;
