import { reduceAndResolveCompoundVariants } from './reduceAndResolveCompoundVariants';
import type { IVerbosedTheme, Path, StyledResolved } from '../types';
import { sxToSXResolved } from './sxToSxResolved';

export function styledToStyledResolved<Variants, P>(
  styled: IVerbosedTheme<Variants, P>,
  path: Path = [],
  CONFIG: any,
  shouldResolve: boolean = true
): StyledResolved {
  return {
    baseStyle: styled?.baseStyle
      ? //@ts-ignore
        sxToSXResolved(
          styled.baseStyle,
          [...path, 'baseStyle'],
          {},
          CONFIG,
          shouldResolve
        )
      : undefined,
    variants: styled?.variants
      ? Object.keys(styled.variants).reduce(
          (acc, key1) => ({
            ...acc,
            // @ts-ignore
            [key1]: Object.keys(styled?.variants?.[key1]).reduce(
              (acc, key) => ({
                ...acc,
                [key]: sxToSXResolved(
                  //@ts-ignore
                  styled.variants[key1][key],
                  [...path, 'variants', key1, key],
                  {},
                  CONFIG,
                  shouldResolve
                ),
              }),
              {}
            ),

            // sxToSXResolved(
            //   //@ts-ignore
            //   styled.variants[key],
            //   [...path, 'variants', key],
            //   {},
            //   CONFIG
            // ),
          }),
          {}
        )
      : undefined,
    // @ts-ignore
    compoundVariants: styled?.compoundVariants
      ? reduceAndResolveCompoundVariants(
          // @ts-ignore
          styled.compoundVariants,
          path,
          CONFIG,
          shouldResolve
        )
      : undefined,
  };
}
