import { default as MenuMain } from './Menu';
import MenuGroup from './MenuGroup';
import MenuItem from './MenuItem';
import MenuItemOption from './MenuItemOption';
import MenuOptionGroup from './MenuOptionGroup';
import MenuContent from './MenuContent';
import MenuBackdrop from './MenuBackdrop';
// import type { IMenuComponent } from './types';

let MenuTemp: any = MenuMain;
MenuTemp.Item = MenuItem;
MenuTemp.Group = MenuGroup;
MenuTemp.ItemOption = MenuItemOption;
MenuTemp.OptionGroup = MenuOptionGroup;
MenuTemp.Backdrop = MenuBackdrop;
MenuTemp.Content = MenuContent;

// To add typings
const Menu = MenuTemp as any;

export { Menu };
// export type {
//   IMenuProps,
//   IMenuItemProps,
//   IMenuItemOptionProps,
//   IMenuGroupProps,
//   IMenuOptionGroupProps,
// } from './types';
