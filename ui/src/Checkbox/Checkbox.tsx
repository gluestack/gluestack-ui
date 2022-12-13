// import React, { createContext } from 'react';
// import { UIContext } from '../UIProvider';
// import { useHover } from '@react-native-aria/interactions';
// import { useFocusRing } from '@react-native-aria/focus';
// import { mergeRefs } from '../utils';
// import { View } from 'react-native';
// import { VisuallyHidden } from '@react-aria/visually-hidden';
// import { useToggleState } from '@react-stately/toggle';
// import { useCheckbox } from '@react-native-aria/checkbox';

// export const CheckboxContext = createContext<any>({});

// export function Checkbox(
//   {
//     wrapperRef,
//     isHovered: isHoveredProp,
//     isFocusVisible: isFocusVisibleProp,
//     isInvalid,
//     isReadOnly,
//     isIndeterminate,
//     ...props
//   }: any,
//   ref: any
// ) {

//   const state = useToggleState({
//     ...props,
//     defaultSelected: props.defaultIsChecked,
//     isSelected: props.isChecked,
//   });

//   const _ref = React.useRef();
//   const mergedRef = mergeRefs([ref, _ref]);

//   const { inputProps } = useCheckbox(
//     {
//       'aria-label': props.accessibilityLabel,
//     },
//     state,
//     //@ts-ignore
//     mergedRef
//   );

//   return (
//     <CheckboxComponent
//       wrapperRef={wrapperRef}
//       mergedRef={mergedRef}
//       inputProps={inputProps}
//       isInvalid={isInvalid}
//       isReadOnly={isReadOnly}
//       isHovered={isHoveredProp}
//       isIndeterminate={isIndeterminate}
//       isFocusVisible={isFocusVisibleProp}
//     />
//   );
// }

// const CheckboxComponent = ({
//   wrapperRef,
//   inputProps,
//   combinedProps,
//   isInvalid,
//   isReadOnly,
//   isIndeterminate,
//   mergedRef,
//   isHovered: isHoveredProp,
//   isFocusVisible: isFocusVisibleProp,
//   children,
//   ...props
// }: any) => {
//   const { StyledCheckbox } = React.useContext(UIContext);
//   const _ref = React.useRef();
//   const { isHovered } = useHover({}, _ref);

//   const { checked: isChecked, disabled: isDisabled } = inputProps;

//   const { focusProps, isFocusVisible } = useFocusRing();

//   const mergedWrapperRef = React.useMemo(
//     () => mergeRefs([wrapperRef, _ref]),
//     [wrapperRef]
//   );

//   return (
//     <View ref={mergedWrapperRef}>
//       {/* <VisuallyHidden>
//         <input {...focusProps} ref={mergedRef} />
//       </VisuallyHidden> */}
//       <StyledCheckbox {...props}>{children}</StyledCheckbox>
//     </View>
//   );
// };

import React from 'react';
import { UIContext } from '../UIProvider';

export function Checkbox({ children, ...props }: any) {
  const { StyledCheckbox } = React.useContext(UIContext);
  return <StyledCheckbox {...props}>{children}</StyledCheckbox>;
}
