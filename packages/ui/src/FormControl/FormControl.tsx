import React, { forwardRef } from 'react';
import { UIContext } from '../UIProvider';
import { useFormControlProvider, FormControlContext } from './useFormControl';

const Box = ({ ...props }: any, ref: any) => {
  const { StyledFormControlBox } = React.useContext(UIContext);
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
};

export default forwardRef(Box);
