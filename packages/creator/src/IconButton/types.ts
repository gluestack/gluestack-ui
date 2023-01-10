import type { MutableRefObject } from 'react';
import type { PressableProps } from 'react-native';
export interface InterfaceIconButtonProps extends PressableProps {
  /**
   * If true, the button will be disabled.
   */
  isDisabled?: boolean;
  /**
   * The icon to be used. Refer to the Icon section of the docs for the available icon options.
   */
  icon?: JSX.Element;
  /**
   * Props to be passed to the icon used inside of IconButton.
   */
}

export type IIconButtonProps = InterfaceIconButtonProps;

export type IIconButtonComponentType<
  StyledIconButton,
  StyledIconButtonText,
  StyledIconButtonSpinner
> = ((
  props: StyledIconButton & IIconButtonProps & { ref?: MutableRefObject<any> }
) => JSX.Element) & {
  Text: React.MemoExoticComponent<
    (
      props: StyledIconButtonText & { ref?: MutableRefObject<any> }
    ) => JSX.Element
  >;
  Spinner: React.MemoExoticComponent<
    (
      props: StyledIconButtonSpinner & { ref?: MutableRefObject<any> }
    ) => JSX.Element
  >;
};
