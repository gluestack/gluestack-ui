import React, {
  forwardRef,
  useRef,
  createRef,
  useState,
  useEffect,
} from 'react';
import { PinInputProvider } from './PinInputContext';
import { useFormControlContext } from '@gluestack-ui/form-control';

export const PinInputGroup = (StyledPinInputRoot: any) =>
  forwardRef(
    (
      {
        children,
        isReadOnly,
        isDisabled,
        isInvalid,
        isRequired,
        noOfFields = 4,
        value,
        onChange,
        inputRefs,
        ...props
      }: any,
      ref?: any
    ) => {
      const valueOriginal = value || '';
      const [inputValue, setInputValue] = useState(valueOriginal);

      const childRefs = useRef([]) as React.MutableRefObject<
        React.MutableRefObject<any>[]
      >;
      if (childRefs.current.length !== noOfFields) {
        childRefs.current = Array(noOfFields)
          .fill(null)
          .map((_, i) => childRefs.current[i] || createRef());
      }
      if (inputRefs) {
        inputRefs.current = childRefs.current;
      }

      const inputProps = useFormControlContext();

      const handleBackSpace = (index: number, valueOfIndex: string) => {
        if (valueOfIndex === '') {
          setInputValue(inputValue.slice(0, -1));
          childRefs.current[index - 1]?.current?.focus();
        }
      };

      useEffect(() => {
        onChange && onChange(inputValue);
        if (inputValue !== '' && inputValue.length !== noOfFields) {
          childRefs.current[inputValue.length]?.current?.focus();
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [valueOriginal, inputValue]);

      return (
        <StyledPinInputRoot
          states={{
            disabled: isDisabled || inputProps.isDisabled,
            invalid: isInvalid || inputProps.isInvalid,
            readonly: isReadOnly || inputProps.isReadOnly,
            required: isRequired || inputProps.isRequired,
          }}
          dataSet={{
            disabled: isDisabled || inputProps.isDisabled ? 'true' : 'false',
            invalid: isInvalid || inputProps.isInvalid ? 'true' : 'false',
            readonly: isReadOnly || inputProps.isReadOnly ? 'true' : 'false',
            required: isRequired || inputProps.isRequired ? 'true' : 'false',
          }}
          {...props}
          aria-label={props?.['aria-label'] || 'OTP Input'}
          ref={ref}
        >
          <PinInputProvider
            isDisabled={isDisabled || inputProps.isDisabled}
            isInvalid={isInvalid || inputProps.isInvalid}
            isReadOnly={isReadOnly || inputProps.isReadOnly}
            isRequired={isRequired || inputProps.isRequired}
            inputValue={inputValue}
            setInputValue={setInputValue}
            childRefs={childRefs.current}
            handleBackSpace={handleBackSpace}
          >
            {children}
          </PinInputProvider>
        </StyledPinInputRoot>
      );
    }
  );
