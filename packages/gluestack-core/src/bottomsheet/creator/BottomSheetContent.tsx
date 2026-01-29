/* eslint-disable react-native/no-inline-styles */
import React, { forwardRef } from 'react';
import {
  Animated,
  Dimensions,
  AccessibilityInfo,
  Platform,
  Keyboard,
} from 'react-native';
import { BottomSheetContext } from './context';
import { BottomSheetContentProvider } from './BottomSheetContentContext';
import { FocusScope } from '@gluestack-ui/utils/aria';
import { mergeRefs, findNodeHandle } from '@gluestack-ui/utils/common';
import { useDialog } from '@gluestack-ui/utils/aria';
import { usePreventScroll } from '../../overlay/aria';

// Dimensions not giving proper window height on web
const windowHeight =
  Platform.OS === 'web'
    ? typeof window !== 'undefined'
      ? window.innerHeight
      : Dimensions.get('screen').height
    : Dimensions.get('screen').height;

function BottomSheetContent(
  StyledBottomSheetContent: any
) {
  return forwardRef(
    (
      {
        children,
        _experimentalContent = false,
        focusScope = true,
        ...props
      }: any,
      ref?: any
    ) => {
      const {
        visible,
        handleClose,
        trapFocus,
        initialFocusRef,
        handleCloseBackdrop,
        finalFocusRef,
        snapPoints,
        snapToIndex,
        preventScroll,
      } = React.useContext(BottomSheetContext);

      usePreventScroll({ isDisabled: !preventScroll });

      const pan = React.useRef(new Animated.ValueXY()).current;
      const contentSheetHeight = React.useRef(0);

      const [contentSheetHeightState, setContentSheetHeightState] =
        React.useState(0);

      const [animatedViewSheetHeight, setAnimatedViewSheetHeight] =
        React.useState(0);

      const [activeSnapIndex, setActiveSnapIndex] = React.useState(snapToIndex);

      // Calculate the maximum snap point height
      const maxSnapPoint = React.useMemo(() => {
        if (!snapPoints || snapPoints.length === 0) return 100;
        return Math.max(...snapPoints);
      }, [snapPoints]);

      // Reset active snap index and position when sheet opens
      React.useEffect(() => {
        if (visible) {
          setActiveSnapIndex(snapToIndex);
          // Start from off-screen and animate in
          const initialSnapHeight = snapPoints?.[snapToIndex] || 50;
          const maxHeight = (maxSnapPoint * windowHeight) / 100;
          const targetHeight = (initialSnapHeight * windowHeight) / 100;
          const offset = maxHeight - targetHeight;

          pan.setValue({ x: 0, y: offset });
        }
      }, [visible, snapToIndex, snapPoints, maxSnapPoint, pan]);

      const handleCloseCallback = React.useCallback(handleClose, [
        BottomSheetContext,
        handleClose,
      ]);

      const contentSheetAnimatePosition = React.useMemo(() => {
        if (!snapPoints || snapPoints.length === 0) {
          return animatedViewSheetHeight - contentSheetHeightState;
        }
        // Use snapToIndex to determine initial snap point
        const snapPointIndex = Math.min(
          snapToIndex,
          snapPoints.length - 1
        );
        return windowHeight - (snapPoints[snapPointIndex] * windowHeight) / 100;
      }, [snapPoints, snapToIndex, animatedViewSheetHeight, contentSheetHeightState]);

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
        if (visible) {
          Keyboard.dismiss();
          if (initialFocusRef && initialFocusRef.current) {
            initialFocusRef.current.focus();
          }
        } else {
          if (finalFocusRef && finalFocusRef.current) {
            finalFocusRef.current.focus();
          }
        }
      }, [initialFocusRef, finalFocusRef, visible]);

      const { dialogProps } = useDialog({ ...props }, contentRef);

      const mergedRef = mergeRefs([ref, contentRef]);

      if (_experimentalContent) {
        return (
          <StyledBottomSheetContent
            {...(props as any)}
            ref={mergedRef}
            {...dialogProps}
            onLayout={(event: any) => {
              const { height } = event.nativeEvent.layout;
              contentSheetHeight.current = height;
            }}
          >
            <BottomSheetContentProvider
              contentSheetHeight={contentSheetHeight}
              pan={pan}
              handleClose={handleCloseCallback}
              handleCloseBackdrop={handleCloseBackdrop}
              snapPoints={snapPoints}
              activeSnapIndex={activeSnapIndex}
              setActiveSnapIndex={setActiveSnapIndex}
              maxSnapPoint={maxSnapPoint}
            >
              {children}
            </BottomSheetContentProvider>
          </StyledBottomSheetContent>
        );
      }

      if (!visible) return null;

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
            setAnimatedViewSheetHeight(height);
          }}
          pointerEvents="box-none"
        >
          <StyledBottomSheetContent
            {...props}
            style={[
              props.style,
              {
                height:
                  snapPoints && snapPoints.length > 0
                    ? (maxSnapPoint * windowHeight) / 100
                    : undefined,
              },
            ]}
            ref={mergedRef}
            tabIndex={Platform.OS === 'web' ? 0 : undefined}
            {...dialogProps}
            onLayout={(event: any) => {
              const { height } = event.nativeEvent.layout;
              contentSheetHeight.current = height;
              setContentSheetHeightState(height);
            }}
          >
            <BottomSheetContentProvider
              contentSheetHeight={contentSheetHeight}
              pan={pan}
              handleClose={handleCloseCallback}
              handleCloseBackdrop={handleCloseBackdrop}
              snapPoints={snapPoints}
              activeSnapIndex={activeSnapIndex}
              setActiveSnapIndex={setActiveSnapIndex}
              maxSnapPoint={maxSnapPoint}
            >
              {focusScope ? (
                <FocusScope
                  contain={trapFocus}
                  autoFocus={visible && !initialFocusRef}
                  restoreFocus={visible && !finalFocusRef}
                >
                  {children}
                </FocusScope>
              ) : (
                <>{children}</>
              )}
            </BottomSheetContentProvider>
          </StyledBottomSheetContent>
        </Animated.View>
      );
    }
  );
}

export default BottomSheetContent;
