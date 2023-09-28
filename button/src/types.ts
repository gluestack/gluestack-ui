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
  /**
   * If 0, the button will be foucusable
   */
  tabIndex?: 0 | -1;
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
  reversed?: boolean;
  isReversed?: boolean;
}

export type IButtonComponentType<
  ButtonProps,
  GroupProps,
  SpinnerProps,
  TextProps,
  IconProps
> = React.ForwardRefExoticComponent<
  (props: ButtonProps & IButtonProps) => JSX.Element
> & {
  Group: React.ForwardRefExoticComponent<
    (props: GroupProps & IButtonGroupProps) => JSX.Element
  >;
  Spinner: React.ForwardRefExoticComponent<
    (props: SpinnerProps) => JSX.Element
  >;
  Text: React.ForwardRefExoticComponent<(props: TextProps) => JSX.Element>;
  Icon: React.ForwardRefExoticComponent<(props: IconProps) => JSX.Element>;
};

export type IButtonProps = InterfaceButtonProps;
