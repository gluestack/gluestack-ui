import React, { forwardRef } from 'react';
import { Animated, Dimensions, PanResponder } from 'react-native';
import { mergeRefs } from '@gluestack-ui/utils/common';
import { useActionsheetContent } from './ActionsheetContentContext';
const windowHeight = Dimensions.get('window').height;
export function ActionsheetDragIndicatorWrapper<T>(
  StyledActionsheetDragIndicatorWrapper: React.ComponentType<T>
) {
  return forwardRef((props: any, ref?: any) => {
    const {
      pan,
      handleClose,
      handleCloseBackdrop,
      snapPoints,
      contentSheetHeight,
    } = useActionsheetContent('ActionsheetContentContext');

    // Keep handleClose ref updated to avoid capturing stale state
    const handleCloseRef = React.useRef(handleClose);
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
          if (!snapPoints) {
            if (contentSheetHeight.current / 4 < gestureState.dy) {
              handleCloseBackdrop();
              Animated.timing(pan, {
                toValue: { x: 0, y: contentSheetHeight.current },
                duration: 200,
                useNativeDriver: true,
              }).start(() => handleCloseRef.current());
            } else {
              Animated.spring(pan, {
                toValue: { x: 0, y: 0 },
                overshootClamping: true,
                useNativeDriver: true,
              }).start();
            }
          } else {
            const contentSheetHeightWithSnapPoint =
              windowHeight * (parseFloat(snapPoints[0]) * 0.01);
            if (contentSheetHeightWithSnapPoint / 4 < gestureState.dy) {
              handleCloseBackdrop();
              Animated.timing(pan, {
                toValue: { x: 0, y: contentSheetHeightWithSnapPoint },
                duration: 200,
                useNativeDriver: true,
              }).start(() => handleCloseRef.current());
            } else {
              Animated.spring(pan, {
                toValue: { x: 0, y: 0 },
                overshootClamping: true,
                useNativeDriver: true,
              }).start();
            }
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
