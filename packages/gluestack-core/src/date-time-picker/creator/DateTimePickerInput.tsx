import React from 'react';

export const DateTimePickerInput = (Input: React.ComponentType<any>) => {
  return React.forwardRef<any, any>(({ ...props }, ref) => {
    return <Input ref={ref} {...props} />;
  });
};
