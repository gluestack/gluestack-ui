import { reduceAndResolveCompoundVariants, sxToSXResolved } from '.';
import type { IVerbosedTheme, Path, StyledResolved } from '../types';

export function styledToStyledResolved<Variants, P>(
  styled: IVerbosedTheme<Variants, P>,
  path: Path = [],
  CONFIG: any
): StyledResolved {
  return {
    baseStyle: styled?.baseStyle
      ? //@ts-ignore
        sxToSXResolved(styled.baseStyle, [...path, 'baseStyle'], {}, CONFIG)
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
                  CONFIG
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
      ? // @ts-ignore
        reduceAndResolveCompoundVariants(styled.compoundVariants, path, CONFIG)
      : undefined,
  };
}
