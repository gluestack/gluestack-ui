import { sxToSXResolved } from './sxToSxResolved';

export function reduceAndResolveCompoundVariants(
  compoundVariants: any,
  path: Array<string | number>,
  CONFIG: any,
  shouldResolve = true
) {
  const compoundVariantsResolved = compoundVariants?.map(
    (compoundVariant: any, index: number) => {
      const { value, ...condition } = compoundVariant;
      // let conditionPath: Array<string> = [];
      // Object.keys(condition).map((key) => {
      //   conditionPath.push(key);
      //   conditionPath.push(condition[key]);
      // });
      return sxToSXResolved(
        //@ts-ignore

        value,
        [...path, 'compoundVariants', index],
        {
          condition,
        },
        CONFIG,
        shouldResolve
      );
    }
  );
  // console.log(compoundVariantsResolved, 'compoundVariantsResolved');

  return compoundVariantsResolved;
}
