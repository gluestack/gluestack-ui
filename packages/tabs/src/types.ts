export interface ITabProps {
  value?: string;
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
> = ((props: TabsProps & ITabsProps) => JSX.Element) & {
  Tab: (props: TabProps & ITabProps) => JSX.Element;
  TabPanels: (props: TabPanelsProps) => JSX.Element;
  TabList: (props: TabListProps) => JSX.Element;
  TabPanel: (props: TabPanelProps & ITabPanelProps) => JSX.Element;
  TabTitle: (props: TabTitleProps) => JSX.Element;
  TabIcon: (props: TabIconProps) => JSX.Element;
};
