import React from 'react';

export const DateTimePickerIcon = (Icon: React.ComponentType<any>) => {
  return React.forwardRef<any, any>(({ ...props }, ref) => {
    return <Icon ref={ref} {...props} />;
  });
};
