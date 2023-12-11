import React, { forwardRef } from 'react';
import { combineContextAndProps } from '@gluestack-ui/utils';
import { useFormControlContext } from './useFormControl';
import { mergeRefs } from '@gluestack-ui/utils';

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
        } else if (combinedProps?.nativeID) {
          _ref.current.htmlFor = combinedProps.nativeID;
        }
      }
    }, [combinedProps?.nativeID, props.htmlFor]);

    return (
      <StyledFormControlLabel
        ref={mergedRef}
        {...combinedProps}
        nativeID={combinedProps?.labelId}
      >
        {children}
        {isRequired && (
          <StyledFormControlLabelAstrick>*</StyledFormControlLabelAstrick>
        )}
      </StyledFormControlLabel>
    );
  });

export default FormControlLabel;
