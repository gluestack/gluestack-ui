import type { Path, VerbosedSX, VerbosedSxResolved } from '../types';
import { resolveTokensFromConfig } from '../utils';
import { getWeightBaseOnPath } from './getWeightBaseOnPath';
import { StyledValueToCSSObject } from './StyledValueToCSSObject';

export function sxToSXResolved(
  sx: VerbosedSX,
  path: Path = [],
  meta: any,
  CONFIG: any,
  shouldResolve = true
): VerbosedSxResolved {
  const resolvedCSSStyle = shouldResolve
    ? StyledValueToCSSObject(sx?.style, CONFIG)
    : sx?.style;

  // console.log('hello here ***', sx?.style, resolvedCSSStyle);
  const styledValueResolvedWithMeta = {
    original: sx?.style ?? {},
    resolved: resolvedCSSStyle,
    meta: {
      ...meta,
      path,
      weight: getWeightBaseOnPath([...path, 'style']),
      // @ts-ignore
      props: sx?.props,
      // cssId: ,
      // cssRuleset: ,
    },
  };

  // console.log('sx !@#!@#!@#!@#', sx);
  // console.log(sx, '********');
  const ret: VerbosedSxResolved = {
    //@ts-ignore
    styledValueResolvedWithMeta: styledValueResolvedWithMeta,
    //@ts-ignore
    queriesResolved: sx?.queries
      ? sx.queries.map((query: any, index: any) => {
          const resolvedCondition = shouldResolve
            ? resolveTokensFromConfig(CONFIG, {
                condition: query.condition,
              }).condition
            : query.condition;

          const sxResolvedValue = sxToSXResolved(
            query.value,
            [...path, 'queries', index, query.condition],
            { queryCondition: resolvedCondition },
            CONFIG,
            shouldResolve
          );

          if (sxResolvedValue?.styledValueResolvedWithMeta) {
            sxResolvedValue.styledValueResolvedWithMeta.meta.queryCondition =
              resolvedCondition;
          }

          return {
            original: {
              condition: query.condition,
              value: query.value,
            },
            resolved: {
              condition: resolvedCondition,
              value: {
                ...sxResolvedValue,
              },
            },
          };
        })
      : undefined,
    platform: sx?.platform
      ? Object.keys(sx.platform).reduce(
          (acc, key) => ({
            ...acc,
            [key]: sxToSXResolved(
              //@ts-ignore
              sx.platform[key],
              [...path, 'platform', key],
              meta,
              CONFIG,
              shouldResolve
            ),
          }),
          {}
        )
      : undefined,
    colorMode: sx?.colorMode
      ? Object.keys(sx.colorMode).reduce((acc, key) => {
          const sxResolved = sxToSXResolved(
            //@ts-ignore
            sx.colorMode[key],
            [...path, 'colorMode', key],
            { colorMode: key, ...meta },
            CONFIG,
            shouldResolve
          );

          if (sxResolved?.styledValueResolvedWithMeta) {
            sxResolved.styledValueResolvedWithMeta.meta.colorMode = key;
          }
          return {
            ...acc,
            [key]: sxResolved,
          };
        }, {})
      : undefined,
    state: sx?.state
      ? Object.keys(sx.state).reduce(
          (acc, key) => ({
            ...acc,
            [key]: sxToSXResolved(
              //@ts-ignore
              sx.state[key],
              [...path, 'state', key],
              meta,
              CONFIG,
              shouldResolve
            ),
          }),
          {}
        )
      : undefined,
    descendants: sx?.descendants
      ? Object.keys(sx.descendants).reduce(
          (acc, key) => ({
            ...acc,
            [key]: sxToSXResolved(
              //@ts-ignore
              sx.descendants[key],
              [...path, 'descendants', key],
              meta,
              CONFIG,
              shouldResolve
            ),
          }),
          {}
        )
      : undefined,
  };

  // CSS computation based on Meta data
  // const { cssId, cssRuleset } = getCSSIdAndRuleset(
  //   ret.styledValueResolvedWithMeta,
  //   path
  // );

  // if(ret.queriesResolved) {
  //   // access the ret.queriesResolved[i].resolved.condition
  // }

  // console.log(ret.queriesResolved, 'ret ****');
  // console.log(ret.colorMode, 'colorMode ret ****');
  // ret.styledValueResolvedWithMeta.meta.cssId = cssId;
  // ret.styledValueResolvedWithMeta.meta.cssRuleset = cssRuleset;

  return ret;
}
