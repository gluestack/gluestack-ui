import React, { forwardRef } from 'react';
import { useFormControlProvider, FormControlContext } from './useFormControl';

const FormControl = ({ StyledFormControlBox }: any) =>
  forwardRef(({ ...props }: any, ref: any) => {
    const { htmlProps, ...context } = useFormControlProvider(props);

    const { isDisabled, isInvalid, ...remainingProps } = context;

    return (
      <FormControlContext.Provider value={context}>
        <StyledFormControlBox
          ref={ref}
          {...remainingProps}
          {...htmlProps}
          states={{
            disabled: isDisabled,
            invalid: isInvalid,
          }}
        />
      </FormControlContext.Provider>
    );
  });

export default FormControl;
