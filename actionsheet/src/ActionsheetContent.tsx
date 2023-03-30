/* eslint-disable react-native/no-inline-styles */
import React, { forwardRef } from 'react';
import {
  Animated,
  findNodeHandle,
  AccessibilityInfo,
  Platform,
} from 'react-native';
import { ActionsheetContext } from './context';
import { ActionsheetContentProvider } from './ActionsheetContentContext';
import { FocusScope } from '@react-native-aria/focus';
import { mergeRefs } from '@gluestack-ui/utils';
import { useDialog } from './useDialog';
import type { IActionsheetContentProps } from './types';

function ActionsheetContent<T>(
  StyledActionsheetContent: React.ComponentType<T>
) {
  return forwardRef(
    (
      { children, focusable = true, ...props }: T & IActionsheetContentProps,
      ref?: any
    ) => {
      const {
        handleClose,
        trapFocus,
        visible,
        initialFocusRef,
        finalFocusRef,
      } = React.useContext(ActionsheetContext);
      const pan = React.useRef(new Animated.ValueXY()).current;
      const sheetHeight = React.useRef(0);

      const handleCloseCallback = React.useCallback(handleClose, [
        ActionsheetContext,
        handleClose,
      ]);

      const contentRef = React.useRef(null);

      React.useEffect(() => {
        if (contentRef) {
          const reactTag = findNodeHandle(contentRef.current);
          if (reactTag) {
            AccessibilityInfo.setAccessibilityFocus(reactTag);
          }
        }
      }, [visible, contentRef]);

      React.useEffect(() => {
        const finalRefVal = finalFocusRef ? finalFocusRef.current : null;
        if (visible) {
          if (initialFocusRef && initialFocusRef.current) {
            initialFocusRef.current.focus();
          }
        } else {
          if (finalRefVal) {
            finalRefVal.focus();
          }
        }
      }, [initialFocusRef, finalFocusRef, visible]);

      const mergedRef = mergeRefs([ref, contentRef]);
      const { dialogProps } = useDialog(
        { ...props, initialFocusRef },
        mergedRef
      );

      return (
        <Animated.View
          style={{
            transform: [{ translateY: pan.y }],
            width: '100%',
            height: '100%',
            justifyContent: 'flex-end',
          }}
          onLayout={(event) => {
            const { height } = event.nativeEvent.layout;
            sheetHeight.current = height;
          }}
          pointerEvents="box-none"
        >
          <FocusScope
            contain={trapFocus}
            autoFocus={visible && !initialFocusRef}
            restoreFocus={visible && !finalFocusRef}
            // autoFocus
            // restoreFocus
          >
            <StyledActionsheetContent
              ref={mergedRef}
              focusable={Platform.OS === 'web' ? focusable : undefined}
              {...dialogProps}
              {...(props as T)}
            >
              <ActionsheetContentProvider
                sheetHeight={sheetHeight}
                pan={pan}
                handleClose={handleCloseCallback}
              >
                {children}
              </ActionsheetContentProvider>
            </StyledActionsheetContent>
          </FocusScope>
        </Animated.View>
      );
    }
  );
}

export default ActionsheetContent;
