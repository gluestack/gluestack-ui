import React, { forwardRef } from 'react';
import { ActionsheetContext } from './context';
import { OverlayAnimatePresence } from './OverlayAnimatePresence';
import { Platform } from 'react-native';

function ActionsheetBackdrop(
  StyledActionsheetBackdrop: any,
  AnimatePresence?: React.ComponentType<any>
) {
  return forwardRef(
    ({ children, ...props }: any & { children?: any }, ref?: any) => {
      const { closeOnOverlayClick, handleClose, backdropVisible } =
        React.useContext(ActionsheetContext);

      const pointerEvents = Platform.OS === 'web' ? 'auto' : undefined;
      return (
        <OverlayAnimatePresence
          visible={backdropVisible}
          AnimatePresence={AnimatePresence}
        >
          <StyledActionsheetBackdrop
            ref={ref}
            onPress={() => {
              closeOnOverlayClick && handleClose();
            }}
            // ios
            accessibilityElementsHidden
            // android
            importantForAccessibility="no-hide-descendants"
            aria-hidden={true}
            style={[{ pointerEvents }, { ...props.style }]}
            {...props}
          >
            {children}
          </StyledActionsheetBackdrop>
        </OverlayAnimatePresence>
      );
    }
  );
}

export default ActionsheetBackdrop;
