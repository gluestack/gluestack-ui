import React, { forwardRef } from 'react';
import { combineContextAndProps } from '@gluestack-ui/utils';
import { useFormControlContext } from './useFormControl';

const FormControlError = (StyledFormControlError: any) =>
  forwardRef(({ children, ...props }: any, ref?: any) => {
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
      <StyledFormControlError ref={ref} {...remainingProps}>
        {children}
      </StyledFormControlError>
    ) : null;
  });

export default FormControlError;
