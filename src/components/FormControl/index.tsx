import React, { forwardRef } from 'react';
import { createFormControl } from '@gluestack-ui/form-control';
import {
  Root,
  Error,
  ErrorText,
  ErrorIcon,
  Label,
  LabelText,
  LabelAstrick,
  Helper,
  HelperText,
} from './styled-components';
import { usePropResolution } from '../../hooks';
import { GenericComponentType } from '../../types';

const AccessibleFormControl = createFormControl({
  Root,
  Error,
  ErrorText,
  ErrorIcon,
  Label,
  LabelText,
  LabelAstrick,
  Helper,
  HelperText,
});

const FormControlTemp = forwardRef(({ ...props }: any, ref?: any) => {
  return <AccessibleFormControl {...props} ref={ref} />;
});

const FormControlTempLabel = forwardRef(
  ({ children, ...props }: any, ref?: any) => {
    const resolvedProps = usePropResolution(props);
    return (
      <AccessibleFormControl.Label {...resolvedProps} ref={ref}>
        <AccessibleFormControl.Label.Text>
          {children}
        </AccessibleFormControl.Label.Text>
      </AccessibleFormControl.Label>
    );
  }
);

const FormControlTempHelper = forwardRef(
  ({ children, ...props }: any, ref?: any) => {
    const resolvedProps = usePropResolution(props);
    return (
      <AccessibleFormControl.Helper {...resolvedProps} ref={ref}>
        <AccessibleFormControl.Helper.Text>
          {children}
        </AccessibleFormControl.Helper.Text>
      </AccessibleFormControl.Helper>
    );
  }
);

const FormControlTempError = forwardRef(
  (
    { children, leftIcon, rightIcon, startIcon, endIcon, ...props }: any,
    ref?: any
  ) => {
    const resolvedProps = usePropResolution(props);
    return (
      <AccessibleFormControl.Error {...resolvedProps} ref={ref}>
        {leftIcon ? (
          <AccessibleFormControl.Error.Icon as={leftIcon} />
        ) : (
          startIcon && <AccessibleFormControl.Error.Icon as={startIcon} />
        )}
        {typeof children === 'string' && (
          <AccessibleFormControl.Error.Text>
            {children}
          </AccessibleFormControl.Error.Text>
        )}
        {rightIcon ? (
          <AccessibleFormControl.Error.Icon as={rightIcon} />
        ) : (
          endIcon && <AccessibleFormControl.Error.Icon as={endIcon} />
        )}
      </AccessibleFormControl.Error>
    );
  }
);

const FormControlNew = FormControlTemp as any;
FormControlNew.Label = FormControlTempLabel;
FormControlNew.HelperText = FormControlTempHelper;
FormControlNew.ErrorMessage = FormControlTempError;

export type IFormControlComponentType<
  FormControl,
  Label,
  HelperText,
  ErrorMessage
> = GenericComponentType<FormControl> & {
  Label: GenericComponentType<Label>;
  HelperText: GenericComponentType<HelperText>;
  ErrorMessage: GenericComponentType<
    ErrorMessage,
    {
      leftIcon?: any;
      startIcon?: any;
      rightIcon?: any;
      endIcon?: any;
    }
  >;
};

export const FormControl = FormControlNew as IFormControlComponentType<
  typeof AccessibleFormControl,
  typeof AccessibleFormControl.Label,
  typeof AccessibleFormControl.Helper,
  typeof AccessibleFormControl.Error
>;
