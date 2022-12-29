import type { MutableRefObject } from 'react';
import type { PressableProps } from 'react-native';

export interface InterfaceActionsheetProps {
  /**
   * If true, the ActionSheet will open. Useful for controllable state behavior.
   */
  isOpen?: boolean;
  /**
   * Callback invoked when the modal is closed.
   */
  onClose?: () => any;
  /**
   * If true, disables the overlay.
   * @default false
   */
  disableOverlay?: boolean;
  /* If true, renders react-native native modal
   * @default false
   */
  useRNModal?: boolean;
}

export interface InterfaceActionsheetItemProps extends PressableProps {
  isDisabled?: boolean;
  isHovered?: boolean;
  isPressed?: boolean;
  isFocused?: boolean;
  isFocusVisible?: boolean;
}

// export interface IActionsheetContentProps {
//   /**
//    * Props applied on area above actionsheet content.
//    */
//   _dragIndicatorWrapperOffSet?: InterfaceBoxProps<IActionsheetContentProps>;
//   /**
//    * Props applied on area around drag indicator.
//    */
//   _dragIndicatorWrapper?: InterfaceBoxProps<IActionsheetContentProps>;
//   /**
//    * Props applied on drag indicator.
//    */
//   _dragIndicator?: InterfaceBoxProps<IActionsheetContentProps>;
// }

export type IActionsheetComponentType<A, B, C, D, E, F, G> = ((
  props: A & IActionsheetProps & { ref?: MutableRefObject<any> }
) => JSX.Element) & {
  Content: React.MemoExoticComponent<
    (props: B & { ref?: MutableRefObject<any> }) => JSX.Element
  >;
  Item: React.MemoExoticComponent<
    (props: C & PressableProps & { ref?: MutableRefObject<any> }) => JSX.Element
  >;
  ItemText: React.MemoExoticComponent<
    (props: D & PressableProps & { ref?: MutableRefObject<any> }) => JSX.Element
  >;
  DragIndicator: React.MemoExoticComponent<
    (props: E & PressableProps & { ref?: MutableRefObject<any> }) => JSX.Element
  >;
  Backdrop: React.MemoExoticComponent<
    (props: F & PressableProps & { ref?: MutableRefObject<any> }) => JSX.Element
  >;
  DragIndicatorWrapper: React.MemoExoticComponent<
    (props: G & PressableProps & { ref?: MutableRefObject<any> }) => JSX.Element
  >;
  // Header: React.MemoExoticComponent<
  //   (
  //     props: IActionsheetHeaderProps & { ref?: MutableRefObject<any> }
  //   ) => JSX.Element
  // >;
  // Footer: React.MemoExoticComponent<
  //   (
  //     props: IActionsheetFooterProps & { ref?: MutableRefObject<any> }
  //   ) => JSX.Element
  // >;
};

export type IActionsheetProps = InterfaceActionsheetProps;
