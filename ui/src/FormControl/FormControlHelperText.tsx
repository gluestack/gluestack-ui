import React, { forwardRef } from 'react';
import { UIContext } from '../UIProvider';

const FormControlHelperText = ({ children, ...props }: any, ref: any) => {
  const { StyledFormControlHelperText } = React.useContext(UIContext);

  return (
    <StyledFormControlHelperText ref={ref} {...props}>
      {children}
    </StyledFormControlHelperText>
  );
};

export default forwardRef(FormControlHelperText);
