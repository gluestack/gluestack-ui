/* eslint-disable react-native/no-inline-styles */
import React, { forwardRef } from 'react';
import {
  Animated,
  Dimensions,
  findNodeHandle,
  AccessibilityInfo,
  Platform,
  Keyboard,
} from 'react-native';
import { ActionsheetContext } from './context';
import { ActionsheetContentProvider } from './ActionsheetContentContext';
import { OverlayAnimatePresence } from './OverlayAnimatePresence';
import { FocusScope } from '@react-native-aria/focus';
import { mergeRefs } from '@gluestack-ui/utils';
import { useDialog } from '@react-native-aria/dialog';

import { usePreventScroll } from '@react-native-aria/overlays';
const windowHeight = Dimensions.get('screen').height;
function ActionsheetContent(
  StyledActionsheetContent: any,
  AnimatePresence?: any
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
      } = React.useContext(ActionsheetContext);

      usePreventScroll();

      const pan = React.useRef(new Animated.ValueXY()).current;
      const contentSheetHeight = React.useRef(0);

      const [contentSheetHeightState, setContentSheetHeightState] =
        React.useState(0);

      const [animatedViewSheetHeight, setAnimatedViewSheetHeight] =
        React.useState(0);

      const animationDefaultConfig = {
        type: 'timing',
        duration: 200,
      };

      const handleCloseCallback = React.useCallback(handleClose, [
        ActionsheetContext,
        handleClose,
      ]);

      const contentSheetAnimatePosition = React.useMemo(() => {
        if (!snapPoints) {
          return animatedViewSheetHeight - contentSheetHeightState;
        }
        return windowHeight - snapPoints[0] * windowHeight * 0.01;
      }, [snapPoints, animatedViewSheetHeight, contentSheetHeightState]);

      const contentRef = React.useRef(null);
      React.useEffect(() => {
        if (contentRef) {
          const reactTag = findNodeHandle(contentRef.current);
          if (reactTag) {
            AccessibilityInfo.setAccessibilityFocus(reactTag);
            AccessibilityInfo.setAccessibilityFocus(reactTag);
            AccessibilityInfo.setAccessibilityFocus(reactTag);
            AccessibilityInfo.setAccessibilityFocus(reactTag);
            AccessibilityInfo.setAccessibilityFocus(reactTag);
            AccessibilityInfo.setAccessibilityFocus(reactTag);
            AccessibilityInfo.setAccessibilityFocus(reactTag);
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
          <StyledActionsheetContent
            transition={animationDefaultConfig}
            {...(props as any)}
            ref={mergedRef}
            {...dialogProps}
            onLayout={(event: any) => {
              const { height } = event.nativeEvent.layout;
              contentSheetHeight.current = height;
            }}
          >
            <ActionsheetContentProvider
              contentSheetHeight={contentSheetHeight}
              pan={pan}
              handleClose={handleCloseCallback}
              handleCloseBackdrop={handleCloseBackdrop}
            >
              {children}
            </ActionsheetContentProvider>
          </StyledActionsheetContent>
        );
      }

      return (
        <Animated.View
          style={{
            transform: [{ translateY: pan.y }],
            width: '100%',
            height: '100%',
          }}
          onLayout={(event) => {
            const { height } = event.nativeEvent.layout;
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
                y: windowHeight,
              }}
              animate={{
                y: contentSheetAnimatePosition,
              }}
              exit={{
                y: windowHeight,
              }}
              transition={animationDefaultConfig}
              {...props}
              style={[
                props.style,
                {
                  height: snapPoints
                    ? snapPoints[0] * windowHeight * 0.01
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
              <ActionsheetContentProvider
                contentSheetHeight={contentSheetHeight}
                pan={pan}
                handleClose={handleCloseCallback}
                handleCloseBackdrop={handleCloseBackdrop}
                snapPoints={snapPoints}
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
              </ActionsheetContentProvider>
            </StyledActionsheetContent>
          </OverlayAnimatePresence>
        </Animated.View>
      );
    }
  );
}

export default ActionsheetContent;
