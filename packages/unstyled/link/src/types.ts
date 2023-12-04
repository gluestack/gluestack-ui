import type { MutableRefObject } from 'react';
import type { GestureResponderEvent, ViewProps } from 'react-native';

export interface InterfaceLinkProps extends ViewProps {
  /**
   * URL that should be opened on Link press
   */
  href?: string | undefined;
  /**
   * Callback that will be invoked on Link press
   */
  onPress?: ((event?: GestureResponderEvent) => any) | null | undefined;
  /**
   * If true, link will be opened in new tab on web. It uses _target property to achieve this
   */
  isExternal?: boolean;
  isPressed?: boolean;
  isDisabled?: boolean;
  isHovered?: boolean;
  isFocusVisible?: boolean;
}

export type IUseLinkProp = {
  href?: string;
  isExternal?: boolean;
  onPress: ((event?: GestureResponderEvent) => any) | null | undefined;
  _ref: MutableRefObject<any>;
};

export type ILinkComponentType<Root, TextProps> =
  React.ForwardRefExoticComponent<Root & InterfaceLinkProps> & {
    Text: React.ForwardRefExoticComponent<TextProps>;
  };
