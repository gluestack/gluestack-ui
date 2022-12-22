import { default as MenuMain } from './Menu';
import MenuGroup from './MenuGroup';
import MenuItem from './MenuItem';
import MenuContent from './MenuContent';
import MenuBackdrop from './MenuBackdrop';
import MenuGroupTitle from './MenuGroupTitle';
// import MenuItemOption from './MenuItemOption';
// import MenuOptionsGroup from './MenuOptionsGroup';
// import MenuItemOptionIndicator from './MenuItemOptionIndicator';
// import MenuItemOptionLabel from './MenuItemOptionLabel';

export const createMenu = ({
  StyledMenu,
  StyledMenuBackdrop,
  StyledMenuContent,
  StyledMenuGroup,
  StyledMenuGroupTitle,
  StyledMenuItem,
}: // StyledMenuItemOption,
// StyledMenuItemOptionIndicator,
// StyledMenuItemOptionLabel,
// StyledMenuOptionsGroup,
any) => {
  const Menu: any = MenuMain(StyledMenu);
  Menu.Backdrop = MenuBackdrop(StyledMenuBackdrop);
  Menu.Content = MenuContent(StyledMenuContent);
  Menu.Item = MenuItem(StyledMenuItem);
  Menu.Group = MenuGroup(StyledMenuGroup);
  Menu.GroupTitle = MenuGroupTitle(StyledMenuGroupTitle);

  // Menu.OptionGroup = MenuOptionsGroup(StyledMenuOptionsGroup);
  // Menu.OptionsGroup = MenuOptionsGroup(StyledMenuOptionsGroup);
  // Menu.ItemOption = MenuItemOption(StyledMenuItemOption);
  // Menu.ItemOption.Indicator = MenuItemOptionIndicator(
  //   StyledMenuItemOptionIndicator
  // );
  // Menu.ItemOption.Label = MenuItemOptionLabel(StyledMenuItemOptionLabel);
  Menu.displayName = 'Menu';
  Menu.Backdrop.displayName = 'Menu.Backdrop';
  Menu.Content.displayName = 'Menu.Content';
  Menu.Item.displayName = 'Menu.Item';
  Menu.Group.displayName = 'Menu.Group';
  Menu.GroupTitle.displayName = 'Menu.GroupTitle';

  return Menu;
};
