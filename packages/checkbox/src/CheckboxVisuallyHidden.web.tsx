import React, { forwardRef } from 'react';
import { VisuallyHidden } from '@react-aria/visually-hidden';

const CheckboxVisuallyHidden = forwardRef((props: any, ref: any) => {
  return (
    <VisuallyHidden>
      <input {...props} ref={ref} />
    </VisuallyHidden>
  );
});

export default CheckboxVisuallyHidden;
