import React, { forwardRef } from 'react';
import { AlertDialogContext } from './Context';
import { Platform, View } from 'react-native';
import { FocusScope } from '@react-native-aria/focus';

const AlertDialogContent = (StyledAlertDialogContent: any) =>
  forwardRef((props: any, ref?: any) => {
    const {
      initialFocusRef,
      finalFocusRef,
      handleClose,
      avoidKeyboard,
      bottomInset,
      visible,
    } = React.useContext(AlertDialogContext);

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

    const child = (
      <View
        style={{
          // @ts-ignore
          pointerEvents: 'box-none',
          bottom: avoidKeyboard ? bottomInset : undefined,
        }}
        ref={ref}
      >
        {props.children}
      </View>
    );

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
          accessibilityRole={Platform.OS === 'web' ? 'dialog' : undefined}
          accessibilityViewIsModal
        >
          {child}
        </StyledAlertDialogContent>
      </FocusScope>
    );
  });

export default AlertDialogContent;
