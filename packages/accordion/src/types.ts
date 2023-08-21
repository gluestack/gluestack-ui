import type { ViewProps, PressableProps } from 'react-native';

export interface IAccordionProps extends ViewProps {
  /**
   * Determines whether one or multiple items can be opened at the same time.
   */

  type?: 'single' | 'multiple';

  /**
   * When type is "single", allows closing content when clicking trigger for an open item.
   */

  isCloseable?: boolean;

  /**
   * The value of the item to expand when initially rendered when type is "multiple".
   */

  defaultValue?: string[];

  /**
   * The controlled value of the item to expand when type is "multiple".
   */

  value?: string[];

  /**
   * Event handler called when the expanded state of an item changes and type is "single".
   */

  onValueChange?: (value: string) => void;

  /**
   * When true, prevents the user from interacting with the accordion and all its items.
   */

  isDisabled?: boolean;

  /**
   *The orientation of the accordion.
   */

  orientation?: 'horizontal' | 'vertical';
}

export interface IAccordionItemProps {
  /**
   *   When true, prevents the user from interacting with the accordion and all its items.
   */

  isDisabled?: boolean;

  children: JSX.Element | Array<JSX.Element>;
}

export interface IAccordionTriggerProps extends PressableProps {
  isDisabled?: boolean;
  toggleContent?: () => void;
}

export type IAccordionComponentType<
  AccordionProps,
  ItemProps,
  // HeaderProps,
  TriggerProps,
  // IconProps,
  ContentProps
> = ((props: AccordionProps & IAccordionProps) => JSX.Element) & {
  Item: React.MemoExoticComponent<
    (props: ItemProps & IAccordionItemProps) => JSX.Element
  >;
  // Header: React.MemoExoticComponent<(props: HeaderProps) => JSX.Element>;
  Trigger: React.MemoExoticComponent<(props: TriggerProps) => JSX.Element>;
  // Icon: React.MemoExoticComponent<(props: IconProps) => JSX.Element>;
  Content: React.MemoExoticComponent<(props: ContentProps) => JSX.Element>;
};
