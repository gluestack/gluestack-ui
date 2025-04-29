import { AriaTabsProps } from '@react-types/tabs';
import { HTMLAttributes } from 'react';
import { TabsState } from '@react-stately/tabs';
import { useTabs as useTabsWeb } from '@react-aria/tabs';
import { mapDomPropsToRN } from '@react-native-aria/utils';

interface TabsAria {
  /** Props for the tablist container. */
  tabListProps: HTMLAttributes<HTMLElement>;
  /** Props for the associated tabpanel element. */
  tabPanelProps: HTMLAttributes<HTMLElement>;
}

export function useTabs<T>(
  props: AriaTabsProps<T>,
  state: TabsState<T>,
  ref: any
): TabsAria {
  const { tabListProps, tabPanelProps } = useTabsWeb(props, state, ref);

  return {
    tabListProps: mapDomPropsToRN(tabListProps),
    tabPanelProps: mapDomPropsToRN(tabPanelProps),
  };
}
