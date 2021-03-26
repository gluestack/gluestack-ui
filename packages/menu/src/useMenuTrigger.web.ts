import { RefObject } from 'react';
import type { MenuTriggerState } from '@react-stately/menu';
import { useMenuTrigger as useMenuTriggerWeb } from '@react-aria/menu';
import { mapDomPropsToRN } from '@react-native-aria/utils';

interface MenuTriggerAriaProps {
  /** The type of menu that the menu trigger opens. */
  type?: 'menu' | 'listbox';
}

interface MenuTriggerAria {
  /** Props for the menu trigger element. */
  menuTriggerProps: any;

  /** Props for the menu. */
  menuProps: any;
}

/**
 * Provides the behavior and accessibility implementation for a menu trigger.
 * @param props - Props for the menu trigger.
 * @param state - State for the menu trigger.
 */
export function useMenuTrigger(
  props: MenuTriggerAriaProps,
  state: MenuTriggerState,
  ref: RefObject<HTMLElement>
): MenuTriggerAria {
  let params = useMenuTriggerWeb(props, state, ref);

  // onKeyDown is not supported in Pressable so used onKeyDownCapture instead!
  // https://github.com/necolas/react-native-web/issues/1862
  //@ts-ignore
  params.menuTriggerProps.onKeyDownCapture = params.menuTriggerProps.onKeyDown;
  params.menuTriggerProps.onKeyDown = undefined;

  // Todo - Debug - onPressStart doesn't work after these steps.
  // 1. Use mouse clicks to open the trigger.
  // 2. Try opening using spacebar/enter
  params.menuTriggerProps.onPressStart = () => {};
  params.menuTriggerProps.onPress = () => state.toggle('first');

  params.menuProps = mapDomPropsToRN(params.menuProps);
  params.menuTriggerProps = mapDomPropsToRN(params.menuTriggerProps);
  // @ts-ignore - Get types for Universal apps
  params.menuTriggerProps.accessibilityRole = 'button';

  return params;
}
