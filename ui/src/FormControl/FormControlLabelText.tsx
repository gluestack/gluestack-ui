import React, { forwardRef } from 'react';
import { UIContext } from '../UIProvider';

const FormControlLabelText = ({ children, ...props }: any, ref: any) => {
  const { StyledFormControlLabelText } = React.useContext(UIContext);

  return (
    <StyledFormControlLabelText ref={ref} {...props}>
      {children}
    </StyledFormControlLabelText>
  );
};

export default forwardRef(FormControlLabelText);
