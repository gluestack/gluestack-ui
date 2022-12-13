import React, { forwardRef } from 'react';
import { combineContextAndProps } from '../utils/combineContextAndProps';

import { UIContext } from '../UIProvider';
import { useFormControlContext } from './useFormControl';

const FormControlHelperText = ({ children, ...props }: any, ref: any) => {
  const { StyledFormControlHelperText } = React.useContext(UIContext);
  const formControlContext = useFormControlContext();
  const combinedProps = combineContextAndProps(formControlContext, props);

  React.useEffect(() => {
    combinedProps?.setHasHelpText(true);
    return () => {
      combinedProps?.setHasHelpText(false);
    };
  });

  return (
    <StyledFormControlHelperText
      ref={ref}
      {...combinedProps}
      nativeID={combinedProps?.labelId}
    >
      {children}
    </StyledFormControlHelperText>
  );
};

export default forwardRef(FormControlHelperText);
