/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, { forwardRef, useState } from 'react';
import { useKeyboardDismissable } from '@gluestack-ui/hooks';
import { usePopover } from './PopoverContext';
import {
  Platform,
  findNodeHandle,
  AccessibilityInfo,
  Keyboard,
  View,
} from 'react-native';
import { mergeRefs } from '@gluestack-ui/utils';
import { useOverlayPosition } from '@react-native-aria/overlays';
import { OverlayAnimatePresence } from './OverlayAnimatePresence';
import { FocusScope as FocusScopeAria } from '@react-native-aria/focus';
import { useDialog } from '@react-native-aria/dialog';
import { PopoverContentProvider } from './PopoverContext';
import { getContainerStyle } from './utils';

const DEFAULT_ARROW_HEIGHT = 14,
  DEFAULT_ARROW_WIDTH = 14;

const PopoverContent = (StyledPopoverContent: any, AnimatePresence?: any) =>
  forwardRef(({ children, style, ...props }: any, ref?: any) => {
    const { value } = usePopover('PopoverContext');

    const [arrowHeight, setArrowHeight] = useState(DEFAULT_ARROW_HEIGHT);
    const [arrowWidth, setArrowWidth] = useState(DEFAULT_ARROW_WIDTH);
    const [arrowElement, setArrowElement] = useState<React.ReactElement | null>(
      null
    );

    const {
      targetRef,
      initialFocusRef,
      finalFocusRef,
      popoverContentId,
      headerMounted,
      bodyMounted,
      bodyId,
      headerId,
      isOpen,
      placement,
      shouldOverlapWithTrigger,
      crossOffset,
      offset,
      trapFocus,
      handleClose,
      shouldFlip,
      focusScope,
    } = value;

    const contentRef = React.useRef(null);
    React.useEffect(() => {
      if (contentRef) {
        const reactTag = findNodeHandle(contentRef.current);
        if (reactTag) {
          AccessibilityInfo.setAccessibilityFocus(reactTag);
        }
      }
    }, [isOpen, contentRef]);

    const { dialogProps } = useDialog(
      { initialFocusRef, ...props },
      contentRef
    );

    React.useEffect(() => {
      if (isOpen) {
        if (focusScope) {
          Keyboard.dismiss();
        }
        if (
          initialFocusRef &&
          initialFocusRef?.current &&
          initialFocusRef?.current?.focus
        ) {
          initialFocusRef?.current?.focus();
        }
      } else {
        if (
          finalFocusRef &&
          finalFocusRef?.current &&
          finalFocusRef?.current?.focus
        ) {
          finalFocusRef?.current?.focus();
        }
      }
    }, [initialFocusRef, finalFocusRef, isOpen, focusScope]);

    useKeyboardDismissable({
      enabled: true,
      callback: handleClose,
    });

    const accessibilityProps =
      Platform.OS === 'web'
        ? ({
            'role': 'dialog',
            'aria-labelledby': headerMounted ? headerId : undefined,
            'aria-describedby': bodyMounted ? bodyId : undefined,
          } as any)
        : {};
    const overlayRef = React.useRef(null);

    const {
      overlayProps,
      arrowProps,
      placement: calculatedPlacement,
      isFlipped,
    } = useOverlayPosition({
      placement: placement,
      targetRef,
      overlayRef,
      crossOffset,
      offset,
      shouldOverlapWithTrigger,
      shouldFlip,
    });

    if (Object.keys(overlayProps.style).length === 0) {
      overlayProps.style = {
        top: -1000,
        left: -1000,
      };
    }

    const mergedRef = mergeRefs([ref, contentRef]);

    const updateArrowSize = ({
      height,
      width,
    }: {
      height: number;
      width: number;
    }) => {
      setArrowHeight(height);
      setArrowWidth(width);
    };

    const updateArrowElement = (element: React.ReactElement | null) => {
      setArrowElement(element);
    };

    const providerValues = React.useMemo(() => {
      return {
        arrowProps: arrowProps,
        arrowHeight,
        arrowWidth,
        updateArrowSize,
        updateArrowElement,
        actualPlacement: calculatedPlacement,
      };
    }, [calculatedPlacement, arrowProps, arrowHeight, arrowWidth]);

    const popoverContentStyle = React.useMemo(() => {
      const arrayConvertedStyles = Array.isArray(style) ? style : [style];
      const containerStyle = arrowElement
        ? getContainerStyle({
            placement: calculatedPlacement,
            arrowHeight: arrowHeight,
          })
        : {};

      return [containerStyle, arrayConvertedStyles];
    }, [calculatedPlacement, arrowHeight, style, arrowElement]);

    const initialAnimatedStyles = {
      opacity: 0,
      y:
        calculatedPlacement === 'top'
          ? 6
          : calculatedPlacement === 'bottom'
          ? -6
          : 0,
      x:
        calculatedPlacement === 'right'
          ? -6
          : calculatedPlacement === 'left'
          ? 6
          : 0,
    };

    const animatedStyles = {
      opacity: 1,
      y: 0,
      x: 0,
    };

    const exitAnimatedStyles = {
      opacity: 0,
    };

    return (
      <PopoverContentProvider
        value={{ ...value, ...providerValues, isFlipped }}
      >
        <OverlayAnimatePresence
          visible={isOpen}
          AnimatePresence={AnimatePresence}
        >
          <View
            style={{
              position: 'absolute',
              // To align items inside wrapper View
              alignItems:
                calculatedPlacement === 'right'
                  ? 'flex-start'
                  : calculatedPlacement === 'left'
                  ? 'flex-end'
                  : 'center',
              ...overlayProps?.style,
            }}
            ref={overlayRef}
          >
            {arrowElement}
            <FocusScopeComponent contain={trapFocus} restoreFocus autoFocus>
              <StyledPopoverContent
                id={popoverContentId}
                {...accessibilityProps}
                {...props}
                isOpen={isOpen}
                collapsable={false}
                {...dialogProps}
                tabIndex={Platform.OS === 'web' ? -1 : undefined}
                key={placement + calculatedPlacement}
                initial={initialAnimatedStyles}
                animate={animatedStyles}
                exit={exitAnimatedStyles}
                style={popoverContentStyle}
                ref={mergedRef}
                dataSet={{ flip: isFlipped }}
                states={{
                  flip: isFlipped,
                }}
              >
                {children}
              </StyledPopoverContent>
            </FocusScopeComponent>
          </View>
        </OverlayAnimatePresence>
      </PopoverContentProvider>
    );
  });

const FocusScopeComponent = ({ trapFocus, focusScope, children }: any) => {
  if (focusScope)
    return (
      <FocusScopeAria contain={trapFocus} restoreFocus autoFocus>
        {children}
      </FocusScopeAria>
    );
  return children;
};

export default PopoverContent;
