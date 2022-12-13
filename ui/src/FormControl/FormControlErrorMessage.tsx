import React, { forwardRef } from 'react';
import { combineContextAndProps } from '../utils/combineContextAndProps';
import { UIContext } from '../UIProvider';
import { useFormControlContext } from './useFormControl';

const FormControlErrorMessage = ({ children, ...props }: any, ref: any) => {
  const { StyledFormControlErrorMessage } = React.useContext(UIContext);
  const formControlContext = useFormControlContext();
  const combinedProps = combineContextAndProps(formControlContext, props);
  const { isInvalid, ...remainingProps } = combinedProps;

  React.useEffect(() => {
    remainingProps?.setHasFeedbackText(true);
    return () => {
      remainingProps?.setHasFeedbackText(false);
    };
  });

  return isInvalid && children ? (
    <StyledFormControlErrorMessage ref={ref} {...remainingProps}>
      {children}
    </StyledFormControlErrorMessage>
  ) : null;
};

export default forwardRef(FormControlErrorMessage);
