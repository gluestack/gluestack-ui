import { deepMergeArray } from '../utils';

export function checkAndPush(item: any, ret: any, keyToCheck: any) {
  function getIndexes(array: any, str: any) {
    return array
      .map((item: any, index: number) => (item === str ? index : -1))
      .filter((i: any) => i !== -1);
  }

  function createNestedObject(arr: any) {
    let obj = {};
    arr.reduce((acc: any, curr: any) => {
      return (acc[curr] = {});
    }, obj);
    return obj;
  }

  function setNestedObjectValue(obj: any, keyPath: any, value: any) {
    // If the key path is empty, return the value
    if (keyPath.length === 0) return value;

    // Otherwise, set the value at the current key path and recurse
    const key = keyPath[0];
    obj[key] = obj[key] || {};
    obj[key] = setNestedObjectValue(obj[key], keyPath.slice(1), value);
    return obj;
  }
  // keyToCheck = "baseStyle" | "variants" | "sizes"
  if (item.meta.path.includes(keyToCheck)) {
    // if (!item.meta.path.includes('state')) {
    //   if (!ret.ids) {
    //     ret.ids = [];
    //   }
    //   ret.ids.push(item.meta.cssId);
    //   ret.props = item?.meta?.props;
    // } else
    if (
      !item.meta.path.includes('state') &&
      !item.meta.path.includes('colorMode')
    ) {
      if (!ret.ids) {
        ret.ids = [];
      }
      ret.ids.push(item.meta.cssId);
      ret.props = item?.meta?.props;

      // ret.default.push(item.meta.cssId);
    } else if (
      item.meta.path.includes('state') ||
      item.meta.path.includes('colorMode')
    ) {
      const allStates = getIndexes(item.meta.path, 'state');
      const allColorModes = getIndexes(item.meta.path, 'colorMode');

      // const allStatesAndColorMode = [...allStates, ...allColorModes];

      const mergeAllStateKey: any = [];

      allStates.forEach((statePath: any) => {
        const state = item.meta.path[statePath + 1];
        mergeAllStateKey.push('state');
        mergeAllStateKey.push(state);
      });

      allColorModes.forEach((colorModePath: any) => {
        const colorMode = item.meta.path[colorModePath + 1];
        mergeAllStateKey.push('colorMode');
        mergeAllStateKey.push(colorMode);
      });

      const stateObject = createNestedObject(mergeAllStateKey);

      setNestedObjectValue(stateObject, mergeAllStateKey, {
        ids: [item.meta.cssId],
        props: item?.meta?.props,
      });

      deepMergeArray(ret, stateObject);
    }
  }
}
