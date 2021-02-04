import {AriaButtonProps} from '@react-types/button';
import {HTMLAttributes, RefObject, useEffect} from 'react';
import {MenuTriggerState} from '@react-stately/menu';
import {useMenuTrigger as useMenuTriggerWeb} from "@react-aria/menu"

interface MenuTriggerAriaProps {
  /** The type of menu that the menu trigger opens. */
  type?: 'menu' | 'listbox'
}

interface MenuTriggerAria {
  /** Props for the menu trigger element. */
  menuTriggerProps: AriaButtonProps,

  /** Props for the menu. */
  menuProps: HTMLAttributes<HTMLElement>
}

/**
 * Provides the behavior and accessibility implementation for a menu trigger.
 * @param props - Props for the menu trigger.
 * @param state - State for the menu trigger.
 */
export function useMenuTrigger(props: MenuTriggerAriaProps, state: MenuTriggerState, ref: RefObject<HTMLElement>): MenuTriggerAria {
 
  let params = useMenuTriggerWeb(props, state, ref);

  useEffect(()=>{
    //@ts-ignore
    if (ref.current) ref.current.onkeydown = params.menuTriggerProps.onKeyDown;
  },[])


  // Todo - Debug - onPressStart doesn't work after these steps.
  // 1. Use mouse clicks to open the trigger.
  // 2. Try opening using spacebar/enter 
  params.menuTriggerProps.onPressStart = () => {}

  params.menuTriggerProps.onPress = (e) =>  {
    if (e.pointerType === 'touch') {
      state.toggle();
    } else {
      state.toggle(e.pointerType === 'keyboard' || e.pointerType === 'virtual' ? 'first' : null);
    }
  }

  return params

}
