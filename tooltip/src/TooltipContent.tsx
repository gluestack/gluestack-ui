import React, { forwardRef } from 'react';
import { useTooltipContext } from './context';
import { Platform } from 'react-native';
import { mergeRefs } from '@universa11y/utils';
import { useOverlayPosition } from '@react-native-aria/overlays';

export function TooltipContent<StyledTooltipContentProps>(
  StyledTooltipContent: React.ComponentType<StyledTooltipContentProps>
) {
  return forwardRef(
    (
      {
        children,
        style,
        ...props
      }: StyledTooltipContentProps & { children?: any; style?: any },
      ref: any
    ) => {
      const { value } = useTooltipContext('TooltipContext');
      const { targetRef, placement } = value;
      let overlayRef = React.useRef(null);
      const { overlayProps } = useOverlayPosition({
        placement,
        targetRef,
        overlayRef,
        offset: 10,
      });
      const mergedRef = mergeRefs([ref, overlayRef]);

      return (
        <StyledTooltipContent
          ref={mergedRef}
          {...(props as StyledTooltipContentProps)}
          accessibilityRole={Platform.OS === 'web' ? 'tooltip' : undefined}
          style={{
            ...overlayProps.style,
            position: 'absolute',
            ...style,
          }}
        >
          {children}
        </StyledTooltipContent>
      );
    }
  );
}
