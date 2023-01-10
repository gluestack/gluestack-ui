import React, { forwardRef } from 'react';

export function ButtonText<T>(StyledButtonText: React.ComponentType<T>) {
  return forwardRef(
    (
      {
        children,
        ...props
      }: T & {
        children?: React.ReactNode | string;
      },
      ref: any
    ) => {
      return (
        <StyledButtonText ref={ref} {...(props as T)}>
          {children}
        </StyledButtonText>
      );
    }
  );
}
