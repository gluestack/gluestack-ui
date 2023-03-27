/* eslint-disable react-native/no-inline-styles */
import React, { forwardRef } from 'react';
import { Animated } from 'react-native';
import { ActionsheetContext } from './context';
import { ActionsheetContentProvider } from './ActionsheetContentContext';

function ActionsheetContent<T>(
  StyledActionsheetContent: React.ComponentType<T>
) {
  return forwardRef(
    ({ children, ...props }: T & { children?: any }, ref?: any) => {
      const { handleClose } = React.useContext(ActionsheetContext);
      const pan = React.useRef(new Animated.ValueXY()).current;
      const sheetHeight = React.useRef(0);

      const handleCloseCallback = React.useCallback(handleClose, [
        ActionsheetContext,
        handleClose,
      ]);

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
          <StyledActionsheetContent ref={ref} {...(props as T)}>
            <ActionsheetContentProvider
              sheetHeight={sheetHeight}
              pan={pan}
              handleClose={handleCloseCallback}
            >
              {children}
            </ActionsheetContentProvider>
          </StyledActionsheetContent>
        </Animated.View>
      );
    }
  );
}

export default ActionsheetContent;
