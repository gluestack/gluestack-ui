export interface ITabProps {
  value?: string;
}
export interface ITabListProps {
  orientation?: 'vertical' | 'horizontal';
  variant?: 'scrollable';
}
export interface ITabsProps {
  value?: string;
}
export interface ITabPanelProps {
  value?: string;
}
export type ITabsComponentType<
  TabsProps,
  TabProps,
  TabPanelsProps,
  TabListProps,
  TabPanelProps,
  TabTitleProps,
  TabIconProps
> = React.ForwardRefExoticComponent<TabsProps & ITabsProps> & {
  Tab: React.ForwardRefExoticComponent<TabProps & ITabProps>;
  TabPanels: React.ForwardRefExoticComponent<TabPanelsProps>;
  TabList: React.ForwardRefExoticComponent<TabListProps & ITabListProps>;
  TabPanel: React.ForwardRefExoticComponent<TabPanelProps & ITabPanelProps>;
  TabTitle: React.ForwardRefExoticComponent<TabTitleProps>;
  TabIcon: React.ForwardRefExoticComponent<TabIconProps>;
};
