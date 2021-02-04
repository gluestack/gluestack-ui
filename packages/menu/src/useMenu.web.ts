import { useMenu as useMenuWeb, AriaMenuOptions } from '@react-aria/menu';
import { TreeState } from '@react-stately/tree';
import { RefObject, useEffect } from 'react';

export const useMenu = (
  props: AriaMenuOptions<unknown> & { accessibilityLabel: string },
  state: TreeState<unknown>,
  ref: RefObject<any>
) => {
  let newProps = { ...props, 'aria-label': props.accessibilityLabel };
  let params = useMenuWeb(newProps, state, ref);

  useEffect(() => {
    ref.current.onkeydown = params.menuProps.onKeyDownCapture;
  }, []);

  return params;
};
