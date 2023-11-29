import { AriaTabProps } from '@react-types/tabs';
import { RefObject } from 'react';
import { SingleSelectListState } from '@react-stately/list';
import { usePress } from '@react-native-aria/interactions';

interface TabAria {
  /** Props for the tab element. */
  tabProps: any;
}

export function useTab<T>(
  props: AriaTabProps<T>,
  state: SingleSelectListState<T>,
  _ref: RefObject<HTMLElement>
): TabAria {
  let { item, isDisabled: propsDisabled } = props;
  let { key } = item;
  let { selectionManager: manager, selectedKey } = state;

  let isSelected = key === selectedKey;

  const onPress = () => {
    manager.select(key);
  };

  let isDisabled = propsDisabled || state.disabledKeys.has(key);

  let { pressProps } = usePress({ onPress, isDisabled });

  const tabProps = {
    ...pressProps,
    'aria-selected': isSelected,
    'role': 'tab',
  };

  return {
    tabProps,
  };
}
