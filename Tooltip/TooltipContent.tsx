import React, { forwardRef } from 'react';
import { usePopperContext } from '../Popper/PopperContext';
import { Platform } from 'react-native';
import { mergeRefs } from '../utils';

export const TooltipContent = (StyledTooltipContent: any) =>
  forwardRef(({ children, ...props }: any, ref: any) => {
    const { value } = usePopperContext('PopperContext');
    const { x, y, strategy, floating } = value;
    const mergedRef = mergeRefs([ref, floating]);
    return (
      <StyledTooltipContent
        ref={mergedRef}
        {...props}
        accessibilityRole={Platform.OS === 'web' ? 'tooltip' : undefined}
        sx={{
          style: {
            position: strategy,
            top: y ?? 10,
            left: x ?? 10,
          },
        }}
      >
        {children}
      </StyledTooltipContent>
    );
  });
