import { AriaTabProps } from '@react-types/tabs';
import { HTMLAttributes, Key, RefObject } from 'react';
import { SingleSelectListState } from '@react-stately/list';
import { usePress } from '@react-native-aria/interactions';
import {
  useSelectableItem,
} from '@react-aria/selection';
import { useMapDomPropsToRN } from '@react-native-aria/utils';


const tabsIds = new WeakMap<SingleSelectListState<unknown>, string>();

interface TabAria {
  /** Props for the tab element. */
  tabProps: HTMLAttributes<HTMLElement>;
}

export function useTab<T>(
  props: AriaTabProps<T>,
  state: SingleSelectListState<T>,
  ref: RefObject<HTMLElement>
): TabAria {
  let { item, isDisabled: propsDisabled } = props;
  let { key } = item;
  let { selectionManager: manager, selectedKey } = state;

  let isSelected = key === selectedKey;

  let { itemProps } = useSelectableItem({
    selectionManager: manager,
    key,
    ref,
  });
  let isDisabled = propsDisabled || state.disabledKeys.has(key);

  let { pressProps } = usePress({ ...itemProps, isDisabled });
  let tabId = generateId(state, key, 'tab');
  let tabPanelId = generateId(state, key, 'tabpanel');
  let { tabIndex } = pressProps;

  // selected tab should have tabIndex=0, when it initializes
  if (isSelected && !isDisabled) {
    tabIndex = 0;
  }

  
  // Putting this as a last resort, after several hours of debugging.
  // Why?
  // tabListProps adds onMouseDown with preventDefault in useSelectableCollection.ts (React Aria) and react-native-web uses onClick for onPress.
  // This results in tab button not getting focused when clicked
  // See this example - https://codesandbox.io/s/issue-i-know-but-dont-know-why-1-ydyw5?file=/src/App.js
  const onMouseDown  =  (e:any) => e.stopPropagation();

  const tabPropsTemp  = {
    ...pressProps,
    onMouseDown,
    'id': tabId,
    'aria-selected': isSelected,
    'aria-disabled': isDisabled || undefined,
    'aria-controls': isSelected ? tabPanelId : undefined,
    'tabIndex': isDisabled ? undefined : tabIndex,
    'role': 'tab',
  }
  
  const tabProps = useMapDomPropsToRN(tabPropsTemp, ref)

  return {
    tabProps
  };
}

function generateId<T>(
  state: SingleSelectListState<T>,
  key: Key,
  role: string
) {
  if (typeof key === 'string') {
    key = key.replace(/\s+/g, '');
  }

  let baseId = tabsIds.get(state);
  return `${baseId}-${role}-${key}`;
}
