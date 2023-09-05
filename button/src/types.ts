import type { PressableProps } from 'react-native';

export interface InterfaceButtonProps extends PressableProps {
  /**
   * If true, the button will be in hovered state.
   */
  isHovered?: boolean;
  /**
   * If true, the button will be in pressed state.
   */
  isPressed?: boolean;
  /**
   * If true, the button will be focused.
   */
  isFocused?: boolean;
  /**
   * If true, the button focus ring will be visible.
   */
  isFocusVisible?: boolean;
  /**
   * If true, the button will be disabled.
   */
  isDisabled?: boolean;
}

export interface IButtonGroupProps {
  /**
   * The direction of the Stack Items.
   * @default row
   */
  direction?: 'column' | 'row';
  /**
   *
   */
  children: JSX.Element | Array<JSX.Element>;

  /**
   * If true, the button will be disabled.
   */
  isDisabled?: boolean;
  /**
   * If true, button will be atttached together.
   */
  isAttached?: boolean;
  isReversed?: boolean;
}

export type IButtonComponentType<
  ButtonProps,
  GroupProps,
  GroupHSpacerProps,
  GroupVSpacerProps,
  SpinnerProps,
  TextProps,
  IconProps
> = ((props: ButtonProps & IButtonProps) => JSX.Element) & {
  Group: React.MemoExoticComponent<
    (props: GroupProps & IButtonGroupProps) => JSX.Element
  >;
  GroupHSpacerProps: React.MemoExoticComponent<
    (props: GroupHSpacerProps) => JSX.Element
  >;
  GroupVSpacerProps: React.MemoExoticComponent<
    (props: GroupVSpacerProps) => JSX.Element
  >;
  Spinner: React.MemoExoticComponent<(props: SpinnerProps) => JSX.Element>;
  Text: React.MemoExoticComponent<(props: TextProps) => JSX.Element>;
  Icon: React.MemoExoticComponent<(props: IconProps) => JSX.Element>;
};

export type IButtonProps = InterfaceButtonProps;
