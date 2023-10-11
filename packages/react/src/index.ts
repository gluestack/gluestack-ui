// console.timeMap = { boot: {}, runtime: {} };
// console.initKey = (key: string, runningTime: string) => {
//   console.timeMap[runningTime][key] = {
//     'startTime': 0,
//     'diff': [],
//     'callCounter': 0,
//     'averageTime(ms)': 0,
//   };
// };
// console.incrementCallCount = (key: string, runningTime: string) => {
//   console.timeMap[runningTime][key]['callCounter'] =
//     console.timeMap[runningTime][key]['callCounter'] + 1;
// };

// console.setStartTimeStamp = (key: string, runningTime?: string = 'runtime') => {
//   if (!console.timeMap[runningTime][key]) {
//     console.initKey(key, runningTime);
//   }
//   console.incrementCallCount(key, runningTime);
//   console.timeMap[runningTime][key]['startTime'] = new Date().getTime();
// };
// console.setDiff = (key: string, diff: number, runningTime: string) => {
//   console.timeMap[runningTime][key]['diff'].push(diff);
// };
// console.setEndTimeStamp = (key: string, runningTime?: string = 'runtime') => {
//   const endTime = new Date().getTime();
//   const diff = endTime - console.timeMap[runningTime][key]['startTime'];
//   console.timeMap[runningTime][key]['averageTime(ms)'] =
//     console.timeMap[runningTime][key]['diff'].reduce(
//       (partialSum: any, a: any) => partialSum + a,
//       0
//     ) / console.timeMap[runningTime][key]['callCounter'];
//   console.setDiff(key, diff, runningTime);
// };
// console.getPerformanceReport = () => {
//   // console.log('console.timeMap.boot');
//   // console.log(JSON.stringify(console.timeMap.boot));
//   console.log('console.timeMap.runtime');
//   console.log(
//     'Max>>>> NewComp',
//     console.timeMap['runtime']['NewComp']['diff'].sort(function (a, b) {
//       return a - b;
//     })[console.timeMap['runtime']['NewComp']['callCounter'] - 1]
//   );
//   console.log(
//     JSON.stringify(console.timeMap.runtime['NewComp']['averageTime(ms)']),
//     '\n',
//     JSON.stringify(console.timeMap.runtime['useEffect']['averageTime(ms)'])
//   );
//   console.log(
//     'Max>>>> useEffect',
//     console.timeMap['runtime']['useEffect']['diff'].sort(function (a, b) {
//       return a - b;
//     })[console.timeMap['runtime']['useEffect']['callCounter'] - 1]
//   );
// };

export { styled, verboseStyled, resolveBuildTimeSx } from './styled';
export { StyledProvider, useStyled } from './StyledProvider';
export { Theme, useTheme } from './Theme';
export { styledToStyledResolved } from './resolver/styledResolved';
export { styledResolvedToOrderedSXResolved } from './resolver/orderedResolved';
export { flush } from './injectInStyle';
export {
  convertStyledToStyledVerbosed,
  convertSxToSxVerbosed,
} from './convertSxToSxVerbosed';
export type {
  Tokens,
  Aliases,
  AliasesProps,
  ICustomConfig,
  ICustomComponents,
  IStyledPlugin,
  IStyled,
  IAnimationDriverPlugin,
  GSConfig,
  IAnimationResolver,
} from './types';
export { createStyled } from './createStyled';

export { createGlobalStylesWeb } from './createGlobalStylesWeb';
// export { styled };
// export { flush } from './utils/css-injector';
export { propertyTokenMap } from './propertyTokenMap';
export { AsForwarder } from './AsForwarder';

export * from './plugins';

export { createStyle } from './createStyle';

export { INTERNAL_updateCSSStyleInOrderedResolved } from './updateCSSStyleInOrderedResolved';
export {
  createConfig,
  // getInstalledPlugins,
  createComponents,
  // getInstalledComponents,
} from './createConfig';
export * from './core';
export * from './hooks';
