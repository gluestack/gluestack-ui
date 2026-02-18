import React from 'react';

export const DateTimePicker = (Root: React.ComponentType<any>) => {
  return React.forwardRef<any, any>(({ children, ...props }, ref) => {
    return (
      <Root ref={ref} {...props}>
        {children}
      </Root>
    );
  });
};
