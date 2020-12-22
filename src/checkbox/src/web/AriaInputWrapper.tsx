import { VisuallyHidden } from '@react-aria/visually-hidden';
import React from 'react';

// TODO: Accept elementType prop (Pressable, TouchableOpacity, etc)
export const AriaInputWrapper = React.forwardRef(function AriaInputWrapper(
  { children, ...props }: any,
  ref
) {
  return (
    <label>
      <VisuallyHidden>
        <input {...props} ref={ref} />
      </VisuallyHidden>
      {children}
    </label>
  );
});
