import React, { forwardRef } from 'react';
import { combineContextAndProps } from '@gluestack-ui/utils';
import { useFormControlContext } from './useFormControl';

const FormControlHelper = (StyledFormControlHelper: any) =>
  forwardRef(({ children, ...props }: any, ref?: any) => {
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
  });

export default FormControlHelper;
