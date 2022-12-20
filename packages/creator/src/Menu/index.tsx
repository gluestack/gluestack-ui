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
  const MenuTemp: any = MenuMain(StyledMenu);
  MenuTemp.Backdrop = MenuBackdrop(StyledMenuBackdrop);
  MenuTemp.Content = MenuContent(StyledMenuContent);
  MenuTemp.Item = MenuItem(StyledMenuItem);
  MenuTemp.Group = MenuGroup(StyledMenuGroup);
  MenuTemp.GroupTitle = MenuGroupTitle(StyledMenuGroupTitle);
  // MenuTemp.OptionGroup = MenuOptionsGroup(StyledMenuOptionsGroup);
  // MenuTemp.OptionsGroup = MenuOptionsGroup(StyledMenuOptionsGroup);
  // MenuTemp.ItemOption = MenuItemOption(StyledMenuItemOption);
  // MenuTemp.ItemOption.Indicator = MenuItemOptionIndicator(
  //   StyledMenuItemOptionIndicator
  // );
  // MenuTemp.ItemOption.Label = MenuItemOptionLabel(StyledMenuItemOptionLabel);

  return MenuTemp;
};
