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
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
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
  React.RefAttributes<ButtonProps> & ButtonProps & IButtonProps
> & {
  Group: React.ForwardRefExoticComponent<
    React.RefAttributes<GroupProps> & GroupProps & IButtonGroupProps
  >;
  Spinner: React.ForwardRefExoticComponent<
    SpinnerProps & React.RefAttributes<SpinnerProps>
  >;
  Text: React.ForwardRefExoticComponent<
    React.RefAttributes<TextProps> & TextProps
  >;
  Icon: React.ForwardRefExoticComponent<
    React.RefAttributes<IconProps> & IconProps
  >;
};

export type IButtonProps = InterfaceButtonProps;
