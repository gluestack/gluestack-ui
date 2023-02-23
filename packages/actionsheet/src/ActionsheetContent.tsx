/* eslint-disable react-native/no-inline-styles */
import React, { forwardRef } from 'react';
import { Animated, View } from 'react-native';
import { ActionsheetContext } from './context';
import { ActionsheetContentProvider } from './ActionsheetContentContext';

function ActionsheetContent<T>(
  StyledActionsheetContent: React.ComponentType<T>
) {
  return forwardRef(
    ({ children, ...props }: T & { children?: any }, ref?: any) => {
      const { handleClose, avoidKeyboard, bottomInset } =
        React.useContext(ActionsheetContext);
      const pan = React.useRef(new Animated.ValueXY()).current;
      const sheetHeight = React.useRef(0);

      const handleCloseCallback = React.useCallback(handleClose, [
        ActionsheetContext,
        handleClose,
      ]);

      const child = (
        <View
          style={{
            // @ts-ignore
            pointerEvents: 'box-none',
            width: '100%',
            bottom: avoidKeyboard ? bottomInset : undefined,
          }}
          ref={ref}
        >
          {children}
        </View>
      );

      return (
        <Animated.View
          style={{
            transform: [{ translateY: pan.y }],
            width: '100%',
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
              {child}
            </ActionsheetContentProvider>
          </StyledActionsheetContent>
        </Animated.View>
      );
    }
  );
}

export default ActionsheetContent;
