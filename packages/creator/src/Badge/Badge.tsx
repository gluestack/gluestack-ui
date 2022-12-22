import React, { forwardRef } from 'react';
import { BadgeProvider } from './BadgeContext';

export const Badge = (StyledBadge: any) =>
  forwardRef(({ children, ...props }: any, ref: any) => {
    return (
      <StyledBadge ref={ref} {...props}>
        {({ resolveContextChildrenStyle }: any) => {
          return (
            <BadgeProvider
              resolveContextChildrenStyle={resolveContextChildrenStyle}
            >
              {children}
            </BadgeProvider>
          );
        }}
      </StyledBadge>
    );
  });
