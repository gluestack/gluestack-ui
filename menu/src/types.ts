import type { ItemProps, Selection } from 'react-stately';
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
  onSelectionChange?: (keys: Selection) => void;
  /**
   * This prop determine whether menu is closed after option is selected.
   * @default true
   */
  closeOnSelect?: boolean;
  /**
   * The currently selected keys in the collection (controlled).
   */
  selectedKeys?: Selection;
  /**
   * The currently disabled keys in the collection.
   */
  disabledKeys?: string[];
}

export interface IItemProp {
  /**
   * This prop determine whether menu is closed after option is selected.
   * @default true
   */
  closeOnSelect?: boolean;
  /**
   * The textValue for the item. Need to be passed if direct child is not
   * a string or if you want to override the default textValue.
   */
  textValue?: string;
}
export type IMenuProps = InterfaceMenuProps;

export type IMenuComponentType<Root, Item, Label> =
  React.ForwardRefExoticComponent<Root & IMenuProps> & {
    Item: React.ForwardRefExoticComponent<Item & ItemProps<Item> & IItemProp>;
    ItemLabel: React.ForwardRefExoticComponent<Label>;
  };
