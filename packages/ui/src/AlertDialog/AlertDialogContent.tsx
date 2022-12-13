import React, { forwardRef } from 'react';
import { AlertDialogContext } from './Context';
import { FocusScope } from '@react-native-aria/focus';
import { UIContext } from '../UIProvider';

const AlertDialogContent = (props: any, ref?: any) => {
  const { initialFocusRef, finalFocusRef, handleClose, visible } =
    React.useContext(AlertDialogContext);
  const { StyledAlertDialogContent } = React.useContext(UIContext);

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
      <StyledAlertDialogContent
        {...props}
        ref={ref}
        onAccessibilityEscape={handleClose}
        //@ts-ignore - web only
        aria-modal="true"
        //@ts-ignore - web only
        accessibilityViewIsModal
        accessibilityRole="alert"
      >
        {props.children}
      </StyledAlertDialogContent>
    </FocusScope>
  );
};

export default forwardRef(AlertDialogContent);
