import React, { forwardRef } from 'react';
import { combineContextAndProps } from '../utils/combineContextAndProps';

import { UIContext } from '../UIProvider';
import { useFormControlContext } from './useFormControl';

const FormControlHelper = ({ children, ...props }: any, ref: any) => {
  const { StyledFormControlHelper } = React.useContext(UIContext);
  const formControlContext = useFormControlContext();
  const combinedProps = combineContextAndProps(formControlContext, props);

  React.useEffect(() => {
    combinedProps?.setHasHelpText(true);
    return () => {
      combinedProps?.setHasHelpText(false);
    };
  });

  return (
    <StyledFormControlHelper
      ref={ref}
      {...combinedProps}
      nativeID={combinedProps?.labelId}
    >
      {children}
    </StyledFormControlHelper>
  );
};

export default forwardRef(FormControlHelper);
