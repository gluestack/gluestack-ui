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
  closeOnSelect?: boolean;
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
  shouldOverlapWithTrigger?: boolean;
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
}

export interface IMenuItemProps {
  /**
   * Children of Menu Item.
   */
  children: string | JSX.Element | Array<JSX.Element>;
  /**
   * Whether menu item is disabled.
   */
  isDisabled?: boolean;
  /**
   * This value will be available for the typeahead menu feature.
   */
  textValue?: string;
}

export interface IMenuItemOptionProps extends IMenuItemProps {
  /**
   * Value of the Menu Item option.
   */
  value: string | number;
}

export interface IMenuOptionGroupProps {
  /**
   * Used to add selection type of menu group.
   */
  type: 'radio' | 'checkbox';
  /**
   * The initial value of the option group.
   */
  defaultValue?: string | number | string[] | number[];
  /**
   * The value of the option group.
   */
  value?: string | number | Array<string> | Array<number>;
  /**
   * Function called when selection changes.
   */
  onChange?: (val: any) => void;
}

export type IMenuOptionContextProps = {
  values: Array<string | number>;
  onChange: (val: string | number) => void;
  type: 'radio' | 'checkbox';
};

export type IMenuComponenType<
  Root,
  Backdrop,
  Content,
  Group,
  GroupTitle,
  MenuItem
> = ((props: Root & IMenuProps) => JSX.Element) & {
  Item: React.MemoExoticComponent<
    (props: MenuItem & IMenuItemProps) => JSX.Element
  >;
  Group: React.MemoExoticComponent<(props: Group) => JSX.Element>;
  GroupTitle: React.MemoExoticComponent<(props: GroupTitle) => JSX.Element>;
  Content: React.MemoExoticComponent<(props: Content) => JSX.Element>;
  Backdrop: React.MemoExoticComponent<(props: Backdrop) => JSX.Element>;
};

export type IMenuContextProps = {
  closeMenu?: () => void;
  open?: boolean;
  closeOnSelect?: boolean;
};
export type IMenuProps = InterfaceMenuProps;
