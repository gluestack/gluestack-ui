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
import { usePropResolution } from '../../hooks/usePropResolution';

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

type RootProps = React.ComponentProps<typeof AccessibleFormControl>;
type LabelProps = React.ComponentProps<typeof AccessibleFormControl.Label>;
type LabelTextProps = React.ComponentProps<
  typeof AccessibleFormControl.Label.Text
>;
type HelperProps = React.ComponentProps<typeof AccessibleFormControl.Helper>;
type HelperTextProps = React.ComponentProps<
  typeof AccessibleFormControl.Helper.Text
>;
type ErrorProps = React.ComponentProps<typeof AccessibleFormControl.Error>;
type ErrorIconProps = React.ComponentProps<
  typeof AccessibleFormControl.Error.Icon
>;
type ErrorIconPropsAs = React.ForwardRefExoticComponent<
  Omit<any, 'ref'> & React.RefAttributes<unknown>
>;
type ErrorTextProps = React.ComponentProps<
  typeof AccessibleFormControl.Error.Text
>;

const FormControlMain = forwardRef(({ ...props }: RootProps, ref?: any) => {
  return <AccessibleFormControl {...props} ref={ref} />;
});

const AccessibleFormControlLabel = forwardRef(
  ({ children, ...props }: LabelProps, ref?: any) => {
    const resolvedProps = usePropResolution(props);
    return (
      <AccessibleFormControl.Label {...resolvedProps} ref={ref}>
        <AccessibleFormControlLabelText>
          {children}
        </AccessibleFormControlLabelText>
      </AccessibleFormControl.Label>
    );
  }
);

const AccessibleFormControlLabelText = forwardRef(
  ({ children, ...props }: LabelTextProps, ref?: any) => {
    const resolvedProps = usePropResolution(props);
    return (
      <AccessibleFormControl.Label.Text {...resolvedProps} ref={ref}>
        {children}
      </AccessibleFormControl.Label.Text>
    );
  }
);

const AccessibleFormControlHelper = forwardRef(
  ({ children, ...props }: HelperProps, ref?: any) => {
    const resolvedProps = usePropResolution(props);
    return (
      <AccessibleFormControl.Helper {...resolvedProps} ref={ref}>
        <AccessibleFormControlHelperText>
          {children}
        </AccessibleFormControlHelperText>
      </AccessibleFormControl.Helper>
    );
  }
);

const AccessibleFormControlHelperText = forwardRef(
  ({ children, ...props }: HelperTextProps, ref?: any) => {
    const resolvedProps = usePropResolution(props);
    return (
      <AccessibleFormControl.Helper.Text {...resolvedProps} ref={ref}>
        {children}
      </AccessibleFormControl.Helper.Text>
    );
  }
);

const AccessibleFormControlError = forwardRef(
  (
    {
      children,
      leftIcon,
      rightIcon,
      startIcon,
      endIcon,
      ...props
    }: ErrorProps & {
      leftIcon?: ErrorIconPropsAs;
      startIcon?: ErrorIconPropsAs;
      rightIcon?: ErrorIconPropsAs;
      endIcon?: ErrorIconPropsAs;
    },
    ref?: any
  ) => {
    const resolvedProps = usePropResolution(props);
    return (
      <AccessibleFormControl.Error {...resolvedProps} ref={ref}>
        {leftIcon ? (
          <AccessibleFormControlErrorIcon as={leftIcon} />
        ) : (
          startIcon && <AccessibleFormControlErrorIcon as={startIcon} />
        )}
        {typeof children === 'string' && (
          <AccessibleFormControlErrorText>
            {children}
          </AccessibleFormControlErrorText>
        )}
        {rightIcon ? (
          <AccessibleFormControlErrorIcon as={rightIcon} />
        ) : (
          endIcon && <AccessibleFormControlErrorIcon as={endIcon} />
        )}
      </AccessibleFormControl.Error>
    );
  }
);

const AccessibleFormControlErrorText = forwardRef(
  ({ children, ...props }: ErrorTextProps, ref?: any) => {
    const resolvedProps = usePropResolution(props);
    return (
      <AccessibleFormControl.Error.Text {...resolvedProps} ref={ref}>
        {children}
      </AccessibleFormControl.Error.Text>
    );
  }
);

const AccessibleFormControlErrorIcon = forwardRef(
  ({ as, ...props }: ErrorIconProps, ref?: any) => {
    const resolvedProps = usePropResolution(props);
    return (
      <AccessibleFormControl.Error.Icon as={as} {...resolvedProps} ref={ref} />
    );
  }
);

// const FormControlError = FormControl.Error;
// const FormControlLabel = FormControl.Label;
// const FormControlHelper = FormControl.Helper;

// const FormControlErrorText = FormControl.Error.Text;
// const FormControlErrorIcon = FormControl.Error.Icon;
// const FormControlLabelText = FormControl.Label.Text;
// const FormControlLabelAstrick = FormControl.Label.Astrick;
// const FormControlHelperText = FormControl.Helper.Text;

const FC = FormControlMain as any;

FC.Label = AccessibleFormControlLabel;
FC.HelperText = AccessibleFormControlHelper;
FC.ErrorMessage = AccessibleFormControlError;

export const FormControl = FC as typeof FormControlMain & {
  Label: typeof AccessibleFormControlLabel;
  HelperText: typeof AccessibleFormControlHelper;
  ErrorMessage: typeof AccessibleFormControlError;
};
