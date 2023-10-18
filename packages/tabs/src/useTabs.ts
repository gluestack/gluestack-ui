import { AriaTabsProps } from '@react-types/tabs';
import { TabsState } from '@react-stately/tabs';

interface TabsAria {
  /** Props for the tablist container. */
  tabListProps: any;
  /** Props for the associated tabpanel element. */
  tabPanelProps: any;
}

export function useTabs<T>(
  _props: AriaTabsProps<T>,
  _state: TabsState<T>,
  _ref: any
): TabsAria {
  return {
    tabListProps: {
      role: 'tablist',
    },
    tabPanelProps: {},
  };
}
