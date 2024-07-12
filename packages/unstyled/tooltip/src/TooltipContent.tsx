import React, { forwardRef } from 'react';
import { useTooltipContext } from './context';
import { mergeRefs } from '@gluestack-ui/utils';
import { useOverlayPosition } from '@react-native-aria/overlays';
import { OverlayAnimatePresence } from './OverlayAnimatePresence';
import { Platform } from 'react-native';

export function TooltipContent<StyledTooltipContentProps>(
  StyledTooltipContent: React.ComponentType<StyledTooltipContentProps>,
  AnimatePresence?: React.ComponentType<any>
) {
  return forwardRef(({ children, style, ...props }: any, ref?: any) => {
    const { value } = useTooltipContext('TooltipContext');
    const {
      isOpen,
      targetRef,
      placement,
      crossOffset,
      offset,
      shouldFlip,
      shouldOverlapWithTrigger,
    } = value;
    const overlayRef = React.useRef(null);
    const { overlayProps, placement: calculatedPlacement } = useOverlayPosition(
      {
        placement,
        targetRef,
        overlayRef,
        crossOffset,
        offset,
        shouldOverlapWithTrigger,
        shouldFlip,
      }
    );

    if (Object.keys(overlayProps.style).length === 0) {
      overlayProps.style = {
        top: -1000,
        left: -1000,
      };
    }
    const mergedRef = mergeRefs([ref, overlayRef]);

    const initialAnimatedStyles = {
      opacity: 0,
      scale: 0.9,
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
      scale: 1,
      x: 0,
    };

    const exitAnimatedStyles = {
      opacity: 0,
      x: 0,
      y: 0,
    };

    return (
      <OverlayAnimatePresence
        visible={isOpen}
        AnimatePresence={AnimatePresence}
      >
        <StyledTooltipContent
          initial={initialAnimatedStyles}
          animate={animatedStyles}
          exit={exitAnimatedStyles}
          transition={{
            type: 'timing',
            duration: 100,
          }}
          {...props}
          ref={mergedRef}
          key={placement + calculatedPlacement}
          role={Platform.OS === 'web' ? 'tooltip' : undefined}
          style={[overlayProps.style, { position: 'absolute' }, style]}
        >
          {children}
        </StyledTooltipContent>
      </OverlayAnimatePresence>
    );
  });
}
