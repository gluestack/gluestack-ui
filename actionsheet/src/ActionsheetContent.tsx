/* eslint-disable react-native/no-inline-styles */
import React, { forwardRef } from 'react';
import { Animated, Dimensions } from 'react-native';
import { ActionsheetContext } from './context';
import { ActionsheetContentProvider } from './ActionsheetContentContext';
import { OverlayAnimatePresence } from './OverlayAnimatePresence';

function ActionsheetContent<T>(
  StyledActionsheetContent: React.ComponentType<T>,
  AnimatePresence: any
) {
  return forwardRef(
    ({ children, ...props }: T & { children?: any }, ref?: any) => {
      const { visible, handleClose } = React.useContext(ActionsheetContext);
      const pan = React.useRef(new Animated.ValueXY()).current;
      const sheetHeight = React.useRef(0);

      const [contentSheetHeight, setContentSheetHeight] = React.useState(0);
      const [animatedViewSheetHeight, setAnimatedViewSheetHeight] =
        React.useState(0);

      const windowHeight = Dimensions.get('window').height;

      const animationDefaultConfig = {
        type: 'spring',
        stiff: 100,
        damping: 20,
      };

      const handleCloseCallback = React.useCallback(handleClose, [
        ActionsheetContext,
        handleClose,
      ]);

      const contentSheetAnimatePosition = React.useMemo(
        () => animatedViewSheetHeight - contentSheetHeight,
        [animatedViewSheetHeight, contentSheetHeight]
      );

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
            setAnimatedViewSheetHeight(height);
          }}
          pointerEvents="box-none"
        >
          <OverlayAnimatePresence
            visible={visible}
            AnimatePresence={AnimatePresence}
          >
            <StyledActionsheetContent
              initial={{
                opacity: 0,
                y: windowHeight,
              }}
              animate={{
                opacity: 1,
                y: contentSheetAnimatePosition,
              }}
              exit={{
                opacity: 0,
                y: windowHeight,
              }}
              transition={animationDefaultConfig}
              {...(props as T)}
              ref={ref}
              onLayout={(event: any) => {
                const { height } = event.nativeEvent.layout;
                setContentSheetHeight(height);
              }}
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
