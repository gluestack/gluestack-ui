import { useMenu as useMenuWeb, AriaMenuOptions } from '@react-aria/menu';
import { TreeState } from '@react-stately/tree';
import { mapDomPropsToRN } from '@gluestack-ui-nightly/utils/aria';
import { RefObject } from 'react';

export const useMenu = (
  props: AriaMenuOptions<unknown>,
  state: TreeState<unknown>,
  ref: RefObject<any>
) => {
  let params = useMenuWeb(props, state, ref);
  params.menuProps = mapDomPropsToRN(params.menuProps);

  return params;
};
