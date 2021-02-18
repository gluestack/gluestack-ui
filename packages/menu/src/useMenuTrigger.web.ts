import type { AriaButtonProps } from '@react-types/button';
import { HTMLAttributes, RefObject, useEffect } from 'react';
import type { MenuTriggerState } from '@react-stately/menu';
import { useMenuTrigger as useMenuTriggerWeb } from '@react-aria/menu';
import { mapDomPropsToRN } from '@react-native-aria/utils';

interface MenuTriggerAriaProps {
  /** The type of menu that the menu trigger opens. */
  type?: 'menu' | 'listbox';
}

interface MenuTriggerAria {
  /** Props for the menu trigger element. */
  menuTriggerProps: AriaButtonProps;

  /** Props for the menu. */
  menuProps: HTMLAttributes<HTMLElement>;
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
  useEffect(() => {
    //@ts-ignore
    if (ref.current) ref.current.onkeydown = params.menuTriggerProps.onKeyDown;
  }, []);

  // Todo - Debug - onPressStart doesn't work after these steps.
  // 1. Use mouse clicks to open the trigger.
  // 2. Try opening using spacebar/enter
  params.menuTriggerProps.onPressStart = () => {};
  params.menuTriggerProps.onPress = () => state.toggle('first');

  params.menuProps = mapDomPropsToRN(params.menuProps);
  params.menuTriggerProps = mapDomPropsToRN(params.menuTriggerProps);

  return params;
}
