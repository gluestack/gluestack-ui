import React, { forwardRef } from 'react';
import type { IVStackProps } from './types';
// import { flattenChildren } from '@gluestack-ui/utils';
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
//   console.log(JSON.stringify(console.timeMap, null, 2));
// };
export function VStack<
  StyledVStackProps
  // StyledVStackSpacerProps
>(
  Root: React.ComponentType<StyledVStackProps>
  // Spacer: React.ComponentType<StyledVStackSpacerProps>
) {
  return forwardRef(
    ({ children, ...props }: StyledVStackProps & IVStackProps, ref?: any) => {
      // const getSpacedChildren = (children: any) => {
      //   console.setStartTimeStamp('getSpacedChildren');
      //   let childrenArray = React.Children.toArray(flattenChildren(children));
      //   console.setEndTimeStamp('getSpacedChildren');
      //   childrenArray = reversed ? [...childrenArray].reverse() : childrenArray;
      //   childrenArray = childrenArray.map((child: any, index: number) => {
      //     return (
      //       <React.Fragment key={child.key ?? `spaced-child-${index}`}>
      //         {child}
      //         {index < childrenArray.length - 1 && space && (
      //           //@ts-ignore
      //           <Spacer size={space} />
      //         )}
      //       </React.Fragment>
      //     );
      //   });
      //   return childrenArray;
      // };

      return (
        <Root ref={ref} {...(props as StyledVStackProps)}>
          {children}
        </Root>
      );
    }
  );
}
