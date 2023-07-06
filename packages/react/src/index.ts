console.timeMap = { boot: {}, runtime: {} };
console.initKey = (key: string, runningTime: string) => {
  console.timeMap[runningTime][key] = {
    'startTime': 0,
    'diff': [],
    'callCounter': 0,
    'averageTime(ms)': 0,
  };
};
console.incrementCallCount = (key: string, runningTime: string) => {
  console.timeMap[runningTime][key]['callCounter'] =
    console.timeMap[runningTime][key]['callCounter'] + 1;
};

console.setStartTimeStamp = (key: string, runningTime?: string = 'runtime') => {
  if (!console.timeMap[runningTime][key]) {
    console.initKey(key, runningTime);
  }
  console.incrementCallCount(key, runningTime);
  console.timeMap[runningTime][key]['startTime'] = new Date().getTime();
};
console.setDiff = (key: string, diff: number, runningTime: string) => {
  console.timeMap[runningTime][key]['diff'].push(diff);
};
console.setEndTimeStamp = (key: string, runningTime?: string = 'runtime') => {
  const endTime = new Date().getTime();
  const diff = endTime - console.timeMap[runningTime][key]['startTime'];
  console.timeMap[runningTime][key]['averageTime(ms)'] =
    console.timeMap[runningTime][key]['diff'].reduce(
      (partialSum: any, a: any) => partialSum + a,
      0
    ) / console.timeMap[runningTime][key]['callCounter'];
  console.setDiff(key, diff, runningTime);
};
console.getPerformanceReport = () => {
  console.log('console.timeMap.boot');
  console.table(console.timeMap.boot);
  console.log('console.timeMap.runtime');
  console.table(console.timeMap.runtime);
};

export { styled, verboseStyled } from './styled';
export { StyledProvider, useStyled } from './StyledProvider';
export {
  styledToStyledResolved,
  styledResolvedToOrderedSXResolved,
} from './resolver';
export { flush } from './injectInStyle';
export {
  convertStyledToStyledVerbosed,
  convertSxToSxVerbosed,
} from './convertSxToSxVerbosed';
export { Tokens, Aliases, AliasesProps, ICustomConfig } from './types';
export { createStyled, IStyledPlugin, IStyled } from './createStyled';
export { createGlobalStylesWeb } from './createGlobalStylesWeb';
// export { styled };
// export { flush } from './utils/css-injector';

export { AsForwarder } from './AsForwarder';

export {
  AnimationResolver,
  AddCssTokenVariables,
  FontResolver,
} from './plugins';

export { INTERNAL_updateCSSStyleInOrderedResolved } from './updateCSSStyleInOrderedResolved';
