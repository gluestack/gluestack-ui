import type { RefObject } from 'react';
import type { MenuTriggerState } from '@react-stately/menu';
import type { AccessibilityProps, PressableProps } from 'react-native';
import { useOverlayTrigger } from '@react-native-aria/overlays';

interface MenuTriggerAriaProps {
  /** The type of menu that the menu trigger opens. */
  type?: 'menu' | 'listbox';
}

interface MenuTriggerAria {
  /** Props for the menu trigger element. */
  menuTriggerProps: PressableProps;

  /** Props for the menu. */
  menuProps: AccessibilityProps;
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
  const { triggerProps } = useOverlayTrigger(props as any, state, ref);

  return {
    menuTriggerProps: {
      onPress() {
        state.toggle();
      },
      ...triggerProps,
    },
    menuProps: {},
  };
}
