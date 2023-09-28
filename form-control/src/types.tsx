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
> = React.ForwardRefExoticComponent<
  (props: Root & InterfaceFormControlProps) => JSX.Element
> & {
  Error: React.ForwardRefExoticComponent<(props: Error) => JSX.Element> & {
    Text: React.ForwardRefExoticComponent<(props: ErrorText) => JSX.Element>;
    Icon: React.ForwardRefExoticComponent<(props: ErrorIcon) => JSX.Element>;
  };
  Label: React.ForwardRefExoticComponent<(props: Label) => JSX.Element> & {
    Text: React.ForwardRefExoticComponent<(props: LabelText) => JSX.Element>;
    Astrick: React.ForwardRefExoticComponent<
      (props: LabelAstrick) => JSX.Element
    >;
  };
  Helper: React.ForwardRefExoticComponent<(props: Helper) => JSX.Element> & {
    Text: React.ForwardRefExoticComponent<(props: HelperText) => JSX.Element>;
  };
};
export type IFormControlProps = InterfaceFormControlProps;
