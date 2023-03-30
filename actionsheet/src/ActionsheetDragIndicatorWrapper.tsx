import React, { forwardRef } from 'react';
import { Animated, PanResponder } from 'react-native';
import { mergeRefs } from '@gluestack-ui/utils';
import { useActionsheetContent } from './ActionsheetContentContext';

export function ActionsheetDragIndicatorWrapper<T>(
  StyledActionsheetDragIndicatorWrapper: React.ComponentType<T>
) {
  return forwardRef((props: T, ref?: any) => {
    const {
      sheetHeight,
      pan,
      // ref: contentRef,
      handleClose,
    } = useActionsheetContent('ActionsheetContentContext');

    const handleCloseRef = React.useRef(null);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const handleCloseCallback = React.useCallback(() => {
      const handleCloseCurrent = handleCloseRef.current;
      //@ts-ignore
      return handleCloseCurrent();
    }, []);

    React.useEffect(() => {
      handleCloseRef.current = handleClose;
    }, [handleClose]);

    const panResponder = React.useRef(
      PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponder: (_evt, gestureState) => {
          return gestureState.dy > 15;
        },
        onPanResponderMove: (e, gestureState) => {
          if (gestureState.dy > 0) {
            Animated.event([null, { dy: pan.y }], {
              useNativeDriver: false,
            })(e, gestureState);
          }
        },
        onPanResponderRelease: (_e, gestureState) => {
          // If sheet is dragged 1/4th of it's height, close it
          if (sheetHeight.current / 4 - gestureState.dy < 0) {
            Animated.timing(pan, {
              toValue: { x: 0, y: sheetHeight.current },
              duration: 150,
              useNativeDriver: true,
            }).start(handleCloseCallback);

            setTimeout(() => {
              Animated.timing(pan, {
                toValue: { x: 0, y: 0 },
                duration: 150,
                useNativeDriver: true,
              }).start();
            }, 300);
          } else {
            Animated.spring(pan, {
              toValue: { x: 0, y: 0 },
              overshootClamping: true,
              useNativeDriver: true,
            }).start();
          }
        },
      })
    ).current;

    const mergedRef = mergeRefs([ref, handleCloseRef]);

    return (
      <StyledActionsheetDragIndicatorWrapper
        {...panResponder.panHandlers}
        {...(props as T)}
        ref={mergedRef}
      />
    );
  });
}
