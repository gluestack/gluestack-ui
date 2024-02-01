import React, { forwardRef } from 'react';
import type { ICardProps } from './types';

export const Card = <T,>(StyledCard: any) =>
  forwardRef(({ children, ...props }: T & ICardProps, ref?: any) => {
    return (
      <StyledCard ref={ref} {...props}>
        {children}
      </StyledCard>
    );
  });
