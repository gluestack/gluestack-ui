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
> = ((props: Root & InterfaceFormControlProps) => JSX.Element) & {
  Error: React.MemoExoticComponent<(props: Error) => JSX.Element> & {
    Text: React.MemoExoticComponent<(props: ErrorText) => JSX.Element>;
    Icon: React.MemoExoticComponent<(props: ErrorIcon) => JSX.Element>;
  };
  Label: React.MemoExoticComponent<(props: Label) => JSX.Element> & {
    Text: React.MemoExoticComponent<(props: LabelText) => JSX.Element>;
    Astrick: React.MemoExoticComponent<(props: LabelAstrick) => JSX.Element>;
  };
  Helper: React.MemoExoticComponent<(props: Helper) => JSX.Element> & {
    Text: React.MemoExoticComponent<(props: HelperText) => JSX.Element>;
  };
};
export type IFormControlProps = InterfaceFormControlProps;
