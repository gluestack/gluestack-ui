import type { ViewProps } from 'react-native';

export interface IAccordionProps extends ViewProps {
  /**
   * Determines whether one or multiple items can be opened at the same time.
   */

  type?: 'single' | 'multiple';

  /**
   * When type is "single" or "multiple", allows closing content when clicking trigger for an open item.
   */

  isCollapsible?: boolean;

  /**
   * The value of the item to expand when initially rendered when type is "single" or "multiple".
   */

  defaultValue?: string[];

  /**
   * The controlled value of the item to expand when type is "single" or "multiple".
   */

  value?: string[];

  /**
   * Event handler called when the expanded state of an item changes and type is "single" or "multiple".
   */

  onValueChange?: (value: string[]) => void;

  /**
   * When true, prevents the user from interacting with the accordion and all its items.
   */

  isDisabled?: boolean;
}

export interface IAccordionItemProps {
  /**
   *   When true, prevents the user from interacting with the accordion and all its items.
   */
  isDisabled?: boolean;
  value: string;
  children: JSX.Element | Array<JSX.Element>;
}

export interface IAccordionTriggerProps {
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
  isExpanded?: boolean;
  children: JSX.Element | Array<JSX.Element> | ((props: any) => JSX.Element);

  /**
   * Event handler called when the trigger is pressed.
   */
  toggleItem?: () => void;
}

export type IAccordionComponentType<
  AccordionProps,
  ItemProps,
  HeaderProps,
  TriggerProps,
  ContentProps,
  IconProps,
  TitleTextProps,
  ContentTextProps
> = React.ForwardRefExoticComponent<AccordionProps & IAccordionProps> & {
  Item: React.ForwardRefExoticComponent<ItemProps & IAccordionItemProps>;
  Header: React.ForwardRefExoticComponent<HeaderProps>;
  Trigger: React.ForwardRefExoticComponent<
    Omit<TriggerProps, 'children'> & IAccordionTriggerProps
  >;
  Content: React.ForwardRefExoticComponent<ContentProps>;
  TitleText: React.ForwardRefExoticComponent<TitleTextProps>;
  ContentText: React.ForwardRefExoticComponent<ContentTextProps>;
  Icon: React.ForwardRefExoticComponent<IconProps>;
};
