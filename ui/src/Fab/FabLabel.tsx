import React, { forwardRef } from 'react';
import { UIContext } from '../UIProvider';

const FabLabel = ({ children, ...props }: any, ref: any) => {
  const { StyledFabLabel } = React.useContext(UIContext);
  return (
    <StyledFabLabel ref={ref} {...props}>
      {children}
    </StyledFabLabel>
  );
};

export default forwardRef(FabLabel);
