import React, { forwardRef } from 'react';
import { ModalContext } from './Context';
import { Platform } from 'react-native';
import { FocusScope } from '@react-native-aria/focus';
import { UIContext } from '../UIProvider';

const ModalContent = (props: any, ref?: any) => {
  const { initialFocusRef, finalFocusRef, handleClose, visible } =
    React.useContext(ModalContext);
  const { StyledModalContent } = React.useContext(UIContext);

  React.useEffect(() => {
    const finalRefVal = finalFocusRef ? finalFocusRef.current : null;
    if (visible) {
      if (initialFocusRef && initialFocusRef.current) {
        //@ts-ignore
        initialFocusRef.current.focus();
      }
    } else {
      if (finalRefVal) {
        //@ts-ignore
        finalRefVal.focus();
      }
    }
  }, [initialFocusRef, finalFocusRef, visible]);

  return (
    <FocusScope
      contain={visible}
      autoFocus={visible && !initialFocusRef}
      restoreFocus={visible && !finalFocusRef}
    >
      <StyledModalContent
        {...props}
        ref={ref}
        onAccessibilityEscape={handleClose}
        //@ts-ignore - web only
        aria-modal="true"
        //@ts-ignore - web only
        accessibilityRole={Platform.OS === 'web' ? 'dialog' : undefined}
        accessibilityViewIsModal
      >
        {props.children}
      </StyledModalContent>
    </FocusScope>
  );
};

export default forwardRef(ModalContent);
