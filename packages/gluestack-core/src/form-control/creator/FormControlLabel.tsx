import React, { forwardRef } from 'react';
import { combineContextAndProps } from '@gluestack-ui/utils/common';
import { useFormControlContext } from './useFormControl';
import { mergeRefs } from '@gluestack-ui/utils/common';

const FormControlLabel = ({
  Label: StyledFormControlLabel,
  LabelAstrick: StyledFormControlLabelAstrick,
}: any) =>
  forwardRef(({ children, ...props }: any, ref?: any) => {
    const formControlContext = useFormControlContext();
    const { isRequired, ...combinedProps } = combineContextAndProps(
      formControlContext,
      props
    );
    const _ref = React.useRef<HTMLLabelElement>(null);

    const mergedRef = mergeRefs([_ref, ref]);

    React.useEffect(() => {
      if (_ref.current) {
        // RN web doesn't support htmlFor for Label element yet
        if (props.htmlFor) {
          _ref.current.htmlFor = props.htmlFor;
        } else if (combinedProps?.id) {
          _ref.current.htmlFor = combinedProps.id;
        }
      }
    }, [combinedProps?.id, props.htmlFor]);

    const targetId = props.htmlFor || combinedProps?.id;

    const handleClick = React.useCallback(
      (e: any) => {
        props?.onClick?.(e);

        if (!targetId || typeof document === 'undefined') return;

        const inputElement = document.getElementById(targetId);
        if (inputElement instanceof HTMLInputElement) {
          inputElement.click();
        }
      },
      [targetId, props.onClick]
    );

    return (
      <StyledFormControlLabel
        ref={mergedRef}
        {...combinedProps}
        id={combinedProps?.labelId}
        onClick={handleClick}
      >
        {children}
        {isRequired && (
          <StyledFormControlLabelAstrick>*</StyledFormControlLabelAstrick>
        )}
      </StyledFormControlLabel>
    );
  });

export default FormControlLabel;
