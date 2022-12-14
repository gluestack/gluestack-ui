import { default as MenuMain } from './Menu';
import MenuGroup from './MenuGroup';
import MenuItem from './MenuItem';
import MenuItemOption from './MenuItemOption';
import MenuOptionsGroup from './MenuOptionsGroup';
// import MenuContent from './MenuContent';
import MenuBackdrop from './MenuBackdrop';
import MenuGroupTitle from './MenuGroupTitle';
import MenuItemOptionIndicator from './MenuItemOptionIndicator';
import MenuItemOptionLabel from './MenuItemOptionLabel';

let MenuTemp: any = MenuMain;
MenuTemp.Item = MenuItem;
MenuTemp.Group = MenuGroup;
MenuTemp.OptionGroup = MenuOptionsGroup;
MenuTemp.Backdrop = MenuBackdrop;
MenuTemp.OptionsGroup = MenuOptionsGroup;
MenuTemp.GroupTitle = MenuGroupTitle;
MenuTemp.ItemOption = MenuItemOption;
MenuTemp.ItemOption.Indicator = MenuItemOptionIndicator;
MenuTemp.ItemOption.Label = MenuItemOptionLabel;

// To add typings
const Menu = MenuTemp as any;

export { Menu };
