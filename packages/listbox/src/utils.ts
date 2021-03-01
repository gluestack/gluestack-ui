import { Key } from 'react';
import { ListState } from '@react-stately/list';

export const listIds = new WeakMap<ListState<unknown>, string>();

function normalizeKey(key: Key): string {
  if (typeof key === 'string') {
    return key.replace(/\s*/g, '');
  }

  return '' + key;
}

export function getItemId<T>(state: ListState<T>, itemKey: Key): string {
  let listId = listIds.get(state);

  if (!listId) {
    throw new Error('Unknown list');
  }

  return `${listId}-option-${normalizeKey(itemKey)}`;
}
