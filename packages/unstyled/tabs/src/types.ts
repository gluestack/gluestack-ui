export interface ITabsTriggerProps {
  value?: string;
  isDisabled?: boolean;
}
export interface ITabsListProps {
  loop?: boolean;
}
export interface ITabsProps {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  orientation?: 'vertical' | 'horizontal';
  children?: React.ReactNode;
  variant?: 'pilled' | 'underlined';
}

export interface ITabsContentProps {
  value?: string;
}
export type ITabsComponentType<
  TabsProps,
  ListProps,
  TriggerProps,
  TitleTextProps,
  ContentsProps,
  ContentProps,
  ContentTextProps,
  IconProps
> = React.ForwardRefExoticComponent<TabsProps & ITabsProps> & {
  Trigger: React.ForwardRefExoticComponent<TriggerProps & ITabsTriggerProps>;
  Contents: React.ForwardRefExoticComponent<ContentsProps>;
  List: React.ForwardRefExoticComponent<ListProps & ITabsListProps>;
  Content: React.ForwardRefExoticComponent<ContentProps & ITabsContentProps>;
  TitleText: React.ForwardRefExoticComponent<TitleTextProps>;
  ContentText: React.ForwardRefExoticComponent<ContentTextProps>;
  Icon: React.ForwardRefExoticComponent<IconProps>;
};
