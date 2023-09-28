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
> = React.ForwardRefExoticComponent<
  (props: TabsProps & ITabsProps) => JSX.Element
> & {
  Tab: React.ForwardRefExoticComponent<
    (props: TabProps & ITabProps) => JSX.Element
  >;
  TabPanels: React.ForwardRefExoticComponent<
    (props: TabPanelsProps) => JSX.Element
  >;
  TabList: React.ForwardRefExoticComponent<
    (props: TabListProps) => JSX.Element
  >;
  TabPanel: React.ForwardRefExoticComponent<
    (props: TabPanelProps & ITabPanelProps) => JSX.Element
  >;
  TabTitle: React.ForwardRefExoticComponent<
    (props: TabTitleProps) => JSX.Element
  >;
  TabIcon: React.ForwardRefExoticComponent<
    (props: TabIconProps) => JSX.Element
  >;
};
