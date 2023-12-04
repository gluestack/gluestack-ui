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
  reversed?: boolean;
  isReversed?: boolean;
}

export type IButtonComponentType<
  ButtonProps,
  GroupProps,
  SpinnerProps,
  TextProps,
  IconProps
> = React.ForwardRefExoticComponent<ButtonProps & IButtonProps> & {
  Group: React.ForwardRefExoticComponent<GroupProps & IButtonGroupProps>;
  Spinner: React.ForwardRefExoticComponent<SpinnerProps>;
  Text: React.ForwardRefExoticComponent<TextProps>;
  Icon: React.ForwardRefExoticComponent<IconProps>;
};

export type IButtonProps = InterfaceButtonProps;
