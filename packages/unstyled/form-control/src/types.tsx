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
> = React.ForwardRefExoticComponent<Root & InterfaceFormControlProps> & {
  Error: React.ForwardRefExoticComponent<Error> & {
    Text: React.ForwardRefExoticComponent<ErrorText>;
    Icon: React.ForwardRefExoticComponent<ErrorIcon>;
  };
  Label: React.ForwardRefExoticComponent<Label> & {
    Text: React.ForwardRefExoticComponent<LabelText>;
  };
  Helper: React.ForwardRefExoticComponent<Helper> & {
    Text: React.ForwardRefExoticComponent<HelperText>;
  };
};
export type IFormControlProps = InterfaceFormControlProps;
