import type {
  CSSObject,
  ITheme,
  OrderedSXResolved,
  Path,
  StyledResolved,
  StyledValue,
  SX,
  SXResolved,
} from './types';
import { resolvedTokenization, resolveTokensFromConfig } from './utils';

function getWeightBaseOnPath(path: Path) {
  const weightObject: {
    styled: Array<any>;
    sx: Array<any>;
    state: Array<any>;
  } = {
    styled: [],
    sx: [],
    state: [],
  };
  const STYLED_PRECENDENCE: any = {
    baseStyle: 1,
    variants: 2,
    sizes: 3,
  };

  const SX_PRECEDENCE: any = {
    style: 1,
    platform: 2,
    colorMode: 3,
    queries: 4,
    state: 5,
    descendants: 6,
  };
  const STATE_PRECENDENCE: any = {
    indeterminate: 1,
    checked: 1,
    readOnly: 1,

    required: 2,
    invalid: 2,

    focus: 3,
    focusVisible: 4,
    hover: 5,
    pressed: 6,
    active: 6,
    loading: 7,

    disabled: 10,
  };

  const tempPath = [...path];

  for (let i = 0; i < tempPath.length; i++) {
    const currentValue = tempPath[i];

    let stateType: any = '';
    switch (currentValue) {
      case 'queries':
        i = i + 2;
        break;
      case 'state':
        stateType = tempPath[i + 1];
        i = i + 1;
        break;
      case 'descendants':
        break;
      default:
    }

    if (STYLED_PRECENDENCE[currentValue]) {
      weightObject.styled.push(STYLED_PRECENDENCE[currentValue]);
    }

    if (SX_PRECEDENCE[currentValue]) {
      weightObject.sx.push(SX_PRECEDENCE[currentValue]);
    }
    if (currentValue === 'state' && STATE_PRECENDENCE[stateType]) {
      weightObject.state.push(STATE_PRECENDENCE[stateType]);
    }
  }

  const weightObjectStyledValue = weightObject.styled.reduce(
    (partialSum, a) => partialSum + a,
    0
  );
  const weightObjectSxValue = weightObject.sx.reduce(
    (partialSum, a) => partialSum + a,
    0
  );
  const weightObjectStateValue = weightObject.state.reduce(
    (partialSum, a) => partialSum + a,
    0
  );

  let weightedStyleString = '';
  if (weightObjectStyledValue < 10) {
    weightedStyleString = '0' + weightObjectStyledValue;
  } else {
    weightedStyleString = '' + weightObjectStyledValue;
  }

  let weightedSxString = '';
  if (weightObjectSxValue < 10) {
    weightedSxString = '0' + weightObjectSxValue;
  } else {
    weightedSxString = '' + weightObjectSxValue;
  }

  let weightedStateString = '';
  if (weightObjectStateValue < 10) {
    weightedStateString = '0' + weightObjectStateValue;
  } else {
    weightedStateString = '' + weightObjectStateValue;
  }

  const weight = parseInt(
    weightedStateString + weightedSxString + weightedStyleString,
    10
  );

  return weight;
}

export function sxToSXResolved(
  sx: SX,
  path: Path = [],
  meta: any,
  CONFIG: any
): SXResolved {
  const resolvedCSSStyle = StyledValueToCSSObject(sx?.style, CONFIG);

  // console.log('hello here ***', sx?.style, resolvedCSSStyle);
  const styledValueResolvedWithMeta = {
    original: sx?.style,
    resolved: resolvedCSSStyle,
    meta: {
      ...meta,
      path,
      weight: getWeightBaseOnPath(path),
      // cssId: ,
      // cssRuleset: ,
    },
  };

  // console.log(styledValueResolvedWithMeta.meta, 'path here 111');

  // console.log(sx, '********');
  const ret: SXResolved = {
    //@ts-ignore
    styledValueResolvedWithMeta: styledValueResolvedWithMeta,
    //@ts-ignore
    queriesResolved: sx?.queries
      ? sx.queries.map((query: any, index: any) => {
          const resolvedCondition = resolveTokensFromConfig(CONFIG, {
            condition: query.condition,
          }).condition;

          const sxResolvedValue = sxToSXResolved(
            query.value,
            [...path, 'queries', index, query.condition],
            { queryCondition: resolvedCondition },
            CONFIG
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
              CONFIG
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
            { colorMode: key },
            CONFIG
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
              CONFIG
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
              CONFIG
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
export function StyledValueToCSSObject(
  input: StyledValue | undefined,
  CONFIG: any
): CSSObject {
  if (!input) {
    return {};
  }
  // return input;
  return resolvedTokenization(input, CONFIG);
}
export function SXResolvedToOrderedSXResolved(
  sxResolved: SXResolved
): OrderedSXResolved {
  let orderedSXResolved: any = [];
  if (sxResolved?.styledValueResolvedWithMeta?.original) {
    orderedSXResolved = [sxResolved.styledValueResolvedWithMeta];
  }

  if (sxResolved?.platform) {
    Object.keys(sxResolved.platform).forEach((key) => {
      //@ts-ignore
      const platformSXResolved = sxResolved?.platform[key];
      orderedSXResolved.push(
        ...SXResolvedToOrderedSXResolved(platformSXResolved)
      );
    });
  }
  if (sxResolved?.colorMode) {
    Object.keys(sxResolved.colorMode).forEach((key) => {
      //@ts-ignore
      const colorModeSXResolved = sxResolved.colorMode[key];
      orderedSXResolved.push(
        ...SXResolvedToOrderedSXResolved(colorModeSXResolved)
      );
    });
  }
  if (sxResolved?.queriesResolved) {
    sxResolved.queriesResolved.forEach((queryResolved) => {
      orderedSXResolved.push(
        //@ts-ignore

        ...SXResolvedToOrderedSXResolved(queryResolved.resolved.value)
      );
    });
  }
  if (sxResolved?.state) {
    Object.keys(sxResolved.state).forEach((key) => {
      //@ts-ignore
      const stateSXResolved = sxResolved.state[key];
      // stateSXResolved.styledValueResolvedWithMeta.meta.weight =
      //   SX_STYLE_PRECEDENCE.state + (STATE_PRECENDENCE[key] || 0) / 100;
      orderedSXResolved.push(...SXResolvedToOrderedSXResolved(stateSXResolved));
      // orderedSXResolved.push(stateSXResolved.styledValueResolvedWithMeta);
    });
  }
  if (sxResolved?.descendants) {
    Object.keys(sxResolved.descendants).forEach((key) => {
      //@ts-ignore
      const descendantSXResolved = sxResolved.descendants[key];
      orderedSXResolved.push(
        ...SXResolvedToOrderedSXResolved(descendantSXResolved)
      );
    });
  }
  return orderedSXResolved.sort(
    (a: any, b: any) => a.meta.weight - b.meta.weight
  );
}
export function styledToStyledResolved<Variants, Sizes, P>(
  styled: ITheme<Variants, Sizes, P>,
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
          (acc, key) => ({
            ...acc,
            [key]: sxToSXResolved(
              //@ts-ignore
              styled.variants[key],
              [...path, 'variants', key],
              {},
              CONFIG
            ),
          }),
          {}
        )
      : undefined,
    sizes: styled?.sizes
      ? Object.keys(styled.sizes).reduce(
          (acc, key) => ({
            ...acc,
            [key]: sxToSXResolved(
              //@ts-ignore

              styled.sizes[key],
              [...path, 'sizes', key],
              {},
              CONFIG
            ),
          }),
          {}
        )
      : undefined,
  };
}

export function styledResolvedToOrderedSXResolved(
  styledResolved: StyledResolved
): OrderedSXResolved {
  const orderedSXResolved: OrderedSXResolved = [
    //@ts-ignore
    ...SXResolvedToOrderedSXResolved(styledResolved?.baseStyle),
  ];

  if (styledResolved.variants) {
    Object.keys(styledResolved.variants).forEach((key) => {
      //@ts-ignore
      const variantSXResolved = styledResolved?.variants[key];
      // variantSXResolved.styledValueResolvedWithMeta.meta.weight =
      //   STYLED_PRECENDENCE.variants;
      orderedSXResolved.push(
        ...SXResolvedToOrderedSXResolved(variantSXResolved)
      );
    });
  }

  if (styledResolved.sizes) {
    Object.keys(styledResolved.sizes).forEach((key) => {
      //@ts-ignore
      const sizeSXResolved = styledResolved?.sizes[key];
      // sizeSXResolved.styledValueResolvedWithMeta.meta.weight =
      //   STYLED_PRECENDENCE.sizes;
      orderedSXResolved.push(...SXResolvedToOrderedSXResolved(sizeSXResolved));
    });
  }

  return orderedSXResolved.sort(
    (a: any, b: any) => a.meta.weight - b.meta.weight
  );
}
