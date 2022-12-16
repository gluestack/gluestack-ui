import React, { forwardRef } from 'react';
import { Animated } from 'react-native';
import { ModalContext } from '../Modal/Context';
import { ActionsheetContentProvider } from './ActionsheetContentContext';

const ActionsheetContent = (StyledActionsheetContent: any) =>
  forwardRef(({ children, ...props }: any, ref?: any) => {
    const { handleClose } = React.useContext(ModalContext);
    // const { hideDragIndicator } = React.useContext(ActionSheetContext);
    const pan = React.useRef(new Animated.ValueXY()).current;
    const sheetHeight = React.useRef(0);

    const handleCloseCallback = React.useCallback(handleClose, [
      ModalContext,
      handleClose,
    ]);

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
        <StyledActionsheetContent ref={ref} {...props}>
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
  });

export default ActionsheetContent;
