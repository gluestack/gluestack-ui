import type { Key } from 'react';
import type { ItemProps } from 'react-stately';
export interface InterfaceMenuProps {
  /**
   * Function that returns a React Element. This element will be used as a Trigger for the menu.
   */
  trigger: (_props: any, state: { open: boolean }) => JSX.Element;
  /**
   * This function will be invoked when the menu is opened.
   */
  onOpen?: () => void;
  /**
   * This function will be invoked when menu is closed.  It will also be called when the user attempts to close the menu via Escape key or backdrop press.
   */
  onClose?: () => void;
  /**
   * Whether menu should be closed when a menu item is pressed.
   * @default true
   */
  // closeOnSelect?: boolean;
  /**
   * If true, the menu will be opened by default.
   */
  defaultIsOpen?: boolean;
  /**
   * Whether the menu is opened. Useful for controlling the open state.
   */
  isOpen?: boolean;
  /**
   * The additional offset applied along the cross axis between the element and its trigger element.
   */
  crossOffset?: number;
  /**
   * The additional offset applied along the main axis between the element and its trigger element.
   */
  offset?: number;
  /**
   * Determines whether menu content should overlap with the trigger.
   * @default false
   */
  // shouldOverlapWithTrigger?: boolean;
  /**
   * menu placement
   * @default 'bottom left'
   */
  placement?:
    | 'top'
    | 'bottom'
    | 'left'
    | 'right'
    | 'top left'
    | 'top right'
    | 'bottom left'
    | 'bottom right'
    | 'right top'
    | 'right bottom'
    | 'left top'
    | 'left bottom';

  children?: any;
  /** Determines whether menu should flip or not
   * @default true
   */
  shouldFlip?: boolean;
  /**
   * The type of selection that is allowed in the collection.
   */
  selectionMode?: 'single' | 'multiple' | 'none';
  /**
   * Handler that is called when the selection changes.
   */
  onSelectChange?: (keys: 'all' | Set<Key>) => void;
  /**
   * This prop determine whether menu is closed after option is selected.
   * @default true
   */
  closeOnSelect?: boolean;
}

export interface IItemProp {
  /**
   * This prop determine whether menu is closed after option is selected.
   * @default true
   */
  closeOnSelect?: boolean;
}
export type IMenuProps = InterfaceMenuProps;

export type IMenuComponentType<Root, Item, Label> = ((
  props: Root & IMenuProps
) => JSX.Element) & {
  Item: React.MemoExoticComponent<
    (props: Item & ItemProps<Item> & IItemProp) => JSX.Element
  >;
  ItemLabel: React.MemoExoticComponent<(props: Label) => JSX.Element>;
};
