import { checkAndPush } from './checkAndPush';
import type { OrderedSXResolved, StyleIds } from '../types';

export function getComponentResolved(orderedResolved: OrderedSXResolved) {
  return orderedResolved.filter(
    (item: any) => !item.meta.path?.includes('descendants')
  );
}

export function getDescendantResolved(orderedResolved: OrderedSXResolved) {
  return orderedResolved.filter((item: any) =>
    item.meta.path?.includes('descendants')
  );
}

export function getComponentStyleIds(arr: OrderedSXResolved): StyleIds {
  const ret: StyleIds = {
    baseStyle: {},
    variants: {},
    compoundVariants: [],
    // sizes: {},
  };
  for (let i in arr) {
    const item = arr[i];
    checkAndPush(item, ret.baseStyle, 'baseStyle');

    let variantType: string | number = '';
    let variantName: string | number = '';

    if (item?.meta?.path?.includes('variants')) {
      variantType = item.meta.path[item.meta.path.indexOf('variants') + 1];
      variantName = item.meta.path[item.meta.path.indexOf('variants') + 2];

      if (!ret.variants[variantType]) {
        ret.variants[variantType] = { [variantName]: { ids: [] } };
      } else if (
        ret.variants[variantType] &&
        !ret.variants[variantType][variantName]
      ) {
        ret.variants[variantType][variantName] = { ids: [] };
      }

      checkAndPush(item, ret.variants[variantType][variantName], 'variants');
      // console.log('styleids>>Var', ret);
    }

    // if (item?.meta?.path?.includes('variants')) {
    //   variantType = item.meta.path[item.meta.path.indexOf('variants') + 1];
    //   variantName = item.meta.path[item.meta.path.indexOf('variants') + 2];

    //   if (!ret.variants[variantType]) {
    //     ret.variants[variantType] = { [variantName]: { ids: [] } };
    //   } else if (
    //     ret.variants[variantType] &&
    //     !ret.variants[variantType][[variantName]]
    //   ) {
    //     ret.variants[variantType][variantName] = { ids: [] };
    //   }

    //   checkAndPush(item, ret.variants[variantType][variantName], 'variants');
    // }

    if (item?.meta?.path?.includes('compoundVariants')) {
      // let conditionStartIndex = item.meta.path.indexOf('compoundVariants');
      // let condition = {} as any;

      // for (let i = conditionStartIndex + 1; i < item.meta.path.length; i++) {
      //   if ((i - conditionStartIndex) % 2 !== 0) {
      //     condition[item.meta.path[i]] = item.meta.path[i + 1];
      //     i++;
      //   }
      // }

      // console.log(condition, item.meta, 'hello world');
      // console.log('styleids>>', ret.compoundVariants);

      // if (ret.compoundVariants.length === 0)
      //   ret.compoundVariants = [{ ids: [], n: 'alsjnf' }];

      const condition = item?.meta?.condition;
      let conditionIndex = ret.compoundVariants.findIndex(
        (item) => item.condition === condition
      );
      // if (
      //   ret.compoundVariants.findIndex((item) => item.condition === condition) >
      //   -1
      // ) {
      // }

      if (conditionIndex === -1) {
        ret.compoundVariants.push({ condition: item?.meta?.condition });
        conditionIndex = ret.compoundVariants.length - 1;
      }
      // console.log('>>>><<<<<', conditionIndex);

      checkAndPush(
        item,
        ret.compoundVariants[conditionIndex],
        'compoundVariants'
      );

      // checkAndPush(item, ret.compoundVariants, 'compoundVariants');
      // console.log('styleids>>', ret.compoundVariants);
    }
  }

  return ret;
}

export function getDescendantStyleIds(
  arr: any,
  descendantStyle: any = [],
  shoudGuessDescendants: boolean = false
): StyleIds {
  const ret: any = {};

  const extractedDescendants = new Set(descendantStyle);

  if (shoudGuessDescendants) {
    arr.forEach((item: any) => {
      if (item.meta.path.lastIndexOf('descendants') !== -1) {
        const descendant =
          item.meta.path[item.meta.path.lastIndexOf('descendants') + 1];
        extractedDescendants.add(descendant);
      }
    });
  }

  extractedDescendants.forEach((style: any) => {
    const filteredOrderListByDescendant = arr.filter(
      (item: any) =>
        item.meta.path[item.meta.path.lastIndexOf('descendants') + 1] === style
    );

    ret[style] = getComponentStyleIds(filteredOrderListByDescendant);
  });

  // return ret;

  return ret;
}

export function getStyleIds(
  orderedResolved: OrderedSXResolved,
  componentStyleConfig: any = {},
  shoudGuessDescendants: boolean = false
): {
  component: StyleIds;
  descendant: StyleIds;
} {
  const componentOrderResolved = getComponentResolved(orderedResolved);
  const descendantOrderResolved = getDescendantResolved(orderedResolved);

  const component = getComponentStyleIds(componentOrderResolved);
  const descendant = getDescendantStyleIds(
    descendantOrderResolved,
    componentStyleConfig.descendantStyle,
    shoudGuessDescendants
  );

  return {
    component,
    descendant,
  };
}
