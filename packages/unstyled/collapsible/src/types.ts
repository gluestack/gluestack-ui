import type { ViewProps } from 'react-native';

export interface ICollapsibleProps extends ViewProps {
  /**
   * When type is "single" or "multiple", allows closing content when clicking trigger for an open item.
   */

  isOpen?: boolean;

  /**
   * The value of the item to expand when initially rendered when type is "single" or "multiple".
   */

  defaultIsOpen?: boolean;

  /**
   * When true, prevents the user from interacting with the Collapsible and all its items.
   */

  isDisabled?: boolean;

  /**
   * Event handler called when the expanded state of an item changes and type is "single" or "multiple".
   */

  onOpenChange?: (value: string[]) => void;
}

export interface ICollapsibleContentProps {
  /**
   * If true, the content will be visible.
   * @default false
   */
  forceMount: boolean;
}

export interface ICollapsibleTriggerProps {
  /**
   * If true, the button will be in pressed state.
   */
  isPressed?: boolean;

  /**
   * If true, the button will be in disabled state.
   */
  isDisabled?: boolean;

  /**
   * If true, the button will be in hovered state.
   */
  isHovered?: boolean;

  /**
   * If true, the button will be focused.
   */
  isFocused?: boolean;

  /**
   * If true, the button focus ring will be visible.
   */
  isFocusVisible?: boolean;

  children: JSX.Element | Array<JSX.Element> | ((props: any) => JSX.Element);
}

export type ICollapsibleComponentType<
  CollapsibleProps,
  TriggerProps,
  TriggerTextProps,
  ContentProps,
  ContentTextProps
> = React.ForwardRefExoticComponent<CollapsibleProps & ICollapsibleProps> & {
  Trigger: React.ForwardRefExoticComponent<
    Omit<TriggerProps, 'children'> & ICollapsibleTriggerProps
  >;
  TriggerText: React.ForwardRefExoticComponent<TriggerTextProps>;
  Content: React.ForwardRefExoticComponent<ContentProps>;
  ContentText: React.ForwardRefExoticComponent<ContentTextProps>;
};
