import type { ViewProps } from 'react-native';

export interface ITabsProps extends ViewProps {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  orientation?: 'vertical' | 'horizontal';
  children?: any;
  variant?: 'pilled' | 'underlined';
}

export interface ITabsListProps {
  loop?: boolean;
  children?: any;
}

export interface ITabsTriggerProps {
  value?: string;
  isDisabled?: boolean;
}

export interface ITabsContentProps {
  value?: string;
  children?: any;
}
export type ITabsComponentType<
  TabsProps,
  ListProps,
  TriggerProps,
  TitleTextProps,
  ContentsProps,
  ContentProps,
  IconProps
> = React.ForwardRefExoticComponent<TabsProps & ITabsProps> & {
  Trigger: React.ForwardRefExoticComponent<TriggerProps & ITabsTriggerProps>;
  Contents: React.ForwardRefExoticComponent<ContentsProps>;
  List: React.ForwardRefExoticComponent<ListProps & ITabsListProps>;
  Content: React.ForwardRefExoticComponent<ContentProps & ITabsContentProps>;
  TitleText: React.ForwardRefExoticComponent<TitleTextProps>;
  Icon: React.ForwardRefExoticComponent<IconProps>;
};
