import { default as MenuMain, MenuItem } from './Menu';
import MenuGroup from './MenuGroup';
// import MenuItem from './MenuItem';
// import MenuItem from './MenuItem';

import MenuContent from './MenuContent';
import MenuBackdrop from './MenuBackdrop';
import MenuGroupTitle from './MenuGroupTitle';
import type { IMenuComponenType } from './types';
// import MenuItemOption from './MenuItemOption';
// import MenuOptionsGroup from './MenuOptionsGroup';
// import MenuItemOptionIndicator from './MenuItemOptionIndicator';
// import MenuItemOptionLabel from './MenuItemOptionLabel';

export const createMenu = <Root, Backdrop, Content, Group, GroupTitle, Item>({
  Root,
  Backdrop,
  Content,
  Group,
  GroupTitle,
  Item,
}: {
  Root: React.ComponentType<Root>;
  Backdrop: React.ComponentType<Backdrop>;
  Content: React.ComponentType<Content>;
  Group: React.ComponentType<Group>;
  GroupTitle: React.ComponentType<GroupTitle>;
  Item: React.ComponentType<Item>;
}) => {
  const Menu: any = MenuMain(Root);
  Menu.Backdrop = MenuBackdrop(Backdrop);
  Menu.Content = MenuContent(Content);
  // Menu.Item = MenuItem(Item);
  Menu.Item = MenuItem;
  Menu.Group = MenuGroup(Group);
  Menu.GroupTitle = MenuGroupTitle(GroupTitle);

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

  return Menu as IMenuComponenType<
    Root,
    Backdrop,
    Content,
    Group,
    GroupTitle,
    Item
  >;
};
