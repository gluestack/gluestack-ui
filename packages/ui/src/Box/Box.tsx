import React, { forwardRef } from 'react';
import { UIContext } from '../UIProvider';

const Box = ({ children, ...props }: any, ref: any) => {
  const { StyledBox } = React.useContext(UIContext);

  return (
    <StyledBox ref={ref} {...props}>
      {children}
    </StyledBox>
  );
};

export default forwardRef(Box);
