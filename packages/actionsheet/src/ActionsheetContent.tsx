/* eslint-disable react-native/no-inline-styles */
import React, { forwardRef, useEffect, useRef } from 'react';
import {
  Animated,
  Dimensions,
  findNodeHandle,
  AccessibilityInfo,
  Platform,
  Pressable,
} from 'react-native';
import { ActionsheetContext } from './context';
import { ActionsheetContentProvider } from './ActionsheetContentContext';
import { FocusScope } from '@react-native-aria/focus';
import { mergeRefs } from '@gluestack-ui/utils';
import { useDialog } from '@react-native-aria/dialog';
import type { IActionsheetContentProps } from './types';
import { usePreventScroll } from '@react-native-aria/overlays';
const windowHeight = Dimensions.get('window').height;
function ActionsheetContent<T>(
  StyledActionsheetContent: React.ComponentType<T>
) {
  return forwardRef(
    (
      { children, focusable = true, ...props }: T & IActionsheetContentProps,
      ref?: any
    ) => {
      const {
        visible,
        handleClose,
        trapFocus,
        initialFocusRef,
        handleCloseBackdrop,
        finalFocusRef,
        snapPoints,
        isOpen,
      } = React.useContext(ActionsheetContext);

      usePreventScroll();

      const pan = React.useRef(new Animated.ValueXY()).current;
      const contentSheetHeight = React.useRef(0);

      const animationDefaultConfig = {
        type: 'timing',
        duration: 200,
      };

      const handleCloseCallback = React.useCallback(handleClose, [
        ActionsheetContext,
        handleClose,
      ]);

      const contentSheetAnimatePosition = React.useMemo(
        () => windowHeight - snapPoints[0] * windowHeight * 0.01,
        [snapPoints]
      );

      const contentRef = React.useRef(null);
      React.useEffect(() => {
        if (contentRef) {
          const reactTag = findNodeHandle(contentRef.current);
          if (reactTag) {
            AccessibilityInfo.setAccessibilityFocus(reactTag);
            AccessibilityInfo.setAccessibilityFocus(reactTag);
            AccessibilityInfo.setAccessibilityFocus(reactTag);
            AccessibilityInfo.setAccessibilityFocus(reactTag);

            AccessibilityInfo.setAccessibilityFocus(reactTag);
            AccessibilityInfo.setAccessibilityFocus(reactTag);
            AccessibilityInfo.setAccessibilityFocus(reactTag);
            AccessibilityInfo.setAccessibilityFocus(reactTag);
          }
        }
      }, [contentRef]);

      const { dialogProps } = useDialog({ ...props }, contentRef);
      const mergedRef = mergeRefs([ref, contentRef]);
      console.log(visible, 'hello');
      return (
        // <Animated.View
        //   style={{
        //     transform: [{ translateY: pan.y }],
        //     opacity: visible ? 1 : 0,
        //     width: '100%',
        //     height: '100%',
        //   }}
        //   pointerEvents="box-none"
        // >
        //   <FocusScope
        //     contain={trapFocus}
        //     autoFocus={visible && !initialFocusRef}
        //     restoreFocus={visible && !finalFocusRef}
        //   >
        <StyledActionsheetContent
          initial={{
            // y: windowHeight,
            // opacity: 0,
            scale: 0.8,
            backgroundColor: 'pink',
          }}
          animate={{
            // y: visible ? contentSheetAnimatePosition : windowHeight,
            // opacity: visible ? 1 : 0,
            scale: visible ? 1 : 0.8,
            backgroundColor: visible ? 'yellow' : 'green',
          }}
          // exit={{
          //   y: visible ? contentSheetAnimatePosition : windowHeight,
          // }}
          // transition={animationDefaultConfig}
          // {...(props as T)}
          // ref={mergedRef}
          // focusable={Platform.OS === 'web' ? focusable : undefined}
          {...dialogProps}
        >
          <ActionsheetContentProvider
            contentSheetHeight={contentSheetHeight}
            pan={pan}
            handleClose={handleCloseCallback}
            handleCloseBackdrop={handleCloseBackdrop}
            snapPoints={snapPoints}
          >
            {children}
          </ActionsheetContentProvider>
        </StyledActionsheetContent>
        //   </FocusScope>
        // </Animated.View>
      );
    }
  );
}

export default ActionsheetContent;
