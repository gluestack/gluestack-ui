import { PropsWithoutRef, RefAttributes } from 'react';
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
  PropsWithoutRef<ButtonProps & IButtonProps> & RefAttributes<ButtonProps>
> & {
  Group: React.ForwardRefExoticComponent<
    RefAttributes<GroupProps> & PropsWithoutRef<GroupProps & IButtonGroupProps>
  >;
  Spinner: React.ForwardRefExoticComponent<
    PropsWithoutRef<SpinnerProps> & React.RefAttributes<SpinnerProps>
  >;
  Text: React.ForwardRefExoticComponent<
    React.RefAttributes<TextProps> & PropsWithoutRef<TextProps>
  >;
  Icon: React.ForwardRefExoticComponent<
    React.RefAttributes<IconProps> & PropsWithoutRef<IconProps>
  >;
};

export type IButtonProps = InterfaceButtonProps;
