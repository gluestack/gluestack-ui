export type ITabsComponentType<
  TabsProps,
  TabProps,
  TabPanelsProps,
  TabListProps,
  TabPanelProps
> = ((props: TabsProps) => JSX.Element) & {
  Tab: (props: TabProps) => JSX.Element;
  TabPanels: (props: TabPanelsProps) => JSX.Element;
  TabList: (props: TabListProps) => JSX.Element;
  TabPanel: (props: TabPanelProps) => JSX.Element;
};
