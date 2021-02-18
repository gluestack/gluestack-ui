import { useMenu as useMenuWeb, AriaMenuOptions } from '@react-aria/menu';
import { TreeState } from '@react-stately/tree';
import { mapDomPropsToRN } from '@react-native-aria/utils';
import { RefObject } from 'react';

export const useMenu = (
  props: AriaMenuOptions<unknown> & { accessibilityLabel: string },
  state: TreeState<unknown>,
  ref: RefObject<any>
) => {
  let newProps = { ...props, 'aria-label': props.accessibilityLabel };
  let params = useMenuWeb(newProps, state, ref);
  params.menuProps = mapDomPropsToRN(params.menuProps);

  return params;
};
