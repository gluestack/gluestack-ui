export interface InterfaceFabProps {
  /**
   * If true, the button will show a spinner.
   */
  placement?:
    | 'top left'
    | 'top right'
    | 'bottom left'
    | 'bottom right'
    | 'top center'
    | 'bottom center';
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

export type IFabComponentType<StyledFab, StyledFabLabel, StyledFabIcon> =
  React.ForwardRefExoticComponent<
    (props: StyledFab & InterfaceFabProps) => JSX.Element
  > & {
    Label: React.ForwardRefExoticComponent<
      (props: StyledFabLabel) => JSX.Element
    >;
    Icon: React.ForwardRefExoticComponent<
      (props: StyledFabIcon) => JSX.Element
    >;
  };
