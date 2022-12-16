// import React from 'react';
// import type { ISelectProps } from './types';
// import { UIContext } from '../UIProvider';
// import { SelectProvider, useContext } from './SelectContext';
// import { useControllableState } from '../hooks/useControllableProp';
// export function SelectRoot({
//   children,
//   onValueChange,
//   defaultValue,
//   ...props
// }: ISelectProps) {
//   return null;
//   const [selectedValue, setSelectedValue] = React.useState('');
//   const { StyledSelectRoot } = React.useContext(UIContext);
//   const [value, setValue] = useControllableState({
//     value: selectedValue,
//     defaultValue,
//     onChange: (newValue) => {
//       onValueChange && onValueChange(newValue);
//       setIsOpen(false);
//     },
//   });

//   const contextValue = React.useMemo(() => {
//     return {
//       onValueChange: setValue,
//       selectedValue: value,
//     };
//   }, [value, setValue]);

//   return (
//     <StyledSelectRoot {...props}>
//       {({ resolveContextChildrenStyle }: any) => {
//         return (
//           <SelectProvider
//             resolveContextChildrenStyle={resolveContextChildrenStyle}
//             {...contextValue}
//           >
//             {children}
//           </SelectProvider>
//         );
//       }}
//     </StyledSelectRoot>
//   );
// }
