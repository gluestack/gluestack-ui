import { default as MenuMain } from './Menu';
import MenuGroup from './MenuGroup';
import MenuItem from './MenuItem';
import MenuItemOption from './MenuItemOption';
import MenuOptionsGroup from './MenuOptionsGroup';
import MenuContent from './MenuContent';
import MenuBackdrop from './MenuBackdrop';
import MenuGroupTitle from './MenuGroupTitle';
import MenuItemOptionIndicator from './MenuItemOptionIndicator';
import MenuItemOptionLabel from './MenuItemOptionLabel';

export const createMenu = ({
  StyledMenu,
  StyledMenuBackdrop,
  StyledMenuContent,
  StyledMenuGroup,
  StyledMenuGroupTitle,
  StyledMenuItem,
  StyledMenuItemOption,
  StyledMenuItemOptionIndicator,
  StyledMenuItemOptionLabel,
  StyledMenuOptionsGroup,
}: any) => {
  const MenuTemp: any = MenuMain(StyledMenu);
  MenuTemp.Backdrop = MenuBackdrop(StyledMenuBackdrop);
  MenuTemp.Content = MenuContent(StyledMenuContent);
  MenuTemp.Item = MenuItem(StyledMenuItem);
  MenuTemp.Group = MenuGroup(StyledMenuGroup);
  MenuTemp.OptionGroup = MenuOptionsGroup(StyledMenuOptionsGroup);
  MenuTemp.OptionsGroup = MenuOptionsGroup(StyledMenuOptionsGroup);
  MenuTemp.GroupTitle = MenuGroupTitle(StyledMenuGroupTitle);
  MenuTemp.ItemOption = MenuItemOption(StyledMenuItemOption);
  MenuTemp.ItemOption.Indicator = MenuItemOptionIndicator(
    StyledMenuItemOptionIndicator
  );
  MenuTemp.ItemOption.Label = MenuItemOptionLabel(StyledMenuItemOptionLabel);

  return MenuTemp;
};
