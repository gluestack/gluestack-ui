import React, { forwardRef } from 'react';
import { UIContext } from '../UIProvider';

const Center = ({ children, ...props }: any, ref: any) => {
  const { Center: StyledCenter } = React.useContext(UIContext);
  return (
    <StyledCenter ref={ref} {...props}>
      {children}
    </StyledCenter>
  );
};

export default forwardRef(Center);
