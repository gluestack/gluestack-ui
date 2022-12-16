import React, { forwardRef } from 'react';
import { UIContext } from '../UIProvider';

const Spinner = (props: any, ref: any) => {
  const { StyledButtonSpinner } = React.useContext(UIContext);

  return (
    <StyledButtonSpinner
      {...props}
      accessible
      accessibilityLabel="loading"
      ref={ref}
    />
  );
};

export default forwardRef(Spinner);
