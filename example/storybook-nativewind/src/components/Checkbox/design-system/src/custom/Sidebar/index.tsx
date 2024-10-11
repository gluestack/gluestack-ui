import type { MutableRefObject } from 'react';
import { Sidebar as SidebarMain } from './Sidebar';
import { SidebarGroup } from './SidebarGroup';
import { SidebarGroupHeader } from './SidebarGroupHeader';
import { SidebarGroupItem } from './SidebarGroupItem';
import { SidebarGroupItemText } from './SideBarGroupItemText';
import { SidebarGroupItemContent } from './SidebarGroupItemContent';
import { SidebarGroupItemTag } from './SideBarGroupItemTag';
import { SidebarGroupItemTagText } from './SideBarGroupItemTagText';
export type ISidebarComponentType = ((
  props: any & { ref?: MutableRefObject<any> }
) => JSX.Element) & {
  Group: React.MemoExoticComponent<
    (props: any & { ref?: MutableRefObject<any> }) => JSX.Element
  >;
  GroupHeader: React.MemoExoticComponent<
    (props: any & { ref?: MutableRefObject<any> }) => JSX.Element
  >;
  GroupItem: React.MemoExoticComponent<
    (props: any & { ref?: MutableRefObject<any> }) => JSX.Element
  >;
  GroupItemContent: React.MemoExoticComponent<
    (props: any & { ref?: MutableRefObject<any> }) => JSX.Element
  >;
  GroupItemText: React.MemoExoticComponent<
    (props: any & { ref?: MutableRefObject<any> }) => JSX.Element
  >;
  GroupItemTag: React.MemoExoticComponent<
    (props: any & { ref?: MutableRefObject<any> }) => JSX.Element
  >;
  GroupItemTagText: React.MemoExoticComponent<
    (props: any & { ref?: MutableRefObject<any> }) => JSX.Element
  >;
};

const SidebarTemp = SidebarMain as any;
SidebarTemp.Group = SidebarGroup;
SidebarTemp.GroupHeader = SidebarGroupHeader;
SidebarTemp.GroupItem = SidebarGroupItem;
SidebarTemp.GroupItemContent = SidebarGroupItemContent;
SidebarTemp.GroupItemText = SidebarGroupItemText;
SidebarTemp.GroupItemTag = SidebarGroupItemTag;
SidebarTemp.GroupItemTagText = SidebarGroupItemTagText;
const Sidebar = SidebarTemp as ISidebarComponentType;

//@ts-ignore
Sidebar.displayName = 'Sidebar';
Sidebar.Group.displayName = 'Group';
Sidebar.GroupHeader.displayName = 'GroupHeader';
Sidebar.GroupItem.displayName = 'GroupItem';
Sidebar.GroupItemContent.displayName = 'GroupItemContent';
Sidebar.GroupItemText.displayName = 'GroupItemText';

export { Sidebar };
