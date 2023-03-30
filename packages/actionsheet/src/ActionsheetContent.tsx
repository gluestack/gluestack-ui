/* eslint-disable react-native/no-inline-styles */
import React, { forwardRef } from 'react';
import { Animated, findNodeHandle, AccessibilityInfo } from 'react-native';
import { ActionsheetContext } from './context';
import { ActionsheetContentProvider } from './ActionsheetContentContext';
import { FocusScope } from '@react-native-aria/focus';
import { mergeRefs } from '@gluestack-ui/utils';

function ActionsheetContent<T>(
  StyledActionsheetContent: React.ComponentType<T>
) {
  return forwardRef(
    ({ children, ...props }: T & { children?: any }, ref?: any) => {
      const { handleClose, trapFocus, visible } =
        React.useContext(ActionsheetContext);
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

      const mergedRef = mergeRefs([ref, contentRef]);

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
          <FocusScope contain={trapFocus} restoreFocus autoFocus>
            <StyledActionsheetContent ref={mergedRef} {...(props as T)}>
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
