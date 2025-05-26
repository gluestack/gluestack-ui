import { Platform } from 'react-native';
const ITEM_ATTR = 'data-key';
const getValue = (element: Element) => element.getAttribute(ITEM_ATTR) ?? '';

export const useTypeSelect = (state: any): any => {
  if (Platform.OS !== 'web') return;
  return {
    onKeyDownCapture(event: KeyboardEvent) {
      if (
        event.key.length === 1 &&
        !(event.ctrlKey || event.altKey || event.metaKey)
      ) {
        const container = event.currentTarget as HTMLElement;

        // Get all the items key in the menu
        const values = Array.from(
          container.querySelectorAll(`[${ITEM_ATTR}]`)
        ).map(getValue);

        // Get the search key
        const searchKey = event.key;

        // find the first item that starts with the search key
        const foundValue = values.find((value) =>
          value.toLowerCase().startsWith(searchKey)
        );
        // set the focus to the found item
        if (!state.disabledKeys.has(foundValue)) {
          foundValue && state.selectionManager.setFocusedKey(foundValue);
        }
      }
    },
  };
};
