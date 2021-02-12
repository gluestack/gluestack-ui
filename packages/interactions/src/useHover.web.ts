import { useHover as useHoverWeb, HoverProps } from '@react-aria/interactions';
import { useEffect } from 'react';
import { attachEventHandlersOnRef } from '@react-native-aria/utils';

export const useHover = (props: HoverProps, ref: any) => {
  let params = useHoverWeb(props);
  useEffect(() => {
    attachEventHandlersOnRef(params.hoverProps, ref);
  }, []);

  return params;
};
