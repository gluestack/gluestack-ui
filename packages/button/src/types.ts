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
}

export type IButtonComponentType<A, B, C, D, E, F> = ((
  props: A & IButtonProps
) => JSX.Element) & {
  Group: React.MemoExoticComponent<
    (props: B & IButtonGroupProps) => JSX.Element
  >;
  GroupHSpacerProps: React.MemoExoticComponent<(props: C) => JSX.Element>;
  GroupVSpacerProps: React.MemoExoticComponent<(props: D) => JSX.Element>;
  Spinner: React.MemoExoticComponent<(props: E) => JSX.Element>;
  Text: React.MemoExoticComponent<(props: F) => JSX.Element>;
};

export type IButtonProps = InterfaceButtonProps;
