import React, { forwardRef } from 'react';
import { useFormControlProvider, FormControlContext } from './useFormControl';
import type { IFormControlProps } from './types';

const FormControl = <T,>(StyledFormControlBox: React.ComponentType<T>) =>
  forwardRef(({ ...props }: IFormControlProps, ref?: any) => {
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
          dataSet={{
            disabled: isDisabled ? 'true' : 'false',
            invalid: isInvalid ? 'true' : 'false',
          }}
        />
      </FormControlContext.Provider>
    );
  });

export default FormControl;
