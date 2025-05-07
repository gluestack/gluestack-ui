export interface InterfaceFormControlProps {
  /**
   * If provided, this prop is passed to its children.
   */
  id?: string;
  /**
   * If true, this prop is passed to its children.
   */
  isInvalid?: boolean;
  /**
   * If true, this prop is passed to its children.
   */
  isRequired?: boolean;
  /**
   * If true, this prop is passed to its children.
   */
  isDisabled?: boolean;
  /**
   * If true, this prop is passed to its children.
   */
  isReadOnly?: boolean;
}

export interface IFormControlLabelProps {
  htmlFor?: string;
}

export type IFormControlComponentType<
  Root,
  Error,
  ErrorText,
  ErrorIcon,
  Label,
  LabelText,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _LabelAstrick,
  Helper,
  HelperText
> = React.ForwardRefExoticComponent<
  InnerForwardRefExoticComponent<Root> & InterfaceFormControlProps
> & {
  Error: React.ForwardRefExoticComponent<
    InnerForwardRefExoticComponent<Error>
  > & {
    Text: React.ForwardRefExoticComponent<
      InnerForwardRefExoticComponent<ErrorText>
    >;
    Icon: React.ForwardRefExoticComponent<
      InnerForwardRefExoticComponent<ErrorIcon>
    >;
  };
  Label: React.ForwardRefExoticComponent<
    InnerForwardRefExoticComponent<Label>
  > & {
    Text: React.ForwardRefExoticComponent<
      InnerForwardRefExoticComponent<LabelText>
    >;
  };
  Helper: React.ForwardRefExoticComponent<
    InnerForwardRefExoticComponent<Helper>
  > & {
    Text: React.ForwardRefExoticComponent<
      InnerForwardRefExoticComponent<HelperText>
    >;
  };
};
export type IFormControlProps = InterfaceFormControlProps;

type InnerForwardRefExoticComponent<T> = React.PropsWithoutRef<T> &
  React.RefAttributes<T>;
