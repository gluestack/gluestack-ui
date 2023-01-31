import type { PressableProps } from 'react-native';
export interface InterfaceIconButtonProps
  extends Omit<PressableProps, 'children'> {
  /**
   * If true, the button will be disabled.
   */
  isDisabled?: boolean;
  children?:
    | React.ReactNode
    | (({
        isActive,
        isHovered,
        isFocused,
      }: {
        isActive: boolean;
        isHovered: boolean;
        isFocused: boolean;
      }) => any);
}

export type IIconButtonProps = InterfaceIconButtonProps;

export type IIconButtonComponentType<
  StyledIconButton,
  StyledIconButtonText,
  StyledIconButtonSpinner
> = ((props: StyledIconButton & IIconButtonProps) => JSX.Element) & {
  Text: React.MemoExoticComponent<(props: StyledIconButtonText) => JSX.Element>;
  Spinner: React.MemoExoticComponent<
    (props: StyledIconButtonSpinner) => JSX.Element
  >;
};
