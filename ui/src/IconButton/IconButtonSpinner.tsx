import React, { forwardRef } from 'react';
import { UIContext } from '../UIProvider';

const Spinner = (props: any, ref: any) => {
  const { StyledIconButtonSpinner } = React.useContext(UIContext);

  return (
    <StyledIconButtonSpinner
      {...props}
      accessible
      accessibilityLabel="loading"
      ref={ref}
    />
  );
};

export default forwardRef(Spinner);
