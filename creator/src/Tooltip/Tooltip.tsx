import React, { useEffect, forwardRef } from 'react';
import { useControllableState, useKeyboardDismissable } from '../hooks';
import { composeEventHandlers, mergeRefs } from '../utils';
// import { OverlayContainer } from '@react-native-aria/overlays';
import { PresenceTransition } from '../Transitions';
import {
  Platform,
  StyleSheet,
  //  Text, View
} from 'react-native';
// import { Overlay } from '../Overlay';
import { Popper } from '@gluestack/popper';
// import { v4 as uuidv4 } from 'uuid';

const Tooltip = (StyledTooltip: any) =>
  forwardRef(
    ({
      children,
      label,
      onClose,
      onOpen,
      defaultIsOpen,
      placement = 'bottom',
      openDelay = 0,
      closeDelay = 0,
      closeOnClick = true,
      offset,
      isDisabled,
      hasArrow = true,
      arrowSize = 12,
      isOpen: isOpenProp,
      ...props
    }: any) => {
      if (hasArrow && offset === undefined) {
        offset = 0;
      } else {
        offset = 6;
      }

      const [isOpen, setIsOpen] = useControllableState({
        value: isOpenProp,
        defaultValue: defaultIsOpen,
        onChange: (value) => {
          value ? onOpen && onOpen() : onClose && onClose();
        },
      });

      // const arrowBg =
      //   props.backgroundColor ?? props.bgColor ?? props.bg ?? resolvedProps.bg;

      const targetRef = React.useRef(null);

      const enterTimeout = React.useRef<any>();
      const exitTimeout = React.useRef<any>();

      // const tooltipID = uuidv4();
      const tooltipID = 1234;

      const openWithDelay = React.useCallback(() => {
        if (!isDisabled) {
          enterTimeout.current = setTimeout(() => setIsOpen(true), openDelay);
        }
      }, [isDisabled, setIsOpen, openDelay]);

      const closeWithDelay = React.useCallback(() => {
        if (enterTimeout.current) {
          clearTimeout(enterTimeout.current);
        }
        exitTimeout.current = setTimeout(() => setIsOpen(false), closeDelay);
      }, [closeDelay, setIsOpen]);

      useEffect(
        () => () => {
          clearTimeout(enterTimeout.current);
          clearTimeout(exitTimeout.current);
        },
        []
      );

      let newChildren = children;

      newChildren = React.cloneElement(newChildren, {
        'onPress': composeEventHandlers<any>(newChildren.props.onPress, () => {
          if (closeOnClick) {
            closeWithDelay();
          }
        }),
        'onFocus': composeEventHandlers<any>(
          newChildren.props.onFocus,
          openWithDelay
        ),
        'onBlur': composeEventHandlers<any>(
          newChildren.props.onBlur,
          closeWithDelay
        ),
        'onMouseEnter': composeEventHandlers<any>(
          newChildren.props.onMouseEnter,
          openWithDelay
        ),
        'onMouseLeave': composeEventHandlers<any>(
          newChildren.props.onMouseLeave,
          closeWithDelay
        ),
        'ref': mergeRefs([newChildren.ref, targetRef]),

        'aria-describedby': isOpen ? tooltipID : undefined,
      });

      useKeyboardDismissable({
        enabled: isOpen,
        callback: () => setIsOpen(false),
      });

      return (
        <>
          {newChildren}
          {isOpen && (
            // <OverlayContainer>
            // <Overlay>
            <PresenceTransition
              // initial={{ opacity: 0 }}
              // animate={{ opacity: 1, transition: { duration: 150 } }}
              // exit={{ opacity: 0, transition: { duration: 100 } }}
              visible={true}
              style={StyleSheet.absoluteFill}
            >
              <Popper
                triggerRef={targetRef}
                onClose={() => setIsOpen(false)}
                placement={placement}
                offset={offset}
              >
                <Popper.Content isOpen={isOpen}>
                  {hasArrow && (
                    <Popper.Arrow
                      borderColor="transparent"
                      // backgroundColor={arrowBg}
                      height={arrowSize}
                      width={arrowSize}
                    />
                  )}
                  <StyledTooltip
                    {...props}
                    accessibilityRole={
                      Platform.OS === 'web' ? 'tooltip' : undefined
                    }
                    nativeID={tooltipID}
                  >
                    {label}
                  </StyledTooltip>
                </Popper.Content>
              </Popper>
            </PresenceTransition>
            // </Overlay>
            // </OverlayContainer>
          )}
        </>
      );
    }
  );

export { Tooltip };
