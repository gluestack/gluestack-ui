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
    const { overlayProps } = useOverlayPosition({
      placement,
      targetRef,
      overlayRef,
      crossOffset,
      offset,
      shouldOverlapWithTrigger,
      shouldFlip,
    });
    const mergedRef = mergeRefs([ref, overlayRef]);

    return (
      <OverlayAnimatePresence
        visible={isOpen}
        AnimatePresence={AnimatePresence}
      >
        <StyledTooltipContent
          {...props}
          ref={mergedRef}
          role={Platform.OS === 'web' ? 'tooltip' : undefined}
          style={{
            ...overlayProps.style,
            position: 'absolute',
            ...style,
          }}
        >
          {children}
        </StyledTooltipContent>
      </OverlayAnimatePresence>
    );
  });
}
