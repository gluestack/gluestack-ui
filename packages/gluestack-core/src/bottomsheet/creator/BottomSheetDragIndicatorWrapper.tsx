import React, { forwardRef } from 'react';
import { Animated, Dimensions, PanResponder, Platform } from 'react-native';
import { useBottomSheetContent } from './BottomSheetContentContext';

const windowHeight =
  Platform.OS === 'web'
    ? typeof window !== 'undefined'
      ? window.innerHeight
      : Dimensions.get('window').height
    : Dimensions.get('window').height;

export function BottomSheetDragIndicatorWrapper<T>(
  StyledBottomSheetDragIndicatorWrapper: React.ComponentType<T>
) {
  return forwardRef((props: any, ref?: any) => {
    const {
      pan,
      handleClose,
      handleCloseBackdrop,
      snapPoints,
      contentSheetHeight,
      activeSnapIndex,
      setActiveSnapIndex,
      maxSnapPoint,
    } = useBottomSheetContent('BottomSheetContentContext');

    // Keep handleClose ref updated to avoid capturing stale state
    const handleCloseRef = React.useRef(handleClose);
    React.useEffect(() => {
      handleCloseRef.current = handleClose;
    }, [handleClose]);

    // Store the initial pan.y value when drag starts
    const dragStartY = React.useRef(0);

    const panResponder = React.useRef(
      PanResponder.create({
        onStartShouldSetPanResponder: () => false,
        onMoveShouldSetPanResponder: (_evt, gestureState) => {
          // Only activate if there's significant vertical movement
          return Math.abs(gestureState.dy) > 8 && Math.abs(gestureState.dy) > Math.abs(gestureState.dx);
        },
        onPanResponderGrant: () => {
          // Store the current pan.y value when drag starts
          dragStartY.current = (pan.y as any)._value;
        },
        onPanResponderMove: (e, gestureState) => {
          if (!snapPoints || snapPoints.length === 0) {
            if (gestureState.dy > 0) {
              Animated.event([null, { dy: pan.y }], {
                useNativeDriver: false,
              })(e, gestureState);
            }
          } else {
            // Calculate new position
            const newY = dragStartY.current + gestureState.dy;
            const maxHeight = (maxSnapPoint * windowHeight) / 100;

            // Constrain movement
            const constrainedY = Math.max(0, Math.min(newY, maxHeight));

            pan.setValue({ x: 0, y: constrainedY });
          }
        },
        onPanResponderRelease: (_e, gestureState) => {
          if (!snapPoints || snapPoints.length === 0) {
            if (contentSheetHeight.current / 4 < gestureState.dy) {
              handleCloseBackdrop();
              Animated.timing(pan, {
                toValue: { x: 0, y: contentSheetHeight.current },
                duration: 250,
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
            const maxHeight = (maxSnapPoint * windowHeight) / 100;
            const currentY = dragStartY.current + gestureState.dy;

            // Calculate which height this corresponds to
            const visibleHeight = maxHeight - currentY;
            const visiblePercentage = (visibleHeight / windowHeight) * 100;

            // Check if should close (dragged down beyond threshold)
            const smallestSnapPoint = Math.min(...snapPoints);
            const closeThreshold = smallestSnapPoint * 0.5;

            if (visiblePercentage < closeThreshold) {
              handleCloseBackdrop();
              Animated.timing(pan, {
                toValue: { x: 0, y: maxHeight + 100 },
                duration: 250,
                useNativeDriver: true,
              }).start(() => {
                handleCloseRef.current();
              });
              return;
            }

            // Find the closest snap point based on position only
            const snapPositions = snapPoints.map((point: number) => {
              const pointHeight = (point * windowHeight) / 100;
              return maxHeight - pointHeight;
            });

            let closestSnapIndex = 0;
            let minDistance = Math.abs(currentY - snapPositions[0]);

            for (let i = 1; i < snapPositions.length; i++) {
              const distance = Math.abs(currentY - snapPositions[i]);
              if (distance < minDistance) {
                minDistance = distance;
                closestSnapIndex = i;
              }
            }

            const targetY = snapPositions[closestSnapIndex];

            // Update active snap index if changed
            if (closestSnapIndex !== activeSnapIndex && setActiveSnapIndex) {
              setActiveSnapIndex(closestSnapIndex);
            }

            // Animate to the nearest snap point
            Animated.spring(pan, {
              toValue: { x: 0, y: targetY },
              velocity: { x: 0, y: gestureState.vy },
              damping: 25,
              stiffness: 180,
              mass: 1,
              useNativeDriver: true,
            }).start();
          }
        },
      })
    ).current;

    return (
      <StyledBottomSheetDragIndicatorWrapper
        {...panResponder.panHandlers}
        {...(props as T)}
        ref={ref}
      />
    );
  });
}
