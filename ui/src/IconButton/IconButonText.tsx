import React, { forwardRef } from 'react';
import { UIContext } from '../UIProvider';

const IconButonText = ({ children, ...props }: any, ref: any) => {
  const { StyledIconButtonText } = React.useContext(UIContext);
  return (
    <StyledIconButtonText ref={ref} {...props}>
      {children}
    </StyledIconButtonText>
  );
};

export default forwardRef(IconButonText);
