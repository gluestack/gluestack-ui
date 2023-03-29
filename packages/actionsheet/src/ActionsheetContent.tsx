/* eslint-disable react-native/no-inline-styles */
import React, { forwardRef } from 'react';
import { Animated, Dimensions } from 'react-native';
import { ActionsheetContext } from './context';
import { ActionsheetContentProvider } from './ActionsheetContentContext';
import { Motion } from '@legendapp/motion';
import { OverlayAnimatePresence } from './OverlayAnimatePresence';

function ActionsheetContent<T>(
  StyledActionsheetContent: React.ComponentType<T>,
  AnimatePresence: any
) {
  return forwardRef(
    ({ children, ...props }: T & { children?: any }, ref?: any) => {
      const { size, visible, setSize, handleClose } =
        React.useContext(ActionsheetContext);
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
            // justifyContent: 'flex-end',
          }}
          onLayout={(event) => {
            const { height } = event.nativeEvent.layout;
            sheetHeight.current = height;
          }}
          pointerEvents="box-none"
        >
          <OverlayAnimatePresence
            visible={visible}
            AnimatePresence={AnimatePresence}
            size={size}
            updateSize={setSize}
          >
            <StyledActionsheetContent
              // style={{
              // }}
              initial={{
                opacity: 0,
                // y: sheetHeight.current,
                // y: size,
                // top: size - 30,
                // bottom: undefined,
                // top: 0,
                marginTop: 1000,
              }}
              animate={{
                opacity: 1,
                // bottom: 0,
                // y: 0,
                marginTop: 0,

                // y: 0,
                // top: 'initial',
                // left: 0,
                // right: 0,
                // marginTop: 'auto',
              }}
              exit={{
                opacity: 0,
                y: -size,
              }}
              transition={{
                easing: 'easeOut',
              }}
              ref={ref}
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
          </OverlayAnimatePresence>
        </Animated.View>
      );
    }
  );
}

export default ActionsheetContent;
