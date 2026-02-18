import React from 'react';

export const DateTimePickerTrigger = (Trigger: React.ComponentType<any>) => {
  return React.forwardRef<any, any>(({ children, ...props }, ref) => {
    return (
      <Trigger ref={ref} {...props}>
        {children}
      </Trigger>
    );
  });
};
