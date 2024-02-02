import { ScrollView as RNScrollView } from 'react-native';
import React from 'react';
import { tva } from '@gluestack-ui/nativewind-utils';

const scrollViewStyle = tva({});
export const ScrollView = React.forwardRef(
  ({ className, ...props }: any, ref) => {
    return (
      <RNScrollView
        ref={ref}
        {...props}
        className={scrollViewStyle({ class: className })}
      />
    );
  }
);

// const StyledRoot = styled(
//   ScrollView,
//   {},
//   {
//     resolveProps: ['contentContainerStyle'],
//   },
//   {
//     propertyResolver: {
//       contentContainerStyle: (rawValue, resolver) => {
//         // eslint-disable-next-line react-hooks/rules-of-hooks
//         const aliases: any = useStyled()?.config?.aliases;
//         const newValue = {} as Record<any, string>;
//         Object.entries(rawValue).forEach(([key, value]: any) => {
//           if (Object.hasOwn(aliases, key)) {
//             newValue[`${aliases[key]}`] = resolver(
//               value,
//               //@ts-ignore
//               propertyTokenMap[aliases[key]]
//             );
//           } else {
//             //@ts-ignore
//             newValue[`${key}`] = resolver(value, propertyTokenMap[key]);
//           }
//         });
//         rawValue = newValue;
//         return rawValue;
//       },
//     },
//   }
// );

// export const StyledRoot = StyledRoot;
