export interface InterfaceFormControlProps {
  /**
   * If provided, this prop is passed to its children.
   */
  nativeID?: string;
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
  LabelAstrick,
  Helper,
  HelperText
> = React.ForwardRefExoticComponent<Root & InterfaceFormControlProps> & {
  Error: React.ForwardRefExoticComponent<Error> & {
    Text: React.ForwardRefExoticComponent<ErrorText>;
    Icon: React.ForwardRefExoticComponent<ErrorIcon>;
  };
  Label: React.ForwardRefExoticComponent<Label> & {
    Text: React.ForwardRefExoticComponent<LabelText>;
    Astrick: React.ForwardRefExoticComponent<LabelAstrick>;
  };
  Helper: React.ForwardRefExoticComponent<Helper> & {
    Text: React.ForwardRefExoticComponent<HelperText>;
  };
};
export type IFormControlProps = InterfaceFormControlProps;
