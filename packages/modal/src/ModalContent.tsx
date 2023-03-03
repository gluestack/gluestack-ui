/* eslint-disable react-native/no-inline-styles */
import React, { forwardRef } from 'react';
import { ModalContext } from './Context';
import { Platform } from 'react-native';
import { FocusScope } from '@react-native-aria/focus';
import { Fade, Slide } from '@gluestack-ui/transitions';
const ModalContent = (StyledModalContent: any) =>
  forwardRef(({ children, animationPreset, ...props }: any, ref?: any) => {
    const {
      initialFocusRef,
      finalFocusRef,
      handleClose,
      visible,
      modalAnimationPreset,
    } = React.useContext(ModalContext);
    if (!animationPreset) {
      animationPreset = modalAnimationPreset;
    }
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
        {animationPreset === 'slide' ? (
          <Slide in={visible} placement="bottom">
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
              {children}
            </StyledModalContent>
          </Slide>
        ) : (
          <Fade
            in={visible}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 200 } }}
            exit={{ opacity: 0, transition: { duration: 100 } }}
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
              {children}
            </StyledModalContent>
          </Fade>
        )}
      </FocusScope>
    );
  });

export default ModalContent;
